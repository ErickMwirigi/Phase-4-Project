from flask import Flask, jsonify, request, make_response, session
from flask_migrate import Migrate
from flask_restful import Api, Resource

from models import db, Customer, Item, Order, Payment, Review, Favorite
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
app.secret_key = 'no_key'

migrate = Migrate(app, db)
CORS(app)
db.init_app(app)

api = Api(app)

class Index(Resource):

    def get(self):

        response_dict = {
            "index": "Welcome to the Project RESTful API",
        }

        response = make_response(
            jsonify(response_dict),
            200,
        )

        return response

api.add_resource(Index, '/')

class LogIn(Resource):

    # def get(self):
    #     user = Customer.query.filter(Customer.id == session.get('user_id')).first()
    #     if user:
    #         return make_response(jsonify(user.to_dict()),200)
    #     else:
    #         return make_response(jsonify({'message': '401: Not Authorized'}), 401)
    
    def post(self):
        user = Customer.query.filter(Customer.lastname == request.get_json()['username']).first()

        session['customer_id'] = user.id
        response = make_response(
            jsonify(user.to_dict()),
            201,
        )

        return response

api.add_resource(LogIn, '/login')

class UserSession(Resource):

    def get(self):
        user = Customer.query.filter(Customer.id == session.get('customer_id')).first()
        if user:
            return make_response(
                jsonify(user.to_dict()),
                200
            )
        else:
            return make_response(
                {'message': session.get('customer_id')},
                200
            )

api.add_resource(UserSession, '/active-session')

# CRUD for the Customer Table

class Customers(Resource):

    def get(self):

        response_dict_list = [n.to_dict() for n in Customer.query.all()]

        response = make_response(
            jsonify(response_dict_list),
            200,
        )

        return response

    def post(self):

        data = request.get_json()
        new_record = Customer(
            firstname=data['firstname'],
            lastname=data['lastname'],
            email=data['email'],
            password=data['password'],
            address=data['address'],
        )

        db.session.add(new_record)
        db.session.commit()

        response_dict = new_record.to_dict()

        response = make_response(
            jsonify(response_dict),
            201,
        )

        return response

api.add_resource(Customers, '/customers')

class CustomerByID(Resource):

    def get(self, id):

        response_dict = Customer.query.filter_by(id=id).first().to_dict()

        response = make_response(
            jsonify(response_dict),
            200,
        )

        return response

    def patch(self, id):

        record = Customer.query.filter_by(id=id).first() 
        for attr in request.get_json():
            setattr(record, attr, request.get_json()[attr])
            db.session.commit()

        response_dict = record.to_dict()

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response

    def delete(self, id):

        record = Customer.query.filter_by(id=id).first()

        db.session.delete(record)
        db.session.commit()

        response_dict = {"message": "record successfully deleted"}

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response

api.add_resource(CustomerByID, '/customers/<int:id>')


# CRUD for the Item Table

class Items(Resource):

    def get(self):

        response_dict_list = [n.to_dict() for n in Item.query.all()]

        response = make_response(
            jsonify(response_dict_list),
            200,
        )

        return response

    def post(self):

        new_record = Item(
            name=request.form['name'],
            description=request.form['description'],
            price=request.form['price'],
            category=request.form['category'],
            imageUrl=request.form['imageUrl'],
            rating=request.form['rating'],
            quantity=request.form['quantity'],
        )

        db.session.add(new_record)
        db.session.commit()

        response_dict = new_record.to_dict()

        response = make_response(
            jsonify(response_dict),
            201,
        )

        return response

api.add_resource(Items, '/items')

class ItemByID(Resource):

    def get(self, id):

        response_dict = Item.query.filter_by(id=id).first().to_dict()

        response = make_response(
            jsonify(response_dict),
            200,
        )

        return response

    def patch(self, id):

        record = Item.query.filter_by(id=id).first()
        for attr in request.form:
            setattr(record, attr, request.form[attr])

        db.session.add(record)
        db.session.commit()

        response_dict = record.to_dict()

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response

    def delete(self, id):

        record = Item.query.filter_by(id=id).first()

        db.session.delete(record)
        db.session.commit()

        response_dict = {"message": "record successfully deleted"}

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response

api.add_resource(ItemByID, '/items/<int:id>')

#CRUD for Favorites

