const createPerson=(fname,age)=>
{
    const obj={}
    obj.fname=fname,
    obj.age=age

    return obj;
}

const person1= createPerson("Senthil",23);

console.log(person1);

function createPerson1(fname,age)
{

    this.fname=fname,
    this.age=age,
    
    this.address={
        place:"Palani",
        pincode:624601
     }
           
}

const person2=new createPerson1("Senthil",24);

console.log(person2.fname);

const person3=Object.assign({},person2);

console.log(person3);

person3.fname="Kumar";   // Primitive values do not change in original arrays

person3.address.pincode=624618;  // nested  object values will also change in original array;

console.log("origibal",person2);

console.log("shallow-copy",person3);

console.log(Object.entries(person3));


const employee={eid:1,ename:"Thainesh",email:"thaines@gamil.com"};

const displayEmployeeInfo=({eid,...rest})=>
{
      console.log(eid);
      console.log(rest);
}

displayEmployeeInfo(employee);


const worker=
{
    name:"thanagaraj",
    age:51
}

function getLocation(location)
{
     console.log(`The employee name is${this.name} and ${this.age} and his location is  ${location}`);
}

getLocation.call(worker,"Palani");

function getExactLocation(district,place)
{
       console.log(`The employee name is${this.name} and ${this.age} and his location is  ${district} and ${place}`);
}
getExactLocation.apply(worker,["Dindigul","palani"]);

const rcb=
{
    team:"rcb",
    
    getTeam:function()
    {
      console.log(`My favourite team ${this.team}`);
    }

}
const favouriteTeam=rcb.getTeam.bind(rcb);
favouriteTeam();

const actor={};

Object.defineProperty(actor,"name",
    {
        value:"Suriya",
        writable:true,
        configurable:true,
        enumerable:true
    });

    Object.defineProperty(actor,"age",
    {
        value:23,
        writable:false,
        configurable:false,
        enumerable:true
    });

    console.log(actor);

    //actor.age=24;    cannot assign values here we set the  writable property to false
    //delete actor.age;   configrable-false

    const highestscore=[
  {player:"Raina",scores:5700,team:"csk"},
  {player:"Kolhi",scores:5300,team:"rcb"},
  {player:"Warner",scores:5100,team:"srh"},
  {player:"Dhawan",scores:4400,team:"srh"},
  {player:"Rohit",scores:4100,team:"mumbai"},
  {player:"Dhoni",scores:4000,team:"csk"},
];

const highestrun=Object.groupBy(highestscore,({scores})=>
{
    return scores>5000?"orangecap":"normalcap";
})

console.log(highestrun.orangecap);


const kkr=
{
    captain:"Rahane",
    cup:2,
    stadium:"Kolkata",
}

Object.freeze(kkr);

kkr.vice="Iyer";

console.log(kkr);

