class Car{
    drive(){
        return "Driving a Car"
    }
}

class Bike{
    drive(){
        return "Riding a Bike"
    }
}

class VehicleFactory{
    static createVehicle(type){
        if(type === "car"){
            return new Car();
        }
        if(type == "bike"){
            return new Bike();
        }
        throw new error("Unknown Vehicle Type");
    }
}

module.exports = VehicleFactory;