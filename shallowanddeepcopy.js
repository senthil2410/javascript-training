
const Student = {
  name: "Kavin",
  place: "Dharapuram",
  subject: {
    groups: [
      { subject: "CSE" },
      { subject: "Maths" },
      { subject: "Physics" }
    ]
}}

console.log(Student);

const newStudent={...Student};

newStudent.name="Rajesh";

console.log(newStudent);

console.log(Student);


newStudent.subject.groups=[{subject:"Bio"},
                           { subject: "Maths" },    // shallow copy
                          { subject: "Physics" },
                          {subject:"Chemistry"}
                          ]

console.log(newStudent.subject);

console.log(Student.subject);


const newStudent1=Object.assign({},Student);

newStudent1.subject.groups=[{subject:"commerce"},
                            {subject:"economics"},
                            {subject:"Computer"},
                            {subject:"Histroy"}
                           ];

console.log(newStudent.subject);
console.log(Student.subject);
console.log(newStudent1.subject);


//DEEP COPY


const Employee = {
  name: "Thainesh",
  place: "Erode",
  domain:{development:"JLM"}
}

const clonedEmployee=JSON.parse(JSON.stringify(Employee));
console.log(clonedEmployee);

clonedEmployee.domain.development="dotnet";

console.log(clonedEmployee.domain);
console.log(Employee.domain);

const clonedEmployee1=structuredClone(Employee);

clonedEmployee.domain.development="insurance";

console.log(clonedEmployee1.domain);
console.log(clonedEmployee.domain);
console.log(Employee.domain);







