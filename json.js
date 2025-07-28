const  person={
    name:"Senthil",
    age:"23",
    place:"Palani",
    hobbies:["football","cricket","carrom"]
};

const jsondata=JSON.stringify(person);

console.log(jsondata);

console.log(Object.values(person));

const superheroes=`{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}`;

const jsobject=JSON.parse(superheroes);

console.log(jsobject);

const json=JSON.stringify(jsobject);

console.log(json);

const jsondata1=JSON.stringify(jsobject,null,2);

console.log(jsondata1);

const jsondata2=JSON.stringify(jsobject,["squadName","homeTown"],2);

console.log(jsondata2);


