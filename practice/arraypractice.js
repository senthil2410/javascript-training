
 // arranging the names in alphaphetic order.
const students=["Abinesh","Arthana","Bala","Baskar","Senthil","Suchind"];

const orderstudent=students.map(student=>student.toUpperCase())
                        .reduce((acc,name)=>
                        {
                            const firstletter=name[0];
                           if(!acc[firstletter])
                           {
                            acc[firstletter]=[];
                           }

                           acc[firstletter].push(name);

                           return acc;

                        },{});

console.log(orderstudent);


// finding the duplicates 

const duplicateArray=[1,4,5,6,1,5,6,6];

const duplicates=duplicateArray.filter((value,index)=>(duplicateArray.indexOf(value)!==index));

console.log(duplicates);
const duplicate=new Set([...duplicates]);

console.log("Dulicate vales from array",duplicate);

console.log(duplicateArray.some(element=>element===6));

console.log(duplicateArray.every(element=>element===6));
// frequency


const manofmatch=["Raina","Kolhi","Raina","Kolhi","Raina","Raina"];

const manofseries=manofmatch.reduce((acc,freq)=>
{
      acc[freq]=(acc[freq]||0)+1;
      return acc;
},{});

console.log(manofseries);


// captilize the fistletter


const users=["raja","senthil","surya","suchind"];

const  username=users.map(user=>user[0].toUpperCase()+user.slice(1));

console.log(username);

// adding new properties to exissing array.

const products=[{name:"fan",price:100},
                {name:"TV",price:1000},
                {name:"Laptop",price:3400},
                {name:"fridge",price:2000},
                ];

console.log(products.find(({name})=>name==='TV'));
const newproducts=products.map(product=>
({
     ...product,
     inStock:true

}
));

console.log(newproducts);

// finding the expensive product with filter

const [fan,...restproduct]=products;

const expensive=restproduct.filter(product=>product.price>1500);

console.log("Expensive product",expensive);

// Modifiying the exaising properities

const newproduct1=products.map(product=>({

    ...product,
     price:(product.price*100)/10
}))

console.log(newproduct1);

const newproduct2=products.filter(product=>product.price>1800);

const product3=newproduct2.map(product=>
({
    ...product,
    discount:(product.price*10)/100

}))

console.log(product3);






                          







   




