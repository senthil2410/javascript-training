
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



