const Students={
    id:101200,
    name:"Thainesh",

    getinfo:()=>
    {
        console.log(`My name is ${Students.id}`);
        return `${Students.name}`;
    }
};

console.log(Students);
console.log(Students.getinfo());

console.log(Students.toString());

console.log(Object.getPrototypeOf(Students));

const date= new Date('2012','10','14');

let object=date;

do{
    object=Object.getPrototypeOf(object);

    console.log(object)
}while(object);

const myString=new String("Hello");

myString.toUpperCase=(word)=>
{
    return(`We just want to convert  thsi to uppercase`);
}

console.log(myString.toUpperCase());
console.log(myString.toLowerCase());


console.log(Students.hasOwnProperty('id'));

console.log(date.toLocaleString());

console.log(myString.valueOf());

console.log(Students.propertyIsEnumerable('name'));

console.log(Students.propertyIsEnumerable('toString'));

function Employee(name,id)
{
    this.name=name;
    this.eid=id;
    this.showDetails=function()
    {
        console.log(`The employee id is ${this.eid} and his name is ${name}`);
    }
}

const emp1=new Employee("Aswanth",24);
emp1.showDetails();

console.log(emp1.constructor===Employee);

