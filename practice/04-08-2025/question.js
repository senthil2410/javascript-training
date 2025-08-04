
// Write the code to extract the file extension using string methods
// Write code to copy the objects and include the new feilds inn new objects.
// When user types something in serach,We want give suggestion  based on what he types.
// Want to fetch data from API and update the UI based on data.
// write an array method to group items based on category.
 

const file="index.html";

const extensionarray=file.split(".");

//console.log(extension);

console.log(extensionarray.pop());

const students=[

    {fname:"Kumar",
      age:18,
      class:
      {
          section:"12th-A",
          Marks:25
      }
    },

     {fname:"Vignesh",
      age:19,
      class:
      {
          section:"12th-B",
          Marks:82
      }
    },

     {fname:"Surya",
      age:18,
      class:
      {
          section:"12th-A",
          Marks:91
      }
    },
    {fname:"Abinesh",
      age:17,
      class:
      {
          section:"12th-A",
          Marks:31
      }
    },
]

const examresult=students.map(student=>
({
   ...student,
   ispassed:student.class.Marks>35?true:false
}));

console.log(examresult);

const transactions = [
  { id: 1, type: 'deposit', amount: 2000, account: 'savings', date: '2025-07-01' },
  { id: 2, type: 'withdrawal', amount: 300, account: 'checking', date: '2025-07-03' },
  { id: 3, type: 'deposit', amount: 1200, account: 'checking', date: '2025-07-04' },
  { id: 4, type: 'deposit', amount: 4000, account: 'savings', date: '2025-07-05' },
  { id: 5, type: 'withdrawal', amount: 800, account: 'savings', date: '2025-07-06' },
  { id: 6, type: 'deposit', amount: 500, account: 'checking', date: '2025-07-07' },
  { id: 7, type: 'withdrawal', amount: 100, account: 'checking', date: '2025-07-08' },
  { id: 8, type: 'deposit', amount: 1000, account: 'savings', date: '2025-07-10' },
  { id: 9, type: 'withdrawal', amount: 150, account: 'checking', date: '2025-07-12' },
  { id: 10, type: 'deposit', amount: 750, account: 'checking', date: '2025-07-13' }
]

const groupbyaccount=transactions.reduce((acc,curr)=>
{
   acc[curr.account]=acc[curr.account]||[];
   acc[curr.account].push(curr);
   return acc;
},{})

console.log(groupbyaccount);








