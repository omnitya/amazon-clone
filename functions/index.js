const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51KDASdSIwOXRb8jEiIdipIzihHT9cXUEGbdFI2VXcrjcjZxLdIa60QwnHClwsBSUEOBdjDvXHtAttTQkD5YKljyn00ugzLFbR4')

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world') )

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request received ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app)