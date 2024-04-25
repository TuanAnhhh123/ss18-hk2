interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor(initialSpeed: number) {
        this.speed = initialSpeed;
    }

    speedUp(): void {
        this.speed += 10;
        console.log("Speeding up. Current speed: " + this.speed);
    }

    slowDown(): void {
        this.speed -= 10;
        console.log("Slowing down. Current speed: " + this.speed);
    }

    stop(): void {
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
