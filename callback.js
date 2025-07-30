
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


function validUserName(username, password, callback){
    console.log("Validating user credientails");

    setTimeout(() => {
        if(username==="Senthil" && password==="123456"){
            console.log("User validated sucessfully ");

            callback(null, {userId: 1});
        }
        else{
            callback("Invalid credential");
        }
    }, 1000);
}
 
function getUserProfile(userId, callback){

    console.log("Fetching the user profile ");

    setTimeout(() => {
        const profile={
            id: userId,
            name: "Senthil",
            role: "Admin"
        }
        console.log("Profile fetched Sucessfully");
        callback(null, profile);

    }, 1000);
}



function login(username, password){

    validUserName(username, password, (err, user)=>{

        if(err){
            return console.error(err);
        }

        getUserProfile(user.userId, (err, profile)=>{
            if(err){
                return console.error(err);

            }
            

        })
    })
}

login("Senthil","123456");
login("senthil","123456");




