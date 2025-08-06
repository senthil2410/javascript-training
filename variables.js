                                                                   // var keyword

console.log(vname);
var vname;
console.log(vname);
vname="Senthil";
console.log(vname);

function varKeyword()
{
    var num1=5;
    {
        console.log(num1);
        var num1=10;
        console.log(num1); 
        num1=20;    //Here reassigning  and decleraing the num1  variable multiple times .so it will create an confusion for us.
    }
    console.log(num1);

    var num1=15;
    console.log(num1);
}

varKeyword();

                                                                            // const keyword

//console.log(cname);   Before declearion and instilization the const variables will be TDZ.

//const cname;    //  Decleration and assignment should be t the same time otherwise it will give an syntax  error.

const cname="Kumar";
console.log(cname);
console.log(Math.pow(11, 2));        
console.log(Math.sqrt(169));
console.log(Math.cbrt(125));


console.log(Math.max(99,88,77));
console.log(Math.min(99,88,77));
console.log(Math.sign(-51));  
console.log(Math.exp(1));

console.log(Math.exp(2));
console.log(Math.expm1(2));

console.log(Math.log10(10));
console.log(Math.log10(100));      
console.log(Math.random()*50); 

console.log(Math.floor(Math.random()*20));
function constKeyword()
{
    const num1=20;
    {
        // console.log(num1);     // it will giving an reference error because const is block level scoped variable.. ex({});
        const num1=25;
        console.log(num1);

    }
   // num1=30;                  // Type error because here we are reassigning the const variable
    console.log(num1);
}

constKeyword();


                                                                                            // let Keyword
let lname;
 console.log(lname);    
lname="Raina";
console.log(lname);
function letKeyword()
{
    const num1=1;
    console.log(num1);
    {
        // console.log(num1);        // it will giving an reference error because let is block level scoped variable.. ex({});
        const num1=2;
        console.log(num1);

    }
    console.log(lname);
}

letKeyword();

console.log("git");

const sym1= Symbol(45);

const sym2=Symbol(45);

if(sym1===sym2)
{
    console.log("Both are same ");
}
else{
    console.log("different");
}

const object=
{
    name:"Senthil",
    age:24
}
const id=55;

object[id]= Symbol(55);

console.log(object);

console.log(object.name);

console.log(object.id)

   // Review

let a=4;
console.log(a++ + ++a);

const marks=[40,50,44,32];

let total=0;
marks.forEach((value,index)=>
{
    total=total+value;
})

console.log(total);
console.log(marks);

const double=marks.map(mark=>mark*2);

console.log(double);

console.log(marks);

const mark=95;

switch(mark)
{
     case 95:
        console.log("90 above");
        break;
     case mark<90:
        console.log("below 90");
        break;    
     

}

const fname="senthil";

console.log(fname[0].toUpperCase()+fname.slice(1));

const students=
{
    name:"Senthil",
    age:23,
    address:{
        city:"palani",
        state:"Tamil nadu",
        country:"India"
    }
}

for(const key in students)
{
    console.log(key);
}

const {name,age,address:{city,state,country}}=students;

