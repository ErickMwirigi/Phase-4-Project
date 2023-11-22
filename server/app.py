from flask import Flask, make_response
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

@app.route('/customers/<int:id>')
def customer_by_id(id):
    customer = Customer.query.filter(Customer.id == id).first()

    response_body = f'''
        <h1>Information for {customer.name}</h1>
        
        
    '''

    response = make_response(response_body, 200)

    return response

@app.route('/items/<int:id>')
def item_by_id(id):
    item = Item.query.filter(Item.id == id).first()

    response_body = f'''
        <h1>Information for {item.name}</h1>
        <h2>Rated {item.rating}</h2>
        
        
    '''

    response = make_response(response_body, 200)

    return response

if __name__ == '__main__':
    app.run(port=5555)