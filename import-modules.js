import { Student } from "./export-modules.js";

import { wifipassword,addition,login} from "./export-modules.js";

import details from "./export-modules.js";

const suchind=new Student("Suchind");

suchind.setemail("suchind@gmail.com");

console.log(suchind.getemail());

console.log(suchind.getname());
console.log(wifipassword);

console.log(addition(4,5));
console.log(addition(10,10));

console.log(login("user@gmail.com","12345"));

console.log(details());


