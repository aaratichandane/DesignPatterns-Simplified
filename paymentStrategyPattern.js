class CreditCardPayment{
    pay(amount){
        return `paid ${amount} via Credit card`;
    }   
}

class PayPalPayment{
    pay(amount){
        return `paid ${amount} via Paypal`;
    }
}

module.exports = {
    CreditCardPayment,
    PayPalPayment
}