const userInput = require('readline');
 
const  temperature=97.8


if(temperature>25.8)
{
    console.log("The temperature is very higher today");
}
else{
    console.log("THE temperature is hot Today")
}


const rl= userInput.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
rl.question("Enter your month: ", function(month){
    
     
    if(month==="Jan"||month==="Mar"||month==="May"||month==="Jul"||month==="Aug"||month==="Oct"||month=="Dec")
    {
        console.log("The Month has 31 days" );
    }
    else if(month=="Feb")
    {
        console.log("Month has 28 days");
    }
    else if(month=="Apr"||month=="Jun"||month=="Sep"||month=="Nov")
    {
        console.log("Month has 30 days");
    }
    else{
        console.log("Invalid Input")
    }



    switch(month)
    {
        case "Jan":
        case "Mar":
        case "May":
        case "Jul":
        case "Aug":
        case "Nov":
        case "Dec":  
           console.log("The Month has 31 days");
           break;

        case "Feb":
            console.log("The Month has 28 days");
            break;

        case "Apr":
        case "Jun":
        case "Sep":                                     // We should  want to prefer the  swith case instead of having multiple if-else statements.
        case "Nov":
           console.log("THe month has 30 days ");
           break;
        
        default:
            console.log("Invalid Input")
      
    }

    rl.close();
});


