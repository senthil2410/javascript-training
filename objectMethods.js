const  person={
    name:"Senthil",
    age:"23",
    place:"Palani",
    hobbies:["football","cricket","carrom"]
};

// To find all the keys in an object.

console.log(Object.keys(person)); 

console.log(Object.values(person)); // to get value in the object.

console.log(Object.entries(person)); // to get the output in key-value pairs.

const newperson=Object.assign({},person);
console.log(newperson);

const newPerson1=Object.assign({id:"201EI132"},person);

console.log(newPerson1);

 // Updating the Object  with primitive types
newPerson1.place="CBE";
console.log(newPerson1.place);
console.log(person.place); 

//Updating the Object with Reference Types.
newPerson1.hobbies.push("Volley-ball");
console.log(person);
console.log(newPerson1);

// copying objects using the spread operator;

const basic={ name:"Suresh",age:28};

const address={place:"Palani",pincode:624601};

const basicDetails={...basic};   //clone
console.log(basicDetails);

const fullDetails={...basic,...address};  //merge
console.log(fullDetails);

const updateDetails={...person,age:22,place:"Chennai"}; // updating the object
console.log(updateDetails);

const Students=[{name:"Raj",id:"201ei132",dept:"CSE"},
                {name:"Vijay",id:"201ei133",dept:"CSE"},
                {name:"Surya",id:"201ei134",dept:"CSE"},
                {name:"Ajith",id:"201ei134",dept:"CSE"},
                {name:"Simbu",id:"201ei135",dept:"CSE"}];     

const updateStudents=Students.map(Student=>
{
      return  {...Student,isEmployed:true}            // updating the  array of objects
});

  console.log("Using spread operator to update array of objects ",updateStudents);

const update=Students.map(Student=>(

       {...Student,isEmployed:true}
));

console.log("Using spread operator to update array of objects ",update);

 // rest operator

const Student={name:"Vikram",age:56,place:"Trichy",isMarried:true};

const{name,...rest}=Student;

console.log(name);      // spliting the objects
console.log(rest);


const Studentinfo=({name,...rest})=>
{
    console.log(name);

    console.log(rest);      // rest operator in function parameter

   
}

Studentinfo(Student);

const marks=[99,87,77,64,56,50,44];

const[firstmark,secondmark,...remaining]=marks;

console.log(firstmark);       // rest operator in array .
console.log(secondmark);
console.log(remaining);

const [firstStudent,secondStudent,...restofStudents]=Students;

console.log(firstStudent);
console.log(secondStudent);
console.log(restofStudents);


const match1=
{
  team1:"Rajasthan",
  team2:"Chennai"
}

function play(team)
{
  console.log(`In the match between the ${this.team1} vs ${this.team2}. ${team} elected to bat first`);
}

function match2()
{
   this.team1="Mumbai",
   this.team2="Kolkata"
}


const secondmatch=new match2();

play.call(match1,"Rajasthan");

play.call(secondmatch,"Kolkata");


function play2(time,venue)
{
    console.log(`The match between ${this.team1} and ${this.team2} starts at ${time} in ${venue}`);
}

play2.apply(secondmatch,["8.30pm","Kolkata"]);

play2.apply(match1,["4:00pm","CHENNAI"]);


const csk=
{
    fteam:"CSK",
    
    getFavouriteTeam:function()
    {
      console.log(`My favourite team is ${this.fteam}`);
    }

}
const favouriteTeam=csk.getFavouriteTeam.bind(csk);
favouriteTeam();

const movie={};
Object.defineProperties(movie,{
   name:
   {
    value:"7am arivu",
    writable:true,
    enumerable:true,
   },
   year:
   {
    value:2010,
    writable:true,
    enumerable:false,  // this data will not get displayed because we have assigned the enumerable to false
    configurable:true
   },
   actor:
   {
     value:"Suriya",
     writable:false,
     enumerable:true,
     configurable:true
   },
   actress:
   {
     value:"Shruthi hassan",
      writable:true,    // value deleted with delete keyword
      enumerable:true,
      configurable:true
   }

});

