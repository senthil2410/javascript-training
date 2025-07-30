export class Student{
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
        return `The Person name is ${this.name}`;
    }
    getemail()
    {
        console.log(`The person email id is ${this.email}`);
        return `The person email id is ${this.email}`;
    }
}

export const wifipassword="12345";

export const addition =(a,b)=>(a+b);

export const login=(email,password)=>
{
   if(email==="user@gmail.com")
   {
       if(password==="12345")
       {
        return "Welcome to home page";
       }
   }
   
}

const adminDetails=()=>
{
     const username="role";

     const email="admin@gmail.com";

     return `the name ${username} and his mail id is ${email}`;

}

// const userDetails=()=>
// {
//      const username="role";                         // THere should be only export default in our program, if we need to export multiple use export only

//      const email="admin@gmail.com";

//      return `the name ${username} and his mail id is ${email}`;

// }

// export default userDetails;  

export default adminDetails;

