from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func
from sqlalchemy import ForeignKey, Column, Integer, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

#Remember to Serialize when all tables are added

db = SQLAlchemy()

class Customer(db.Model, SerializerMixin):
    __tablename__ = 'customers'

    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String, unique=True)
    lastname = db.Column(db.String, unique=True)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String, unique=True)
    address = db.Column(db.String, unique=True)
    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    # orders = relationship('Order', back_populates='customer')
    items = association_proxy('orders', 'item',
        creator=lambda it: Review(item=it))

    # payments = relationship('Payment', back_populates='customer')
    # items = association_proxy('payments', 'item',
    #     creator=lambda it: Review(item=it))
    #
    # reviews = relationship('Review', back_populates='customer')
    # items = association_proxy('reviews', 'item',
    #     creator=lambda it: Review(item=it))
    #
    # favorites = relationship('Favorite', back_populates='customer')
    # items = association_proxy('favorites', 'item',
    #     creator=lambda it: Favorite(item=it))
    #
    # serialize_rules = ('-orders.customer',),
    # serialize_rules = ('-payments.customer',),
    # serialize_rules = ('-reviews.customer',),
    # serialize_rules = ('-favorites.customer',)


    def __repr__(self):
        return f'<Customer Item {self.firstname}>'

class Item(db.Model, SerializerMixin):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.Integer)
    category = db.Column(db.String)
    imageUrl= db.Column(db.NVARCHAR)
    rating = db.Column(db.Integer)
    quantity = db.Column(db.Integer)
    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    def __repr__(self):
        return f'<Item {self.name}, {self.price}, {self.description}, {self.category}, {self.imageUrl},{self.quantity}>'



class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    # ordername = db.Column(db.string)
    orderdate = db.Column(db.Integer)
    price = db.Column(db.Integer)
    status = db.Column(db.String)
    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())



class Payment(db.Model, SerializerMixin):
    __tablename__ = 'payments'

    id = db.Column(db.Integer, primary_key=True)
    paymentdate = db.Column(db.Integer)
    paymentmedhod = db.Column(db.String)
    amount = db.Column(db.Integer)
    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    
class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer)
    comment = db.Column(db.String)
    date = db.Column(db.Integer)
    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    customer_id = db.Column(db.Integer(), db.ForeignKey('customers.id'))
    item_id = db.Column(db.Integer(), db.ForeignKey('items.id'))

    customer = db.relationship("Customer")



    
class Favorite(db.Model, SerializerMixin):
    __tablename__ = 'favorites'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    customer_id = db.Column(Integer(), ForeignKey('customers.id'))
    item_id = db.Column(Integer(), ForeignKey('items.id'))

    item = relationship("Item")










