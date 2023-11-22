from flask import Flask, make_response, jsonify
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



if __name__ == '__main__':
    app.run(port=5555)