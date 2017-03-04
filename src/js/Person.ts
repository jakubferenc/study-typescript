import {log} from "./decorators/log-decorator";

interface Animal {
    alive: Boolean;
    name: string;
    age: number;
    makeSound: (sound?:string) => void;
    eat: (what?:string) => void;
}

export class Person implements Animal {

    alive:boolean = true;
    name: string;
    _age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    set age(age) {
      console.log("you used setter age");
      this._age = age;
    }

    get age() {
        console.log("you used getter age");
        return this._age;
    }

    @log
    makeSound(sound?:string) {
        console.log("Hello world, I'm " + this.name);
    }

    @log
    makeYounger(age: number): any {

        if ( (this.age - age) > 0) {
            return this.age - age;
        } else {
            return "You cannot be that younger!";
        }

    }

    @log
    eat(what?:string): void {
      console.log( (what || "I'm hungry") );
    }

}
