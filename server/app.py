from flask import Flask, make_response, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db, Customer, Item, Order, Payment, Review

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

# GET for customers, items, orders, payments and reviews

@app.route('/customers')
def customers():

    customers = []
    for c in Customer.query.all():
        customer_dict = {
            "name": c.name,
            "email": c.email,
            "password": c.password,
            "address": c.address
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
            "description": i.description,
            "price": i.price,
            "category": i.category,
            "imageUrl": i.imageUrl,
            "rating": i.rating
        }
        items.append(item_dict)

    response = make_response(
        jsonify(items),
        200
    )
    response.headers["Content-Type"] = "application/json"

    return response

@app.route('/orders')
def orders():

    orders = []
    for o in Order.query.all():
        order_dict = {
            "orderdate": o.orderdate,
            "price": o.price,
            "status": o.status
        }
        orders.append(order_dict)

    response = make_response(
        jsonify(orders),
        200
    )
    response.headers["Content-Type"] = "application/json"

    return response

@app.route('/payments')
def payments():

    payments = []
    for p in Payment.query.all():
        payment_dict = {
            "orderdate": o.orderdate,
            "price": o.price,
            "status": o.status
        }
        payments.append(payment_dict)

    response = make_response(
        jsonify(payments),
        200
    )
    response.headers["Content-Type"] = "application/json"

    return response

@app.route('/reviews')
def reviews():

    reviews = []
    for r in Review.query.all():
        review_dict = {
            "rating": r.rating,
            "comment": r.comment,
            "date": r.date
        }
        reviews.append(review_dict)

    response = make_response(
        jsonify(reviews),
        200
    )
    response.headers["Content-Type"] = "application/json"

    return response


# Get customer by ID customers, items, orders, payments and reviews

@app.route('/customers/<int:id>')
def customer_by_id(id):
    customer = Customer.query.filter_by(id=id).first()

    customer_dict = {
        "name": customer.name,
        "email": customer.email,
        "password": customer.password,
        "address": customer.address
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
        "description": item.description,
        "price": item.price,
        "category": item.category,
        "imageUrl": item.imageUrl,
        "rating": item.rating
    }

    response = make_response(
        jsonify(item_dict),
        200
    )
    response.headers["Content-Type"] = "application/json"

    return response


@app.route('/orders/<int:id>')
def order_by_id(id):
    order = Order.query.filter_by(id=id).first()

    order_dict = {
        "orderdate": order.orderdate,
        "price": order.price,
        "status": order.status
    }

    response = make_response(
        jsonify(order_dict),
        200
    )
    response.headers["Content-Type"] = "application/json"

    return response

@app.route('/payments/<int:id>')
def payment_by_id(id):
    payment = Payment.query.filter_by(id=id).first()

    payment_dict = {
        "paymentdate": payment.paymentdate,
        "paymentmedhod": payment.paymentmedhod,
        "amount": payment.amount
    }

    response = make_response(
        jsonify(payment_dict),
        200
    )
    response.headers["Content-Type"] = "application/json"

    return response

@app.route('/reviews/<int:id>')
def review_by_id(id):
    review = Review.query.filter_by(id=id).first()

    review_dict = {
        "rating": review.rating,
        "comment": review.comment,
        "date": review.date
    }

    response = make_response(
        jsonify(review_dict),
        200
    )
    response.headers["Content-Type"] = "application/json"

    return response




# Customers ['GET', 'POST'] + ['GET', 'PATCH', 'DELETE']



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
            email=request.form.get("email"),
            password=request.form.get("password"),
            address=request.form.get("address"),
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
def customer_update(id):
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



#Items ['GET', 'POST'] + ['GET', 'PATCH', 'DELETE']

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
            description=request.form.get("description"),
            price=request.form.get("price"),
            category=request.form.get("category"),
            imageUrl=request.form.get("imageUrl"),
            rating=request.form.get("rating"),
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


#Orders ['GET', 'POST'] + ['GET', 'PATCH', 'DELETE']

