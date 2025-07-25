const employeenames=["Senthil","Kumar","Thanagarj","Harish","Sanjay"];

for(let i=0;i<employeenames.length;i++)
{
    console.log(employeenames[i]);
}

console.log("While loop");

let  start=0;
const length=employeenames.length;

while(start<length)
{
    console.log(employeenames[start])
    start++;
}

console.log("Do-While Loop");

start=0;
do{
    console.log(employeenames[start]);
    start++;
}while(start<length);

const students=[{name:"Senthil",id:"201EI132",age:22},
                {name:"Kumar",id:"201EI122",age:23},
                {name:"Thangaraj",id:"201EI133",AGE:25},
                {name:"Rajesh",id:"201EI129",AGE:24}
                ];

for(let i=0;i<students.length;i++)
{
    console.log(students[i]);
}

for(const student of students)
{
    console.log(student);
}

for(const student of students)
{
    console.log(student.name);
}

const movies=["Ayan","Anjan","7am Arivu","24","Retro"];

 let favouitemovies="My favourite movies are ";


 console.log(favouite);

 for(const movie of movies)
 {
    if(movie==="7am Arivu")
    {
        break;
    }
    else{
        console.log("THe movie name is ",movie);
    }
 }

 for(const movie of movies)
 {
    if(movie==="7am Arivu")
    {
        continue;
    }
    else{
        console.log("THe movie name is ",movie);
    }

 }
  for(const movie of movies)
 {
     favouitemovies += `${movie},`    // WE cannot do operation based on the index in  this loop
 }
 console.log(favouitemovies);

 const lengthofMovies=movies.length;

  let favouite="My favourite movies are ";


 for(let i=0;i<lengthofMovies;i++)
 {
    if(lengthofMovies-1===i)
    {
        favouite += `${movies[i]}.`
    }
    else if(lengthofMovies-2===i)     // if you want to the index based mainpulation in array ,then traditionalm loops is best
    {
        favouite +=`${movies[i]} and `
    }
    else{
        favouite += `${movies[i]},`;
    }
 }
