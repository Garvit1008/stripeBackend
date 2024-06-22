// scripts/createPlans.js

const mongoose = require('mongoose');
const Plan = require('../models/Plan');

async function createPlans() {
  try {
    await mongoose.connect('mongodb://localhost:27017/saasDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Plan.deleteMany(); // Clear existing plans

    const plans = [
      {
        name: 'Basic',
        price: 0,
        maxUsers: 1,
        description: 'Free for 14 Days, Limited to 1 user'
      },
      {
        name: 'Standard',
        price: 4999,
        maxUsers: 5,
        description: 'INR 4999 Per Year, Per User, up to 5 users'
      },
      {
        name: 'Plus',
        price: 3999,
        maxUsers: Infinity, // Unlimited users (or specify a higher number)
        description: 'INR 3999 Per Year, Per User above 10 users'
      },
    ];


    await Plan.insertMany(plans);
    console.log('Plans inserted successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error creating plans:', err);
  }
}

createPlans();