//movie.actor="Siva";  because we have given the writeable to false
delete movie.actress;
console.log(movie);

const cricketer={};

Object.defineProperty(cricketer,"name",
  {
    value:"Raina",
    writable:false,
    enumerable:true,   //  we cannot modify the name value 
    configurable:true,
  }
)

Object.defineProperty(cricketer,"age",
  {
    value:"38",
    writable:true,
    enumerable:true,
    configurable:true
  }
)

Object.defineProperty(cricketer,"retired",
  {
    value:true,
    writable:true,
    enumerable:false,
    configurable:true
  }
)

console.log(cricketer.name);

console.log(cricketer.age);

console.log(cricketer.retired);

Object.defineProperty(cricketer,"retired",
  {
    value:true,
    writable:true,
    enumerable:false,
    configurable:true
  }
)
console.log(cricketer.name);

console.log(cricketer.age);
console.log(cricketer.retired);
console.log(cricketer);


const descriptor=Object.getOwnPropertyDescriptor(cricketer,"age");

console.log(descriptor.configurable);

console.log(descriptor.enumerable);

console.log("Get own properties desriptors")
const descriptors=Object.getOwnPropertyDescriptors(cricketer);


const rcb={
 
    captain:"Virat Kolhi",
    cup:1,
    stadium:"Banglore",
}

 console.log("Checking whether the object is freezed",Object.isFrozen(rcb));
 rcb.vice="Du-plessis";
Object.freeze(rcb);
console.log(rcb);

//rcb.coach="Nehra";   should add new properties when the object is freezed
//rcb.cup=2;     // if we  modify the freeze value then it will show error;

 console.log(rcb);

 console.log("Checking whether the object is freezed ",Object.isFrozen(rcb));

const gl=
{
  captain:"Suresh-raina",
  cup:0,
  stadium:"Gujarat",
}
gl["vice-captain"]="Bazz";

console.log("Checking whether the object is sealed ",Object.isSealed(gl));

Object.seal(gl);
console.log(gl);

//gl.coach="Fleming";   should add new properties when the object is sealed

gl["vice-captain"]="Jadeja";   // We can modify the existing property in seal method.

console.log(gl);

console.log("Checking whether the object is sealed ",Object.isSealed(gl));

const punjab=
{
  captain:"Bailey",
  cup:0,
  stadium:"west-punjab"
}

console.log("Checking whether the object is prevent Extension ",Object.isExtensible(punjab));

Object.preventExtensions(punjab);
 
// punjab.vice="Gilgrist";   should not add the properties when we used preventExtension method in Objects.

console.log(punjab);

delete punjab.cup;   // But we can delete the existing properties 

console.log(punjab);

console.log("Checking whether the object is prevent Extension ",Object.isExtensible(punjab));


const highestscore=[
  {player:"Raina",scores:5700,team:"csk"},
  {player:"Kolhi",scores:5300,team:"rcb"},
  {player:"Warner",scores:5100,team:"srh"},
  {player:"Dhawan",scores:4400,team:"srh"},
  {player:"Rohit",scores:4100,team:"mumbai"},
  {player:"Dhoni",scores:4000,team:"csk"},
];

const groupdata=Object.groupBy(highestscore,({scores})=>
 {
   return scores>4500?"greaterthan5K":"lessthan5K"
});

console.log(groupdata.greaterthan5K);

console.log(groupdata.lessthan5K);

const groupdata1=Object.groupBy(highestscore,({team})=>
{
  return team==="csk"||team==="mumbai" ? "groupA" :"groupB";
})

console.log(groupdata1.groupA);

const kxip=Object.create(punjab);   // it has no own property.
console.log("Own property example",kxip);       // so the out will the null

console.log("Own property",Object.hasOwn(kxip,"captain"));

console.log(kxip.captain);

kxip.position=8;
console.log("Own property",Object.hasOwn(kxip,"position"));


const object={fname:"Senthil",email:"senthil@gamil.com",place:"palani"};

console.log(object.fname);
console.log(object.email);

const {fname,email}=object;

console.log(fname);
console.log(email);




