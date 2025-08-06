const day="Monday";

switch(day)
{
    case "Monday":
       console.log("Monday working day");
       break;
    case "Tuesday":
      console.log("Tuesday working day");
      break;
    case "Wednesday":
        console.log("Wednesday working day");
        break;
    case  "Thursday":
        console.log("Thursday working day");
        break;
    case "Friday":
        console.log("Friday working day");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Hoilday");
        break;
    default:
        console.log("Invalid input")      

}


const rating=7;

if(rating>8)
{
    console.log("Excellent");
}
else if(rating>6 && rating <=8)
{
   console.log("Good");
}
else if(rating>4 && rating<=6)
{
    console.log("Average")
}
else if(rating>2 && rating<=4)
{
    console.log("Below-Average");
}
else{
    console.log("POOR")
}
