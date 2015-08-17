var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var i = 0;
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
function buildOtherName(firstName, lastName) {
    return firstName + " " + lastName;
}
function buildNameWithRestParams(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join('');
}
var buildNameWithRestParamsFun = buildNameWithRestParams;
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
    }
    Greeter.prototype.greet = function (msg) {
        this.element.innerHTML = msg;
    };
    return Greeter;
})();
var Greeterer = (function () {
    function Greeterer(element) {
        this.element = element;
    }
    return Greeterer;
})();
function GreeterToo() {
    var name = "Chris";
    var greet = function () {
        return "Hello, " + name;
    };
    return {
        greet: greet
    };
}
;
var greeter = GreeterToo();
greeter.greet();
var BankAccount = (function () {
    function BankAccount() {
    }
    BankAccount.getAccountNumber = function () {
        return BankAccount.accountNumber;
    };
    BankAccount.accountNumber = 123;
    return BankAccount;
})();
BankAccount.getAccountNumber();
var Constants = (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "ROUTING_NUMBER", {
        get: function () { return '121oJRJ3pihvoJ3'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "BANK_NUMBER", {
        get: function () { return 1210974097; },
        enumerable: true,
        configurable: true
    });
    return Constants;
})();
var Account = (function () {
    function Account() {
    }
    Object.defineProperty(Account.prototype, "AccountInfo", {
        get: function () {
            return {
                routingNumber: Constants.ROUTING_NUMBER,
                bankNumber: Constants.BANK_NUMBER
            };
        },
        enumerable: true,
        configurable: true
    });
    return Account;
})();
var account = new Account;
account.AccountInfo;
var AccountProps = (function () {
    function AccountProps() {
        this._balance = 0;
    }
    Object.defineProperty(AccountProps.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (val) {
            this._balance = val;
        },
        enumerable: true,
        configurable: true
    });
    return AccountProps;
})();
var accountant = new AccountProps();
console.log(accountant.balance);
accountant.balance = 100;
console.log(accountant.balance);
var WalmartGreeter = (function (_super) {
    __extends(WalmartGreeter, _super);
    function WalmartGreeter(element) {
        _super.call(this, element);
    }
    return WalmartGreeter;
})(Greeter);
var Plant = (function () {
    function Plant() {
    }
    Plant.prototype.getName = function (nameorid) {
        if (typeof nameorid === "string") {
            return "The name of this plant is: " + nameorid;
        }
        else {
            return nameorid;
        }
    };
    return Plant;
})();
var PlantInfo = (function (_super) {
    __extends(PlantInfo, _super);
    function PlantInfo() {
        _super.call(this);
    }
    PlantInfo.prototype.getName = function (nameorid) {
        var studentID = _super.prototype.getName.call(this, nameorid);
        return studentID;
    };
    return PlantInfo;
})(Plant);
var planting = new PlantInfo();
alert(planting.getName("Apple Tree"));
alert("The plant id is: " + planting.getName(1234));
var CPlant = (function () {
    function CPlant() {
    }
    return CPlant;
})();
var p;
p = new CPlant();
var trees = (function () {
    function trees() {
    }
    return trees;
})();
;
var CGreeter = (function () {
    function CGreeter(element) {
        this.element = element;
    }
    CGreeter.prototype.greet = function (msg) {
        this.element.innerHTML = msg.greeting;
    };
    return CGreeter;
})();
/// <reference path="jquery.d.ts" />
var div = $('.hi').show(100);
//# sourceMappingURL=starter.js.map