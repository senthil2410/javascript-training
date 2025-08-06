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
      email: "eva@example.cm",
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

const  activeManager=dummyData.filter(({role,projects})=>role==='Manager' && projects.some(project=>project.status==="In Progress"));

console.log(activeManager.map(user=>user.name));


const totalprojects=dummyData.reduce((acc,curr)=>
{
    const userlength=curr.projects.length;

    acc.totalproject+=userlength;
    acc.user.push({name:curr.name },{totalProject:userlength});
    return acc;

},{totalproject:0,user:[]});

console.log(totalprojects);



const groupStatus=dummyData.map(user=>
{
   const groupedByStatus=user.projects.reduce((acc,project)=>
  {
      acc[project.status]=acc[project.status]||[];
      acc[project.status].push(project.projectId);
      return acc;
  },{});
  return {
    ...user.projects,
    groupedByStatus

  }
}
);
console.dir(groupStatus, { depth: null });


const groupedByStatus=dummyData.reduce((acc,curr)=>
{
    curr.projects.forEach(project=>
    {
       if(!acc[project.status])
       {
         acc[project.status]={count:0,projectIds:[]};
       }
      acc[project.status].count+=1;
      acc[project.status].projectIds.push(project.projectId);

    })
    return acc;
},{})


console.log(groupedByStatus);

const formatCurrency=(amount)=>
{
    const currency=new Intl.NumberFormat('en-US',
      {
        style:"currency",
        currency:"USD"
      }
    )

    console.log(currency.format(amount));
}

formatCurrency(5600);


const formatNumber=(num)=>
{
    
    const number=new Intl.NumberFormat("en-US",
      {
        style:"decimal",
        minimumIntegerDigits:2,
        maximumFractionDigits:2,
        minimumFractionDigits:2,
        
      }
    );
     console.log(number.format(num));
}

formatNumber(1234.567678);
formatNumber(1234.5);


const formatName=(fname)=>
{
   const capitalizeName=fname
                        .split(' ')
                        .map(part => part[0].toUpperCase() + part.slice(1))
                        .join(' ');
  console.log(capitalizeName);
}

formatName("senthil kumar");
formatName("senthil");


const validateURL=(host)=>
{
  const url=new URL(host.includes("://")?host:`http://${host}`);
   const hostname=url.hostname.toLowerCase();

    if (hostname === 'localhost' ||hostname === '127.0.0.1' ) 
    {
      return "LOCAL-HOST"
    }

    return hostname;

}

console.log(validateURL("http://127.0.0.1:5500/"));
console.log(validateURL("http://localhost:5173/"));
console.log(validateURL("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Internationalization"));


const argument=(name,age=5,place="palani")=>
{
     if(name===undefined)
     {
       throw new Error("Compulsory Argument missing");
     }
     else{
      return (`The person name is ${name} and his age ${age} and native is ${place}`)
     }
}

console.log(argument("Senthil",20,"Dharapuram"));
console.log(argument("Senthil"));


const validateEmail= (email) => {
  const fullEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const domainRegex = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

  if (!fullEmailRegex.test(email)) {
    return false;
  }

  const domain = email.split('@')[1];
  if (!domainRegex.test(domain)) {
    return false;
  }

  return true;
};

console.log(validateEmail("senthil@gamil.com"));  

console.log(validateEmail("senthil@sub.domain.uk"));  

console.log(validateEmail("senthil@com"));  

console.log(validateEmail("senthil@@gmail.com"));           
console.log(validateEmail("senthil@gmail....com"));        



let sumofeven=0;
let sumofodd=0;
const number=[1,2,4,5,7,9];

number.forEach(num=>num%2==0?sumofodd+=num:sumofeven+=num);

console.log(sumofeven);
console.log(sumofodd);
