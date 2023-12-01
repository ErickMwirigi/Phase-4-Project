from random import choice as rc
import json

# from faker import Faker

from app import app
from models import db, Customer, Item

with open('/home/mwagash/Development/code/Projects/Market_App/Phase-4-Project/client/db.json' , mode='r') as data:
    items = json.load(data)
    data = items['products']

    items = []
    rating = ['One', 'Two', 'Three', 'Four', 'Five']
    for item in data:
        item = Item(name=item['name'], price=item['price'] , desription=item['description'] , category=item['category]'],rating=rc(rating))
        items.append(item)
        
    print(items)

    # db.session.add_all(items)
    # db.session.commit()
