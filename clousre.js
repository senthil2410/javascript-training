const outer = () => {
  let name = "Senthil";

  const inner = () => {
    console.log("Hello, " + name);
  };

  return inner;
};

const clousre= outer();
clousre();

const BankAccount=(person)=>
{
   let balance=0;

   return{
      deposit:(amount)=>
      {
         balance=balance+amount;
         console.log(`${person}  deposited ${amount}`);
      },
      withdraw:(amount)=>
      {
           if(amount>balance)
           {
               console.log("Insufficient Balance");
           }
           else{
              console.log(`${amount} is withdrawn sucessfully`);
              balance=balance-amount;
           }
      },
      getbalance:()=>
      {
         return `${balance}`;
      }
   }
}

const account=BankAccount("Senthil");

console.log(account);

account.deposit(20000);

account.withdraw(200);

console.log(account.getbalance());

//console.log(account.balance)  We cannot directly access the  variable...







