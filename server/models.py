from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class  Customer(db.Model):
    __tablename__ = 'customers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)

    items = db.relationship('Item', backref='customers')

    def __repr__(self):
        return f'<Customer Item {self.name}>'

class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    rating = db.Column(db.String)

    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))

    def __repr__(self):
        return f'<Item {self.name}, {self.Quantity}>'