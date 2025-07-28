class ATM
{
   #balance;
   #pin;
   constructor(initailbalance,pin)
   {
     this.#balance=initailbalance;
     this.#pin=pin;
   }

   #validatepin(enteredpin)
   {
     if(this.#pin===enteredpin)
     {
        return true;
     }
   }

   withdraw(amount,enteredpin)
   {
      if(this.#validatepin(enteredpin))
      {
         if(amount>this.#balance)
         {
            console.log("Insufficient balance");
            this.checkbalance(enteredpin);
         }
         else{
            this.#balance=this.#balance-amount;
            console.log(`Amount is with drawn susccessfully ${amount}`);
         }

      }
      else{
          console.log("Incorrect Pin entered");
      }
   }
   deposit(amount,enteredpin)
   {
     if(this.#validatepin(enteredpin))
      {
        this.#balance=this.#balance+amount;
        console.log(`The amount has been deposited sucessfully ${amount}`);
      }
      else{
          console.log("Incorrect Pin entered");
      }
   }

   checkbalance(enteredpin)
   {
      if(this.#validatepin(enteredpin))
      {
          console.log(`Your current balance is ${this.#balance}`);

      }
      else{
          console.log("Incorrect Pin entered");
      }
   }

 }

 const user=new ATM(4300,9788);
 
 user.checkbalance(9788);
//user.deposit(2200,97882);  checking with wrong password
user.deposit(2200,9788);
user.withdraw(3200,9788);

//user.validatepin(9788); Result in error beause of private can be accesesd only inside the same calss methods

user.checkbalance(9788);


const user1=new ATM(9158,9500);

user1.checkbalance(9500);
user1.deposit(2000,9500);
user1.withdraw(4000,9500);
user1.checkbalance(9500);


