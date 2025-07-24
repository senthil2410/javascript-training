
const intnum=5;

console.log(typeof(intnum));   // In js we having only number not  int,float,d0uble like other programming languages 

const weight=152.2456982345;
console.log(weight);
console.log(weight.toFixed());
console.log(weight.toFixed(2));
console.log(weight.toFixed(5));

  const num="77";

   if(typeof(num)==="string")
    console.log(num+3);      // Here we are adding the +3 to string value "76" so it will result in  string value 773.
   else
    console.log(num+3);


// Typecasting

  const num1="77";
  const num2=56;

  const number=Number(num1)+3;
  console.log(number);
  const string=num2+"2";
  console.log(string);


 // arthmetic operators

 const arthmetic=()=>
 {

  const num1=10;
  const num2=15;

  console.log(num1+num2);
  console.log(num1-num2)
  console.log(num2*num1);
  console.log(num2/num1);
  console.log(num2%num1);
  console.log(num1**2);

  const result=5*4+(num1*num2)-(10/2);
  console.log(result)

 }
 arthmetic();

//logical operaors


const logical=()=>
{
     const user=true;
     const admin=false;
     const userpassword="12345";
     const adminpassword="67890"

     if(user&&userpassword==="12345")
     {
        console.log("Welcome user")
     }
     
     if(!user||!admin)
     {
        console.log("Move to login page");
     }

     if((user&&userpassword==="1234")||(admin&&adminpassword==="67890"))
     {
        console.log("Welcome to our website")

     }

}
logical();


//Relational operator

const relational=()=>
{

    const mark="absent";
    if(mark==100)
    {
        console.log("School First");
    }
   else if(mark>90)
    {
        console.log("First Grade");
    }
    else if(mark<=90&&mark>80)
    {
        console.log("Second Grade");
    }
     else if(mark<=80&&mark>70)
    {
        console.log("third garde");
    }
    else if(mark>=35&&mark<=70)
    {
        console.log("Student passed the exam");
    }
    else if((typeof mark!==Number)&&(mark==="absent"))

    {
        console.log("Student absent");
    }
    else{
        console.log("Student Failed");
    }
    
}

relational();

// increment and decrement operators

for(let i=0;i<5;i++)
{
    console.log(++i);
}

for(let i=5;i>=0;i--)
{
    console.log(--i);
}


//ternary operator

const islogin=true;

const a=(islogin)?console.log("Welcome to Home page"):console.log("move to login page");
console.log(a);


// ASSIGNMENT OPERATOR

let number1=5;

console.log(number1);
console.log(number1+=5);
console.log(number1-=5);
console.log(number1*=5);
console.log(number1/=5);
console.log(number1%=5);

console.log(number);