@app.route('/orders', methods=['GET', 'POST'])
def post_orders():

    if request.method == 'GET':
        orders = []
        for o in Order.query.all():
            order_dict = o.to_dict()
            orders.append(order_dict)

        response = make_response(
            jsonify(orders),
            200
        )

        return response

    elif request.method == 'POST':
        new_order = Order(
            orderdate=request.form.get("orderdate"),
            price=request.form.get("price"),
            status=request.form.get("status"),

        )

        db.session.add(new_order)
        db.session.commit()

        order_dict = new_order.to_dict()

        response = make_response(
            jsonify(order_dict),
            201
        )

        return response


@app.route('/orders/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def order_update(id):
    order = Order.query.filter_by(id=id).first()

    if order == None:
        response_body = {
            "message": "This record does not exist in our database. Please try again."
        }
        response = make_response(jsonify(response_body), 404)

        return response

    else:
        if request.method == 'GET':
            order_dict = order.to_dict()

            response = make_response(
                jsonify(order_dict),
                200
            )

            return response

        elif request.method == 'PATCH':
            order = Order.query.filter_by(id=id).first()

            for attr in request.form:
                setattr(order, attr, request.form.get(attr))

            db.session.add(order)
            db.session.commit()

            order_dict = order.to_dict()

            response = make_response(
                jsonify(order_dict),
                200
            )

            return response

        elif request.method == 'DELETE':
            db.session.delete(order)
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


#Payments ['GET', 'POST'] + ['GET', 'PATCH', 'DELETE']


@app.route('/payments', methods=['GET', 'POST'])
def post_payments():

    if request.method == 'GET':
        payments = []
        for p in Payment.query.all():
            payment_dict = p.to_dict()
            payments.append(payment_dict)

        response = make_response(
            jsonify(payments),
            200
        )

        return response

    elif request.method == 'POST':
        new_payment = Payment(
            paymentdate=request.form.get("paymentdate"),
            paymentmedhod=request.form.get("paymentmedhod"),
            amount=request.form.get("amount"),

        )

        db.session.add(new_payment)
        db.session.commit()

        payment_dict = new_payment.to_dict()

        response = make_response(
            jsonify(payment_dict),
            201
        )

        return response


@app.route('/payments/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def payment_update(id):
    payment = Payment.query.filter_by(id=id).first()

    if payment == None:
        response_body = {
            "message": "This record does not exist in our database. Please try again."
        }
        response = make_response(jsonify(response_body), 404)

        return response

    else:
        if request.method == 'GET':
            payment_dict = payment.to_dict()

            response = make_response(
                jsonify(payment_dict),
                200
            )

            return response

        elif request.method == 'PATCH':
            payment = Payment.query.filter_by(id=id).first()

            for attr in request.form:
                setattr(payment, attr, request.form.get(attr))

            db.session.add(payment)
            db.session.commit()

            payment_dict = payment.to_dict()

            response = make_response(
                jsonify(payment_dict),
                200
            )

            return response

        elif request.method == 'DELETE':
            db.session.delete(payment)
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

#Reviews ['GET', 'POST'] + ['GET', 'PATCH', 'DELETE']

@app.route('/reviews', methods=['GET', 'POST'])
def post_reviews():

    if request.method == 'GET':
        reviews = []
        for r in Review.query.all():
            review_dict = r.to_dict()
            reviews.append(review_dict)

        response = make_response(
            jsonify(reviews),
            200
        )

        return response

    elif request.method == 'POST':
        new_review = Review(
            rating=request.form.get("rating"),
            comment=request.form.get("comment"),
            date=request.form.get("date"),

        )

        db.session.add(new_review)
        db.session.commit()

        review_dict = new_review.to_dict()

        response = make_response(
            jsonify(review_dict),
            201
        )

        return response


@app.route('/reviews/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def review_update(id):
    review = Review.query.filter_by(id=id).first()

    if review == None:
        response_body = {
            "message": "This record does not exist in our database. Please try again."
        }
        response = make_response(jsonify(response_body), 404)

        return response

    else:
        if request.method == 'GET':
            review_dict = review.to_dict()

            response = make_response(
                jsonify(review_dict),
                200
            )

            return response

        elif request.method == 'PATCH':
            review = Review.query.filter_by(id=id).first()

            for attr in request.form:
                setattr(review, attr, request.form.get(attr))

            db.session.add(review)
            db.session.commit()

            review_dict = review.to_dict()

            response = make_response(
                jsonify(review_dict),
                200
            )

            return response

        elif request.method == 'DELETE':
            db.session.delete(review)
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