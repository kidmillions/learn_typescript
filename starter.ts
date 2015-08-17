var i : number = 0;

// default params
function buildName(firstName:string, lastName="Smith") {
  return firstName + " " + lastName;
}

// optional params, otherwise TS is strict
function buildOtherName(firstName:string, lastName?:string) {
  return firstName + " " + lastName;
}

//rest parameters
function buildNameWithRestParams(firstName:string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join('');
}

//fat arrows / lambdas
var buildNameWithRestParamsFun: (fname: string, ...rest:string[]) => string = buildNameWithRestParams;


// classes and instantiation / inheritance

// constructors ae run  on initialization

class Greeter {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }
  greet(msg: string) {
    this.element.innerHTML = msg;
  }
}

// private and public fields in constructor functions
class Greeterer {
  constructor(private element: HTMLElement) {
  }
}


// you can still approach these functionally

function GreeterToo() {
  var name: string = "Chris";

  var greet = function() {
    return "Hello, " + name;
  };

  return {
    greet: greet
  };
};

var greeter = GreeterToo();

greeter.greet();


// static classes in prototypes
class BankAccount {
  private static accountNumber: number = 123;
  static getAccountNumber(): number {
    return BankAccount.accountNumber;
  }
}


BankAccount.getAccountNumber();


//defining static properties

class Constants {
  static get ROUTING_NUMBER(): string { return '121oJRJ3pihvoJ3'; }
  static get BANK_NUMBER(): number { return 1210974097; }
}

class Account {

  get AccountInfo() {
    return {
      routingNumber: Constants.ROUTING_NUMBER,
      bankNumber: Constants.BANK_NUMBER
    };
  }
}

var account = new Account;
account.AccountInfo;

//defining properties with gets and sets

class AccountProps {
  private _balance: number = 0;

  get balance() {
    return this._balance;
  }

  set balance(val: number) {
    this._balance = val;
  }
}


var accountant = new AccountProps();
console.log(accountant.balance);
accountant.balance = 100;
console.log(accountant.balance)

// inheritance! Take a look about how prototypes are used in the compiled javascript.
class WalmartGreeter extends Greeter {
  constructor(element: HTMLElement) {
    super(element);
  }
}


//overloading and overriding

class Plant {
	constructor (){
	}
	getName(nameorid: any): string{
		if (typeof nameorid ===  "string")
		{
			return "The name of this plant is: " + nameorid;
		}
		else
		{
			return nameorid;
		}
	}
}

class PlantInfo extends Plant{
	constructor (){
		super()
	}

	getName (name: string): string;
	getName (id: number):string;
	getName(nameorid: any): string{
		var studentID = super.getName(nameorid);
		return studentID;
	}
}

var planting = new PlantInfo();
alert (planting.getName("Apple Tree"));
alert ("The plant id is: " + planting.getName(1234));



//interfaces for providing types. Notice how they are used similarly to classes

interface IPlant {
    name: string;
    genus: string;
    category: string;
}

class CPlant {
  name: string;
  genus: string;
  category: string;
}

// identical definitions means identical instantiation
var p: IPlant;
p = new CPlant();


// interfaces nonetheless produce errors if all parts of interface are not implemented
class trees implements IPlant {
  name: string;
  category: string;
   genus: string //comment out this line to see error
}

//interfaces can extend

interface ITree extends IPlant {
  leafType: string;
}

//interfaces can include interfaces
interface IForest {
  trees: ITree[];
};


// using implements....

interface IMessage {
  greeting? : string; //optional properties
}


interface IGreet {
  greet(msg: IMessage) : void;
}


class CGreeter implements IGreet {
  element: HTMLElement;
  constructor(element: HTMLElement) {
    this.element = element;
  }

  greet(msg: IMessage) {
    this.element.innerHTML = msg.greeting;
  }
}

//custom array types
interface IAccount {
  balance: string;
}

interface AccountArray {
   [index: number]: IAccount;
   length: number;
}

// custom function types

interface searchFunc {
  (source: string, subString: string): boolean;
}

//reference a type definitions file

/// <reference path="jquery.d.ts" />

var div = $('.hi').show(100);
