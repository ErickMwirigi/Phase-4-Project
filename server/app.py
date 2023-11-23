from flask import Flask, make_response, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db, Customer, Item

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def index():
    response = make_response(
        '<h1>Welcome to the Our App directory!</h1>',
        200
    )
    return response

#

@app.route('/customers')
def customers():

    customers = []
    for c in Customer.query.all():
        customer_dict = {
            "name": c.name
        }
        customers.append(customer_dict)

    response = make_response(
        jsonify(customers),
        200
    )
    response.headers["Content-Type"] = "application/json"

    return response

@app.route('/items')
def items():

    items = []
    for i in Item.query.all():
        item_dict = {
            "name": i.name,
            "rating": i.rating
        }
        items.append(item_dict)

    response = make_response(
        jsonify(items),
        200
    )
    response.headers["Content-Type"] = "application/json"

    return response

@app.route('/customers/<int:id>')
def customer_by_id(id):
    customer = Customer.query.filter_by(id=id).first()

    customer_dict = {
        "name": customer.name
    }

    response = make_response(
        jsonify(customer_dict),
        200
    )
    response.headers["Content-Type"] = "application/json"

    return response


@app.route('/items/<int:id>')
def item_by_id(id):
    item = Item.query.filter_by(id=id).first()

    item_dict = {
        "name": item.name,
        "rating": item.rating
    }

    response = make_response(
        jsonify(item_dict),
        200
    )
    response.headers["Content-Type"] = "application/json"

    return response

@app.route('/customers', methods=['GET', 'POST'])
def post_customers():

    if request.method == 'GET':
        customers = []
        for c in Customer.query.all():
            customer_dict = c.to_dict()
            customers.append(customer_dict)

        response = make_response(
            jsonify(customers),
            200
        )

        return response

    elif request.method == 'POST':
        new_customer = Customer(
            name=request.form.get("name"),
        )

        db.session.add(new_customer)
        db.session.commit()

        customer_dict = new_customer.to_dict()

        response = make_response(
            jsonify(customer_dict),
            201
        )

        return response


@app.route('/customers/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def cutomer_update(id):
    customer = Customer.query.filter_by(id=id).first()

    if customer == None:
        response_body = {
            "message": "This record does not exist in our database. Please try again."
        }
        response = make_response(jsonify(response_body), 404)

        return response

    else:
        if request.method == 'GET':
            customer_dict = customer.to_dict()

            response = make_response(
                jsonify(customer_dict),
                200
            )

            return response

        elif request.method == 'PATCH':
            customer = Customer.query.filter_by(id=id).first()

            for attr in request.form:
                setattr(customer, attr, request.form.get(attr))

            db.session.add(customer)
            db.session.commit()

            customer_dict = customer.to_dict()

            response = make_response(
                jsonify(customer_dict),
                200
            )

            return response

        elif request.method == 'DELETE':
            db.session.delete(customer)
            db.session.commit()

            response_body = {
                "delete_successful": True,
                "message": "Review deleted."    
            }

            response = make_response(
                jsonify(response_body),
                200
            )

            return response

@app.route('/items', methods=['GET', 'POST'])
def post_items():

    if request.method == 'GET':
        items = []
        for i in Item.query.all():
            item_dict = i.to_dict()
            items.append(item_dict)

        response = make_response(
            jsonify(items),
            200
        )

        return response

    elif request.method == 'POST':
        new_item = Item(
            name=request.form.get("name"),
            rating=request.form.get("rating")
        )

        db.session.add(new_item)
        db.session.commit()

        item_dict = new_item.to_dict()

        response = make_response(
            jsonify(item_dict),
            201
        )

        return response


@app.route('/items/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def item_update(id):
    item = Item.query.filter_by(id=id).first()

    if item == None:
        response_body = {
            "message": "This record does not exist in our database. Please try again."
        }
        response = make_response(jsonify(response_body), 404)

        return response

    else:
        if request.method == 'GET':
            item_dict = item.to_dict()

            response = make_response(
                jsonify(item_dict),
                200
            )

            return response

        elif request.method == 'PATCH':
            item = Item.query.filter_by(id=id).first()

            for attr in request.form:
                setattr(item, attr, request.form.get(attr))

            db.session.add(item)
            db.session.commit()

            item_dict = item.to_dict()

            response = make_response(
                jsonify(item_dict),
                200
            )

            return response

        elif request.method == 'DELETE':
            db.session.delete(item)
            db.session.commit()

            response_body = {
                "delete_successful": True,
                "message": "Review deleted."    
            }

            response = make_response(
                jsonify(response_body),
                200
            )

            return response



if __name__ == '__main__':
    app.run(port=5555)