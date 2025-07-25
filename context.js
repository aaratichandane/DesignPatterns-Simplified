//You can switch payment strategies dynamically at runtime, following the open/closed principle.

class PaymentContext{
    constructor(strategy){
        this.strategy = strategy;
    }

    pay(amount){
        return this.strategy.pay(amount);
    }
}

module.exports = PaymentContext;