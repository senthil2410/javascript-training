const employee=
{
    name:"Senthil",
    dept:"training",
    company:"Aspire",
    address:
    {
        place:"Palani",
        pincode:624618
    }
};

console.log(Object.keys(employee));

for(const key in employee)
{
    console.log(key);
}

console.log(Object.values(employee));

console.log(Object.entries(employee));

console.log("Checking whether keys is having or not ")

console.log(employee.hasOwnProperty("company"));
console.log(employee.hasOwnProperty("address"));

console.log(employee.address.hasOwnProperty("place"));
console.log(employee.hasOwnProperty("native"));


const employee1=Object.assign({},employee);
console.log("Creating the new objects employee1",employee1);


const employee2=Object.assign({id:101},employee);
console.log("Creating the new objects employee1",employee2);


const student={
    id:1,
    name:"Kumar"
};
const studentcontact=
{
    place:"Palani",
    pincode:624618,
    salary:36000
}

const studentDetails={...student,...studentcontact};

console.log("Combining two objects ",studentDetails);

const studentcontact1={...studentDetails,state:"Tamil Nadu"};

console.log(studentcontact1);

console.log(studentcontact.salary.toLocaleString());

 function createObject (name,age)
 {
    this.name=name;
    this.age=age;
    this.salary=0;

    this.setsalary=function(amount)
    {
      this.salary=amount;
    }
    this.getsalary=function()
    {
        return this.salary
    }

 }

 const person1=new createObject("Senthil",23);

 person1.setsalary(7600);

 console.log(person1.getsalary());

 function createObject1(name,age)
 {
     this.name=name;
     this.age=age;
     let _place="";
     Object.defineProperty(this,"place",
        {
            
            set:function(city)
            {
               this._place=city
            },
            get:function()
            {
                return this._place;
            },
            enumerable:true,
            configurable:true
        }
     )
 }

 const person2=new createObject1("Senthi",23);
 person2.place="palani";

 console.log(person2.place);
 