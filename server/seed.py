from random import choice as rc
import json 
from faker import Faker

from app import app
from models import db, Customer, Item

with open("C:/Users/Melvin Mbae/Development/Code/project-p4-clone/Phase-4-Project/client/db.json", mode="r") as itemdata:
    data = json.load(itemdata)

item_data = [item for item in data]

# print(data)

fake = Faker()

with app.app_context():

    Item.query.delete()
#     Customer.query.delete()

#     customers = []
#     for n in range(50):
#         customer = Customer(name=fake.name())
#         customers.append(customer)

#     db.session.add_all(customers)

    items = []
    rating = [1, 2, 3, 4, 5]
    for n in data["products"]:
        item = Item(name= n["name"], price=n["price"], description=n["description"], category=n["category"], quantity=n["stock"], imageUrl=n["image_url"], rating=rc(rating)) #, customer=rc(customers)
        items.append(item)
        
    # print(items)
        db.session.add_all(items)
        db.session.commit()

print(items)