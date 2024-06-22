const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const Users = require("./routes/users")
const Plans = require("./routes/plans")
const checkout = require("./routes/paymentService")
const webhook = require("./routes/paymentController")
app.use(cors())
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
  app.use(Users);
  app.use(Plans);
  app.use(checkout)
  app.use(webhook)
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
