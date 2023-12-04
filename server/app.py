from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource

from models import db, Customer, Item, Order, Payment, Review
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

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

        new_record = Customer(
            name=request.form['name'],
            email=request.form['email'],
            password=request.form['password'],
            address=request.form['address'],
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
