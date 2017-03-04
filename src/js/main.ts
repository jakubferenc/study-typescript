import {Person} from './Person';

var jakub = new Person("Jakub", 22);
jakub.makeYounger(6);
console.log(jakub.age);
jakub.age = 30;
console.log(jakub.age);
jakub.makeSound();
jakub.eat();
jakub.eat("I've just eaten a fresh apple!");

