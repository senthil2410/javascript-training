class Employee
{
    name;
    email;
    constructor(name)
    {
      this.name=name;
    }
    setemail(email)
    {
       this.email=email;
    }
    getname()
    {
        console.log(`The Person name is ${this.name}`)
    }
    getemail()
    {
        console.log(`The person email id is ${this.email}`);
    }
}

const suresh=new Employee("Suresh");

suresh.getname();

suresh.setemail("suresh@gmail.com");
suresh.getemail();

let objectPrototype = suresh;

do {
  objectPrototype = Object.getPrototypeOf(objectPrototype);
  console.log(objectPrototype);
} while (objectPrototype);


class Students{
    name;
    rollno
    setname=(name)=>
    {
        this.name=name;
    }

    setrollno=(rollno)=>
    {
        this.rollno=rollno;
    }
    getname()
    {
        console.log(`The Person name is ${this.name}`)
    }
    getrollno()
    {
        console.log(`The person email id is ${this.rollno}`);
    }
    
}

const student1=new Students();

student1.setname("abinesh");
student1.getname();

student1.setrollno(201132);
student1.getrollno();


