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









