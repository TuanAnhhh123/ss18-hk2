"use strict";
class Vehicle {
    constructor(initialSpeed) {
        this.speed = initialSpeed;
    }
    speedUp() {
        this.speed += 10;
        console.log("Speeding up. Current speed: " + this.speed);
    }
    slowDown() {
        this.speed -= 10;
        console.log("Slowing down. Current speed: " + this.speed);
    }
    stop() {
        this.speed = 0;
        console.log("Stopping the vehicle.");
    }
}
function main() {
    const vehicle = new Vehicle(30);
    vehicle.speedUp();
    vehicle.slowDown();
    vehicle.stop();
}
main();
