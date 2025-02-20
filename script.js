// Car Constructor
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// SportsCar Constructor (inherits from Car)
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call parent constructor
    this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

// Handling the button click event
document.getElementById("createCar").addEventListener("click", function () {
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const topSpeed = parseFloat(document.getElementById("topSpeed").value);

    if (!make || !model || isNaN(topSpeed)) {
        document.getElementById("output").innerText = "Please enter valid car details.";
        return;
    }

    const car = new SportsCar(make, model, topSpeed);
    document.getElementById("output").innerText = 
        `Car: ${car.getMakeModel()}, Top Speed: ${car.getTopSpeed()} mph`;
});
