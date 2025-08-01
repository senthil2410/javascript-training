const dummyData = [
  {
    id: 1,
    name: "Alice",
    role: "Manager",
    contact: {
      email: "alice@example.com",
      phone: "123-456-7890",
      address: { city: "New York", country: "USA" }
    },
    projects: [
      { projectId: "P101", name: "Project Alpha", status: "Completed", budget: 50000 },
      { projectId: "P102", name: "Project Beta", status: "In Progress", budget: 20000 }
    ]
  },
  {
    id: 2,
    name: "Bob",
    role: "Developer",
    contact: {
      email: "bob@example.com",
      phone: "987-654-3210",
      address: { city: "San Francisco", country: "USA" }
    },
    projects: [
      { projectId: "P103", name: "Project Gamma", status: "Not Started", budget: 10000 },
      { projectId: "P104", name: "Project Delta", status: "In Progress", budget: 15000 }
    ]
  },
  {
    id: 3,
    name: "Carol",
    role: "Designer",
    contact: {
      email: "carol@example.com",
      phone: "555-666-7777",
      address: { city: "London", country: "UK" }
    },
    projects: []
  },
  {
    id: 4,
    name: "David",
    role: "QA Engineer",
    contact: {
      email: "david@example.com",
      phone: "333-222-1111",
      address: { city: "Berlin", country: "Germany" }
    },
    projects: [
      { projectId: "P105", name: "Project Epsilon", status: "Completed", budget: 12000 }
    ]
  },
  {
    id: 5,
    name: "Eva",
    role: "Developer",
    contact: {
      email: "eva@example.com",
      phone: "444-333-2222",
      address: { city: "Paris", country: "France" }
    },
    projects: [
      { projectId: "P106", name: "Project Zeta", status: "In Progress", budget: 30000 },
      { projectId: "P107", name: "Project Eta", status: "Not Started", budget: 18000 },
      { projectId: "P108", name: "Project Theta", status: "Completed", budget: 25000 }
    ]
  },
  {
    id: 6,
    name: "Frank",
    role: "Manager",
    contact: {
      email: "frank@example.com",
      phone: "777-888-9999",
      address: { city: "Tokyo", country: "Japan" }
    },
    projects: [
      { projectId: "P109", name: "Project Iota", status: "In Progress", budget: 40000 }
    ]
  }
];
 

const activeManager=dummyData.filter(worker=>worker.role==="Manager")
                            .filter(worker=>worker.projects.some(project=>project.status==="In Progress"));


console.log("Active manager",activeManager);


const totalProject=dummyData.reduce((acc,proj)=>
{
      return acc+(proj.projects.map(project=>project.projectId)).length;
},0);

console.log(totalProject);


const totalProject1=dummyData.reduce((acc,proj)=>
{
      return acc+proj.projects.reduce((acc)=>
    {
        return acc=acc+1;
    },0)
},0);

console.log(totalProject1);

const userProject=dummyData.reduce((acc,proj)=>
{
   acc[proj.name]=(acc[proj.id]||0)+proj.projects.reduce((acc)=>
    {
        return acc=acc+1
    },0)
   return acc;
},[])

console.log(userProject);




const groupstatus=dummyData.filter(project=>
{
     project.projects.reduce((acc,curr)=>
    {
       // console.log(curr.status);

        acc[curr.status]=(acc[curr.status]||'')+curr.name;
        console.log(acc);
        return acc;
    },{})
}
);

console.log(groupstatus);


const validatingEmail=dummyData.every(user=>user.contact.email.endsWith("@example.com"));

console.log(validatingEmail);


const formatting=dummyData.map(project=>project.name[0].toUpperCase()+project.name.slice(1));
console.log(formatting);

const currency= new Intl.NumberFormat('en-US',{
     style:"currency",
     currency:'USD'
}
)
const amount=dummyData.map(project=>project.projects.map(value=>value.budget));

const amount1=amount.flat(5);

for(const money of amount1)
{
    console.log(currency.format(money));
}

const dummydata1=dummyData.map(project=>(
{
     ...project,
     name:project.name[0].toUpperCase()+project.name.slice(1),
     spend:project.projects.map(money=>currency.format(money.budget))
}
));


const groupedByStatus = dummyData.map(user => {
  const groupStatus = user.projects.reduce((acc, project) => {
    acc[project.status] = acc[project.status] || [];
    acc[project.status].push(project);
    return acc;
  }, {});
  
  return {
    ...user,
    groupStatus
  };
});

console.log(groupedByStatus);


console.log(dummydata1);


const argument=(age,fname="user",place="palani")=>
{
     if(!(age===undefined))
    
        return `The person name is ${fname} and his age ${age} and native is ${place}`;
     else{
        throw new Error("Invalid arguments")
     }
}

//console.log(argument());

console.log(argument("Senthil",34,"Dharapuram"));


function formData({ number, amount, name = '' }) {
    const Number = new Intl.NumberFormat('en-US')
    
    const formatNumber=Number.format(number);

    const Currency = new Intl.NumberFormat('en-US', {
        style: 'currency',

        currency:'USD'
    })

    const formatCurrency=Currency.format(amount);

    const capitalizedName = name[0].toUpperCase()+name.slice(1)
        

    return {
        formatNumber,
        formatCurrency,
        capitalizedName
    };

}

const form=
{
   number:12345,
   amount:5678,
   name:"senthil kumar"

}
console.log(formData(form));

