const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