class FavoriteItems(Resource):

    def get(self):
        
        items = Favorite.query.all()
        
        response = make_response(
            jsonify([item.to_dict() for item in items]),
            200
        )
        return response
    
    def post(self):
        
        favorites = Favorite(
            customer_id=request.get_json()['customer_id'],
            item_id=request.get_json()['item_id'],
        )

        db.session.add(favorites)
        db.session.commit()

        response_dict = favorites.to_dict()

        response = make_response(
            jsonify(response_dict),
            201,
        )

        return response

api.add_resource(FavoriteItems, "/favorites")

class FavoriteItemsID(Resource):

    def delete(self,id):
        
        item = Favorite.query.filter_by(id=id).first()

        db.session.delete(item)
        db.session.commit()

        response_dict = {"message": "record successfully deleted"}

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response
    
api.add_resource(FavoriteItemsID, "/favorites/<int:id>")

# CRUD for the Order Table

class Orders(Resource):

    def get(self):

        response_dict_list = [n.to_dict() for n in Order.query.all()]

        response = make_response(
            jsonify(response_dict_list),
            200,
        )

        return response

    def post(self):

        new_record = Order(
            orderdate=request.form['orderdate'],
            price=request.form['price'],
            status=request.form['status'],
        )

        db.session.add(new_record)
        db.session.commit()

        response_dict = new_record.to_dict()

        response = make_response(
            jsonify(response_dict),
            201,
        )

        return response

api.add_resource(Orders, '/orders')

class OrderByID(Resource):

    def get(self, id):

        response_dict = Order.query.filter_by(id=id).first().to_dict()

        response = make_response(
            jsonify(response_dict),
            200,
        )

        return response

    def patch(self, id):

        record = Order.query.filter_by(id=id).first()
        for attr in request.form:
            setattr(record, attr, request.form[attr])

        db.session.add(record)
        db.session.commit()

        response_dict = record.to_dict()

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response

    def delete(self, id):

        record = Order.query.filter_by(id=id).first()

        db.session.delete(record)
        db.session.commit()

        response_dict = {"message": "record successfully deleted"}

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response

api.add_resource(OrderByID, '/orders/<int:id>')


# CRUD for the Payment Table

class Payments(Resource):

    def get(self):

        response_dict_list = [n.to_dict() for n in Payment.query.all()]

        response = make_response(
            jsonify(response_dict_list),
            200,
        )

        return response

    def post(self):

        new_record = Payment(
            paymentdate=request.form['paymentdate'],
            paymentmedhod=request.form['paymentmedhod'],
            amount=request.form['amount'],
        )

        db.session.add(new_record)
        db.session.commit()

        response_dict = new_record.to_dict()

        response = make_response(
            jsonify(response_dict),
            201,
        )

        return response

api.add_resource(Payments, '/payments')

class PaymentByID(Resource):

    def get(self, id):

        response_dict = Payment.query.filter_by(id=id).first().to_dict()

        response = make_response(
            jsonify(response_dict),
            200,
        )

        return response

    def patch(self, id):

        record = Payment.query.filter_by(id=id).first()
        for attr in request.form:
            setattr(record, attr, request.form[attr])

        db.session.add(record)
        db.session.commit()

        response_dict = record.to_dict()

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response

    def delete(self, id):

        record = Payment.query.filter_by(id=id).first()

        db.session.delete(record)
        db.session.commit()

        response_dict = {"message": "record successfully deleted"}

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response

api.add_resource(PaymentByID, '/payments/<int:id>')

# CRUD for the Review Table

class Reviews(Resource):

    def get(self):

        response_dict_list = [n.to_dict() for n in Review.query.all()]

        response = make_response(
            jsonify(response_dict_list),
            200,
        )

        return response

    def post(self):

        new_record = Review(
            rating=request.form['rating'],
            comment=request.form['comment'],
            date=request.form['date'],
        )

        db.session.add(new_record)
        db.session.commit()

        response_dict = new_record.to_dict()

        response = make_response(
            jsonify(response_dict),
            201,
        )

        return response

api.add_resource(Reviews, '/reviews')

class ReviewByID(Resource):

    def get(self, id):

        response_dict = Review.query.filter_by(id=id).first().to_dict()

        response = make_response(
            jsonify(response_dict),
            200,
        )

        return response

    def patch(self, id):

        record = Review.query.filter_by(id=id).first()
        for attr in request.form:
            setattr(record, attr, request.form[attr])

        db.session.add(record)
        db.session.commit()

        response_dict = record.to_dict()

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response

    def delete(self, id):

        record = Review.query.filter_by(id=id).first()

        db.session.delete(record)
        db.session.commit()

        response_dict = {"message": "record successfully deleted"}

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response

api.add_resource(ReviewByID, '/reviews/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
