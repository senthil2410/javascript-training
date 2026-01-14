const  person={
    name:"Senthil",
    age:"23",
    place:"Palani",
    hobbies:["football","cricket","carrom"]
};
console.log(person);

console.log(person.place);

console.log(person["place"]);

person["email"]="senthil@gmail.com";

console.log(person["place"]);
console.log(person);

person["eligibeForVoting"]=function()
{
      if(this.age>18)
      {
        console.log("person Eligible for voting");
      }
}

person.eligibeForVoting();

// creating object using functions

const createObject=(name,age,place,...hobbies)=>
{
    const obj={};
    obj.name=name;
    obj.age=age;
    obj.place=place;
    obj.hobbies=hobbies;
    obj.eligibeForVoting=()=>
    {
        if(this.age>18)
        {
             console.log("person Eligible for voting "); 
        }
    }
    return obj;

}

console.log("Object created using the  functions");
const Kumar=createObject("kumar",18,"Dharapuram",["cricket","football"]);

Kumar.eligibeForVoting();

console.log("Object careated using the Functions",Kumar);

const Thanagaraj=createObject("thanagarj",45,"Pollachi",["agriculture","reading"]);

console.log(Thanagaraj.name);

console.log(Thanagaraj.age);

Thanagaraj.eligibeForVoting();

// object create using new Keyword---

console.log("Object created using the  new keyword (Constructor)");

function Createobject(name,age)
{
   this.name=name;
   this.age=age;
   this.eligibeForVoting=function()
   {
       if(this.age>18)
       {
        console.log(`Person is ${age} and he is eligible for voting `);
       }
   }

}

const Rajesh=new Createobject("Rajesh",22);
const Ramya=new Createobject("Ramya",26);

console.log(Rajesh);
Rajesh.eligibeForVoting();

console.log(Ramya);
Ramya.eligibeForVoting();



