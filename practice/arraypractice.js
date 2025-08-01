
 // arranging the names in alphaphetic order.
const students=["Abinesh","Arthana","Bala","Baskar","Senthil","Suchind"];

const orderstudent=students.map(student=>student.toUpperCase())
                        .reduce((acc,name)=>
                        {
                            const firstletter=name[0];
                           if(!acc[firstletter])
                           {
                            acc[firstletter]=[];
                           }

                           acc[firstletter].push(name);

                           return acc;

                        },{});

console.log(orderstudent);


// finding the duplicates 

const duplicateArray=[1,4,5,6,1,5,6,6];

const duplicates=duplicateArray.filter((value,index)=>(duplicateArray.indexOf(value)!==index));

console.log(duplicates);
const duplicate=new Set([...duplicates]);

console.log("Dulicate vales from array",duplicate);

console.log(duplicateArray.some(element=>element===6));

console.log(duplicateArray.every(element=>element===6));
// frequency


const manofmatch=["Raina","Kolhi","Raina","Kolhi","Raina","Raina"];

const manofseries=manofmatch.reduce((acc,freq)=>
{
      acc[freq]=(acc[freq]||0)+1;
      return acc;
},{});

console.log(manofseries);


// captilize the fistletter


const users=["raja","senthil","surya","suchind"];

const  username=users.map(user=>user[0].toUpperCase()+user.slice(1));

console.log(username);

// adding new properties to exissing array.

const products=[{name:"fan",price:100},
                {name:"TV",price:1000},
                {name:"Laptop",price:3400},
                {name:"fridge",price:2000},
                ];

console.log(products.find(({name})=>name==='TV'));
const newproducts=products.map(product=>
({
     ...product,
     inStock:true

}
));

console.log(newproducts);

// finding the expensive product with filter

const [fan,...restproduct]=products;

const expensive=restproduct.filter(product=>product.price>1500);

console.log("Expensive product",expensive);

// Modifiying the exaising properities

const newproduct1=products.map(product=>({

    ...product,
     price:(product.price*100)/10
}))

console.log(newproduct1);

const newproduct2=products.filter(product=>product.price>1800);

const product3=newproduct2.map(product=>
({
    ...product,
    discount:(product.price*10)/100

}))

console.log(product3);


const training=["JLM","INSURANCE","CSHARP","RPA","AI"];

console.log(training.find(domain=>domain==="CSHARP"));
console.log(training.find(domain=>domain==="C-SHARP"));


const data = [[1, 2, 3, 4], [5, 6, 7], [8, 9]]

const evendata=data.map(subarray=>subarray.filter(num=>(num%2==0)));

console.log(evendata);

const text="Javascript";

const freqarray=[...text].reduce((acc,letter)=>
{
        acc[letter]=(acc[letter]||0)+1;
        return acc;
},{});

let freqletter=null;
let freq=0;

for(const letter in freqarray)
{
    if(freqarray[letter]>freq)
    {
        freq=freqarray[letter];
         freqletter=letter
    }
}

console.log(`The most occured character ${freqletter} and is frequency is ${freq}`);

const transactions = [
  { id: 1, type: 'deposit', amount: 2000, account: 'savings', date: '2025-07-01' },
  { id: 2, type: 'withdrawal', amount: 300, account: 'checking', date: '2025-07-03' },
  { id: 3, type: 'deposit', amount: 1200, account: 'checking', date: '2025-07-04' },
  { id: 4, type: 'deposit', amount: 4000, account: 'savings', date: '2025-07-05' },
  { id: 5, type: 'withdrawal', amount: 800, account: 'savings', date: '2025-07-06' },
  { id: 6, type: 'deposit', amount: 500, account: 'checking', date: '2025-07-07' },
  { id: 7, type: 'withdrawal', amount: 100, account: 'checking', date: '2025-07-08' },
  { id: 8, type: 'deposit', amount: 1000, account: 'savings', date: '2025-07-10' },
  { id: 9, type: 'withdrawal', amount: 150, account: 'checking', date: '2025-07-12' },
  { id: 10, type: 'deposit', amount: 750, account: 'checking', date: '2025-07-13' }
];

const depositAmount=transactions.filter(transact=>transact.type==="deposit")
                                   .reduce((acc,transact)=>
                                {
                                    return acc+transact.amount;
                                },0)
console.log(depositAmount);

const desposit=transactions.filter((transact)=>transact.type==="deposit");

const depositdate=desposit.reduce((acc,curr)=>
{
    acc[curr.date]=(acc[curr.date]||0)+curr.amount;
    return acc;
},{})

console.log(depositdate);

const [date,highAmount]=Object.entries(depositdate).reduce(([maxdate,maxamount],[date,amount])=>
{
     if(amount >maxamount)
     {
        [maxdate,maxamount]=[date,amount];
     }
     return [maxdate,maxamount];
},["",0]);

console.log(date,highAmount);

const withdraw=transactions.filter(txn=>txn.type==="withdrawal");

console.log(withdraw);

const withdrawdate=withdraw.reduce((acc,curr)=>
{
    acc[curr.date]=(acc[curr.date]||0)+curr.amount;
    return acc;

},{});

console.log(withdrawdate);

const maxwithdraw=Object.entries(withdrawdate).reduce((maxAmount,[date,amount])=>
{
     return maxAmount<amount ? amount :  maxAmount
},0)

console.log(maxwithdraw);

const transaction1=transactions.filter(txn=>txn.type==="withdrawal" && txn.amount<450)
                               .map(txn=>
                               ({
                                 ...txn,
                                amount:txn.amount+(txn.amount*8)/100
                               }));
console.log(transaction1);


                          







   




