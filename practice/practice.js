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


const activeManager=dummyData.filter(worker=>worker.role==="Manager" &&
                                      worker.projects.some(project=>project.status==="In Progress"));

    console.log(activeManager);

const activeManager1=dummyData.filter(({role,projects})=>
       {            return       role==="Manager" &&
                                      projects.some(project=>project.status==="In Progress")
                                    });

                                    
                                      

  let totalProjects=0;

const userProject = dummyData.map(user => {
  const count = user.projects.length;
  totalProjects += count;
  return {
    name: user.name,
    projectCount: count
  };
});

const groupStatus=dummyData.map(user=>
{
   const groupedByStatus=user.projects.reduce((accu,project)=>
  {
      accu[project.status]=accu[project.status]||[];
      accu[project.status].push(project);
      return accu;
  },{});
  return {
    ...user,
    groupedByStatus

  }
}
);
//console.log(groupStatus.map(project=>project.groupedByStatus));
console.dir(groupStatus, { depth: null });

const formatData=({number,amount,fname})=>
{
      const numberinput = new Intl.NumberFormat('en-US')
      const formatNumbers=numberinput.format(number);
      //console.log(formatNumbers);

      const amountinput=new Intl.NumberFormat('en-US',
        {
          style:"currency",
          currency:"USD"
        }
      )
      const formatAmount=amountinput.format(amount);
      //console.log(amountinput.formatToParts(amountinput));
     // console.log(formatAmount);

     const capitalizeName=fname
                          .split(' ')
                          .map(part => part[0].toUpperCase() + part.slice(1))
                          .join(' ');


       return {
    formatNumbers,
    formatAmount,
    capitalizeName
  };
}

const values=
{
  number:10000,
  amount:12510,
  fname:"senthil kumar"
}

console.log(formatData(values));


const validateURL=(host)=>
{

  if(typeof host !='string'||!host.trim())
  {
      return null;
  }
  
  try {
    
    const url = new URL(host.includes('://') ? host : `http://${host}`);
    const hostname = url.hostname.toLowerCase();

     if (hostname === 'localhost' ||hostname === '127.0.0.1' ) 
      {
      return "LOCAL-HOST"
      }

      return null;

  }
   catch(err)
   {
        return null;
   }
  
}

console.log(validateURL("http://127.0.0.1:5500/"));
console.log(validateURL("http://localhost:5173/"));
console.log(validateURL("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"));



const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.(in|com)$/;
  return emailRegex.test(email);
};

const results = dummyData.map(project => {
  const email = project.contact.email;
  return validateEmail(email) ? email : false;
});

console.log(results);


const argument=(age,name="user",place="palani")=>
{
     if(age!==undefined)
    
        return `The person name is ${name} and his age ${age} and native is ${place}`;
     else{
        throw new Error("Invalid input");
     }
}


console.log(argument(52,"Thangaraj","Palani"));

//console.log(argument());

console.log(argument(52,"Thangaraj"));
console.log(argument(45,null,"Dharapuram"));
