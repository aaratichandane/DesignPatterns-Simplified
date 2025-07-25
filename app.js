// Singleton Pattern
const db1 = require("./dbSignleton");
const db2 = require("./dbSignleton");
console.log(db1 == db2);
console.log("Singleton pattern - ", db1.getConnection());


// Factory Pattern
const VehicleFactory = require("./vehicleFactory");

const myVehicle = VehicleFactory.createVehicle('car');
console.log(myVehicle);
console.log("Factory Pattern - ", myVehicle.drive());


//Observer Pattern

const notifier = require("./notifierObserver");

notifier.emit('userRegistered',{email: "Obserever Pattern - aaratichandane@gmail.com"});


//Middleware Pattern

const express = require("express");
const logger = require("./loggerMiddleware");
const app = express();

app.use(logger);

console.log("Middleware Pattern - Get Method need to call - localhost:3000/test")
app.get('/test', (req, res)=>{
    res.send("Hello Middleware");
});

app.listen(3000);


//Module Pattern

const counter = require("./counterModulePattern");

counter.increment();
counter.increment();

console.log("Module Pattern - ", counter.getCount());


//Strategy Pattern 

const {CreditCardPayment, PayPalPayment} = require("./paymentStrategyPattern");
const PaymentContext = require('./context');

const payment = new PaymentContext(new PayPalPayment());
console.log("Strategy Pattern - ", payment.pay(1000));

