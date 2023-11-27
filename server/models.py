from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, func
from sqlalchemy import ForeignKey, Table, Column, Integer, String, DateTime, MetaData
from sqlalchemy.orm import relationship, backref
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.associationproxy import AssociationProxy
#from sqlalchemy_serializer import SerializerMixin 

#Remember to Serialize when all tables are added

db = SQLAlchemy()

class  Customer(db.Model):
    __tablename__ = 'customers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String, unique=True)
    address = db.Column(db.String, unique=True)
    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    orders = relationship('Order', back_populates='customer')
    items = association_proxy('orders', 'item',
        creator=lambda it: Review(item=it))

    payments = relationship('Payment', back_populates='customer')
    items = association_proxy('payments', 'item',
        creator=lambda it: Review(item=it))

    reviews = relationship('Review', back_populates='customer')
    items = association_proxy('reviews', 'item',
        creator=lambda it: Review(item=it))

    


    def __repr__(self):
        return f'<Customer Item {self.name}>'

class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.String)
    category = db.Column(db.String)
    imageUrl= db.Column(db.String)
    rating = db.Column(db.String)
    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    orders = relationship('Order', back_populates='item')
    customers = association_proxy('orders', 'customer',
        creator=lambda cu: Review(customer=cu))

    payments = relationship('Payment', back_populates='item')
    customers = association_proxy('payments', 'customer',
        creator=lambda cu: Review(customer=cu))

    reviews = relationship('Review', back_populates='item')
    customers = association_proxy('payments', 'customer',
        creator=lambda cu: Review(customer=cu))

   

    def __repr__(self):
        return f'<Item {self.name}, {self.Quantity}>'

class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    orderdate = db.Column(db.Integer)
    price = db.Column(db.Integer)
    status = db.Column(db.String)
    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    customer_id = Column(Integer(), ForeignKey('customers.id'))
    item_id = Column(Integer(), ForeignKey('items.id'))

    customer = relationship('Customer', back_populates='orders')
    item = relationship('Item', back_populates='orders')


class Payment(db.Model):
    __tablename__ = 'payments'

    id = db.Column(db.Integer, primary_key=True)
    paymentdate = db.Column(db.Integer)
    paymentmedhod = db.Column(db.String)
    amount = db.Column(db.Integer)
    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    customer_id = Column(Integer(), ForeignKey('customers.id'))
    item_id = Column(Integer(), ForeignKey('items.id'))

    customer = relationship('Customer', back_populates='payments')
    item = relationship('Item', back_populates='payments')

    
class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.String)
    comment = db.Column(db.String)
    date = db.Column(db.Integer)
    created_at = db.Column(DateTime(), server_default=func.now())
    updated_at = db.Column(DateTime(), onupdate=func.now())

    customer_id = Column(Integer(), ForeignKey('customers.id'))
    item_id = Column(Integer(), ForeignKey('items.id'))

    customer = relationship('Customer', back_populates='reviews')
    item = relationship('Item', back_populates='reviews')
    









