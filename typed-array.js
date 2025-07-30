
const buffer=new ArrayBuffer(16);

const int32view=new Int32Array(buffer);

for (let i=0;i<int32view.length;i++)
{
    int32view[i]=i*2;
}


for (let i=0;i<int32view.length;i++)
{
    console.log(int32view[i]);
}

int32view[0]=53;

console.log("After manipulation");

for (let i=0;i<int32view.length;i++)
{
    console.log(int32view[i]);
}

const buffer1=new ArrayBuffer(16);

const int16view=new Int16Array(buffer1);

int16view.set([65,66,67,68,69,70,71,73]);
const text= new TextDecoder().decode(int16view);
console.log(text);



const typedArray=new Int32Array([3,6,9,12]);
const normalArray=Array.from(typedArray);
console.log(normalArray);

const normalArray1=[...typedArray];
console.log(normalArray1);