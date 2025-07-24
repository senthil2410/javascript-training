const students=["Surya","Berno","Raswanth","Tharun","Tharunika"];
students.push("Vignesh");
students.push("Feroze");
console.log(students);
students.unshift("Kavin");
console.log(students);
students.shift("");
console.log(students);
students.shift();
console.log(students);
console.log(students.length);
students.pop();
console.log(students);
const friends=Array.of("kumar","thangaraj","cheran","priya","monaj");
console.log(friends);
const studentsnames=Array.from(students);
console.log(studentsnames);

console.log(Array.isArray(studentsnames));

const stockPrices=[201,202,203,205,207,
                  204,207,201,202,
                  201,202,205,203 ];


const names=["Senthil","Kumar","Thangaraj","Adhira","Mazhil"];

console.log(stockPrices.lastIndexOf(201));
console.log(names.copyWithin(1,3));
console.log(stockPrices.sort((a,b)=>b-a));

console.log(names.reverse());


const month=["Jan","April","May","June","July","August"];

month.splice(1,0,"Feb","Mar");

console.log(month);

const products=[
   { type: "Electronics", subType: "Mobile", category: "Contract Updates", subCategory: "Application Received", isEnabled: false },
   { type: "Electronics", subType: "Labtop", category: "Contract Updates", subCategory: "Premium Processed", isEnabled: true },
   { type: "Electronics", subType: "Head-Phone", category: "Contract Updates", subCategory: "Requirements Added", isEnabled: false },
  ];

  products.forEach(product=>console.log(product));


const updatedProduct = products.map(product => {

  return { ...product, category: "I-phone" };
});

  console.log(updatedProduct);

  console.log(products);


  const filterProduct=products.filter(product=>
    {
        return product.isEnabled===true
    });
  
    console.log("The filtered product us ",filterProduct);

   console.log(updatedProduct.every(product => product.category === "I-phone"));

   console.log(products.some(product=>product.isEnabled===true));














