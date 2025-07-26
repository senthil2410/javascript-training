class Employeee
{
    static attendanceCount=0;

  constructor(fname) {
    this.name = fname;   
  }
   logging()
   {
    Employeee.attendanceCount++;
   }
   static getLoginCount()
   {
     return `Current attendance COUNT IS  ${Employeee.attendanceCount}`;
   }

}

console.log(Employeee.getLoginCount());

const emp1=new Employeee("Kumar");
emp1.logging();
console.log(Employeee.getLoginCount());


const emp2=new Employeee("Thainesh");
emp2.logging();
console.log(Employeee.getLoginCount());

const emp3=new Employeee("Sujeeth");
emp3.logging();
console.log(Employeee.getLoginCount());



class Bank
{
    _balance;
    constructor(balance=0)
    {
           this._balance=balance;
    }

    #checkbalance()
    {
        console.log(`THE CURRENT BALANCE IS ${this._balance}`);
    }

    _withDrawal(amount)
    {
        if(amount<this._balance)
        {
            
            this._balance=this._balance-amount;
            console.log(`${amount} has been Withdrawn `)
        }
        else{
            console.log("No Sufficient balance");
            this.#checkbalance();
        }
    }

    _deposit(amount)
    {
        this._balance=this._balance+amount;
        console.log(`${amount}  has been Deposited `)
    }

}

class Atm extends Bank 
{

    constructor(initialBalance)
    {
        super(initialBalance)
    }

    withdrawAtm(amount)
    {
        this._withDrawal(amount);
    }

    depositAtm(amount)
    {
        this._deposit(amount);
    }

}

const acc1=new Bank(7600)
acc1._withDrawal(7700);
acc1._withDrawal(7700);
acc1._deposit(400);

const atmuser=new Atm(3200);
atmuser.withdrawAtm(3240);
atmuser.withdrawAtm(3100);
atmuser.depositAtm(541);




