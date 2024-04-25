"use strict";
class Person {
    constructor(name, address) {
        // ko cần dùng super
        this.name = name;
        this.address = address;
    }
    sale() {
        return "giảm giá 5%";
    }
    sale1() {
        return "giảm giá 15%";
    }
}
