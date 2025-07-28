class Travel
{
    constructor(name,startplace,endplace)
    {
        this.name=name;
        this.startplace=startplace;
        this.endplace=endplace;
    }
    book()
    {
        console.log(`The ${this.name}  wants to travel from ${this.startplace} to ${this.endplace} `);
    }
}

class Car extends Travel
{
     constructor(name,startplace,endplace)
     {
        super(name,startplace,endplace);
     }

     book()
     {
        console.log(`The ${this.name}  wants to travel from ${this.startplace} to ${this.endplace} through Car `);
     }
}

class Bike extends Travel
{
     constructor(name,startplace,endplace)
     {
        super(name,startplace,endplace);
     }

     book()
     {
        console.log(`The ${this.name}  wants to travel from ${this.startplace} to ${this.endplace} through Bike`);
     }
}

class Bus extends Travel
{
     constructor(name,startplace,endplace)
     {
        super(name,startplace,endplace);
     }

     book()
     {
        console.log(`The ${this.name}  wants to travel from ${this.startplace} to ${this.endplace} through Bus`);
     }
}

const travel=new Travel("Thanagarj","Palani","Chennai");
travel.book();

const bus=new Bus("Thanagarj","Palani","Chennai");
bus.book();

const bike=new Bike("Thanagarj","Palani","Chennai");
bike.book();

const car=new Car("Thanagarj","Palani","Chennai");
car.book();