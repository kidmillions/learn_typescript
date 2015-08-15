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

// inheritance!
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
