process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import axios from "axios";
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data=await response.json();
    console.log(data.title);
  } catch (err) {
    console.log(`There is some error: ${err}`);
  }
};

fetchData("https://jsonplaceholder.typicode.com/posts/1");


const fetchUsingAxios=async(url)=>
{
  try{
     const response = await axios(url);
       const data=response.data[0].title;
     console.log(data);
  }
   catch (err) {
    console.log(`There is some error: ${err}`);
  }
}

fetchUsingAxios("https://fakestoreapi.com/products");


const fetchTitle=async(url)=>
{
  try{
     const response = await axios(url);
       const result=response.data;
       for(const data of  result)
       {
        console.log(data.title);
       }
  }
   catch (err) {
    console.log(`There is some error: ${err}`);
  }
  finally{
    console.log("Finally -block always runs-It is used to clean up code ");
  }
}

fetchTitle("https://fakestoreapi.com/products");