from random import choice as rc

from faker import Faker

from app import app
from models import db, Customer, Item



fake = Faker()

with app.app_context():

    Item.query.delete()
    Customer.query.delete()

    customers = []
    for n in range(50):
        customer = Customer(name=fake.name())
        customers.append(customer)

    db.session.add_all(customers)

    items = []
    rating = ['One', 'Two', 'Three', 'Four', 'Five']
    for n in range(100):
        item = Item(name=fake.first_name(), rating=rc(rating)) #, customer=rc(customers)
        items.append(item)

    db.session.add_all(items)
    db.session.commit()
