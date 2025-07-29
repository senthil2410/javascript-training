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
   { type: "Electronics", subType: "HeadPhone", category: "Contract Updates", subCategory: "Requirements Added", isEnabled: false },
   { type: "Clothing", subType: "Shirt", category: "Contract Updates", subCategory: "Application Received", isEnabled: false },
   { type: "Clothing", subType: "Pant", category: "Contract Updates", subCategory: "Premium Processed", isEnabled: true },
   { type: "Sports", subType: "Volleyball", category: "Contract Updates", subCategory: "Requirements Added", isEnabled: true },
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

   const findProduct=products.find(product=>product.subType==="Mobile");

   console.log(findProduct);


   const array=[4,5,6,4,7];

   const  sumarray=array.reduce((acc,num)=>
    {
         return acc+num;
    },0);
 
     console.log(sumarray);

   const maxValue=[1,100].reduce((acc,cur)=>
   {
        return acc>cur?acc:cur
   },20);

           console.log(maxValue);

   const minValue=[1,100].reduce((acc,cur)=>
  {
      return acc<cur?acc:cur;
  })

       console.log(minValue);

   const isenabled=products.reduce((count,product)=>
   {
         return product.isEnabled?count+1:count;
   },0);

  console.log(isenabled);


  const groupType=products.reduce((acc,product)=>
    {
      acc[product.type]=(acc[product.type]||0)+1;
      return acc;
    },{});

    console.log(groupType);
 


  const groupsubType=products.reduce((acc,product)=>
  {
        
         acc[product.subType]= (acc[product.subType] || 0) + 1;
         return acc;
  },{});

  console.log(groupsubType);

const toys=[{ball:10},{bat:5},{ball:10}];

const groupToys=toys.reduce((acc,curr)=>
{
       for(const key in curr)
       {
          acc[key]=(acc[key]||0)+curr[key];
       }
       return acc;
},{})

console.log(groupToys);


const number1=[5,4,3,2,1];

const totalsum=number1.reduceRight((acc,curr)=> acc+curr,5);
console.log(totalsum);

const numbers2=["1","2","3","4","5"];
const Reduceright=numbers2.reduceRight((acc,curr)=>acc+curr);

console.log(Reduceright);

const Reduceleft=numbers2.reduce((acc,curr)=>acc+curr);

console.log(Reduceleft);

const Reduceright1=[1,4,6, ,12, ,6].reduceRight((acc,curr)=>
{
    return acc+curr;
});
console.log(Reduceright1);

const Reduceright2=[1,4,6,undefined ,12,undefined ,6].reduceRight((acc,curr)=>
{
    return acc+curr;
});
console.log(Reduceright2);


const scores=[34,67,56,97,88,10];

const reversedScores=scores.toReversed(scores);

console.log("Normal",scores);

console.log("To reverse array",reversedScores);

const arrayLike={
  length:4,
  [0]:2,
  [1]:4,
  [2]:3,
  [3]:5
};

const reversearraylike=Array.prototype.toReversed.call(arrayLike);

console.log(reversearraylike);

const studentnames=["Ram","Abinaya","Adhira","Deepak","deepa"];

console.log(studentnames.toSorted());

console.log(studentnames);

const classrooms=[{Class:'A',total:25},
                  {Class:'B',total:24},
                  {Class:'C',total:45},
                 {Class:'D',total:35}];

const findClass=classrooms.find(({ Class }) => Class === 'A');

console.log(findClass);

const arraylist=[5,10,15,30,45];

const iterator=arraylist.entries();

console.log(iterator.next().value);
console.log(iterator.next().value);

console.log("Now array will continue");

for(const element of iterator)
{
  console.log(element);
}

const nestedarray=[1,[2,[3,[4,[5]]]]];

console.log(nestedarray.flat());

console.log(nestedarray.flat(5));


const arrayElement=[1,4,9,16,25];

const newArray=arrayElement.flatMap((element)=>[element,element*element]);

console.log(newArray);

const sentences=["Hi","I am Senthil Kumar","from Palani"];

const map=sentences.map(sentence=>sentence.split(" "));

console.log(map);

const flattenmap=sentences.flatMap(sentence=>sentence.split());

console.log(flattenmap);


const arraynumbers=[1,2,3,4,[5,6,7,8]];

console.log(arraynumbers[0]);
console.log(arraynumbers[1]);
console.log(arraynumbers[4]);

const [first,second,...rest]=arraynumbers;

console.log(first);
console.log(second);
console.log(rest);
