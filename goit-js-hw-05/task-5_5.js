class Car {
  // Write code under this line
  static getSpecs(car) {
    return `maxSpeed:${car.maxSpeed}, speed:${car.speed}, isOn:${car.isOn}, distance:${car.distance}, price:${car._price}`;
  }
  constructor(obj) {
    this.speed = 0;
    this._price = obj.price;
    this.maxSpeed = obj.maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    return (this.isOn = true);
  }
  turnOff() {
    this.speed = 0;
    this.isOn = false;
  }
  accelerate(value) {
    this.speed =
      this.speed + value < this.maxSpeed ? this.speed + value : this.maxSpeed;
  }
  decelerate(value) {
    this.speed = this.speed - value >= 0 ? this.speed - value : 0;
  }
  drive(hours) {
    if (this.turnOn) {
      this.distance += hours * this.speed;
    }
    this.distance += 0;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000