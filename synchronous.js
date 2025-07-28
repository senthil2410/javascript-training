
const additionBy1=(value)=>value+1;

const additionBy2=(value)=>value+2;

const additionBy3=(value)=>value+3;
let value=0;

value=additionBy1(value);

value=additionBy2(value);

value=additionBy3(value);

console.log("The result is",value);


// chaining the call backfunction the call back function 

const multiplyBy2=(value,callback)=>
{
       const result=value*2;
       callback(result) ;
}

const multiplyBy4=(value,callback)=>
{
       const result=value*4;
       callback(result) ;
}

const multiplyBy6=(value,callback)=>
{
       const result=value*6;
       callback(result) ;
}


multiplyBy2(1,(result1)=>
{
    multiplyBy4(result1,(result2)=>
    {
        multiplyBy6(result2,(result3)=>
            
        {
            console.log("The result is",result3);
        })
    })
})



