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




