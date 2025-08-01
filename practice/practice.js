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


const groupstatus=dummyData.map(project=>
{
     const groupbystatus=project.projects.reduce((acc,curr)=>
    {
       
      acc[curr.status]=acc[curr.status]||[];
      acc[curr.status].push(curr);
      return acc;
        
    },{});

    {
    
    }
}
);

console.log(groupstatus);
