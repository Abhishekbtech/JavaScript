/*
Encapsulation :-      is a fundamental concept in object-oriented programming that refers to the practice of hiding the internal details 
    of an object and exposing only the necessary information to the outside world.
    Encapsulation can be achieved using two techniques:
    1) using closures
    2) access modifiers, such as the private and public keywords.
*/


// -----------------------------------------    Using Closures for Encapsulation    ---------------------------------------------
/*
    closures are functions that have access to variables in their outer lexical environment, even after the outer function has returned. 
    Private variables and methods can be created using closures.
*/


function BankAccount(accountNumber, accountHolderName, balance) {
    this._accountNumber = accountNumber;
    this._accountHolderName = accountHolderName;
    this._balance = balance;

    function showAccountDetails() {
        console.log(`Account Number: ${_accountNumber}`);
        console.log(`Account Holder Name: ${_accountHolderName}`);
        console.log(`Balance: ${_balance}`);
    }

    this.deposit = function (amount) {
        _balance += amount;
        showAccountDetails();
    }

    this.withdraw = function (amount) {
        if (_balance >= amount) {
            _balance -= amount;
            showAccountDetails();
        } else {
            console.log("Insufficient Balance");
        }
    }

    return {
        deposit: deposit,
        withdraw: withdraw
    };
}

let myBankAccount = BankAccount("123456", "John Doe", 1000);
myBankAccount.deposit(500);
myBankAccount.withdraw(2000);
// myBankAccount.showAccountDetails();

/*
we have created a BankAccount object using a closure. The object has three private variables: _accountNumber, _accountHolderName, and
_balance. These variables are only accessible within the BankAccount function and cannot be accessed from outside. The showAccountDetails
function is a private method that displays the account details. The deposit and withdrawal methods are public methods that can be
accessed from outside the object. When these methods are called, they update the _balance variable and call the showAccountDetails
function to display the updated account details.
*/


//-------------------------------access modifiers, such as the private and public keywords.--------------------




class CoffeeMachine {
    _waterAmount = 0;

    constructor(power) {
        this._power = power;
    }

    set waterAmount(value) {
        if (value < 0) {
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }
}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 10;
console.log(coffeeMachine.waterAmount)