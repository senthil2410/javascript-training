class User
{
    constructor(name)
    {
        this.name=name;
    }
    login()
    {
         console.log(`Hi ${this.name} welcome to our store`);
    }
}



class Customer extends User
{
     constructor(name)
     {
        super(name);
     }
     viewProduct()
     {
        console.log(`${this.name } is allowed to view and buy products`);
     }
}

class Worker extends User
{
    constructor(name)
    {
        super(name);
    }

    productCheck()
    {
        super.login();
        console.log("Plase check the product availability");
    }

}

class Admin extends Customer
{
     constructor(name)
     {
        super(name);
     }
     deleteProduct()
     {
        console.log(`${this.name}  admin is allowed to delete products`)
     }
}

const user=new User("Sujeeth");
user.login();

const customer=new Customer("Thainesh");
customer.login();
customer.viewProduct();

const worker=new Worker('Kumar');
worker.productCheck();


const admin=new Admin("Senthil");
admin.login();
admin.viewProduct();
admin.deleteProduct();


let object=admin;
 
do{
    console.log(object);
    object=Object.getPrototypeOf(object);
    
}while(object);



function Person(name, place) {
  this.name = name;
  this.place = place;
}

const Students = Object.create(Person.prototype);

Students.getschoolDetails = function (school) {
  return `${this.name} is studying in ${school} in ${this.place}`;
};

const s1 = new Person("Senthil", "Palani");
console.log(Students.getschoolDetails.call(s1, "Veveaham Hr sec School"));
