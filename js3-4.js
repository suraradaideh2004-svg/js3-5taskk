let information = {
thename: "sura",
theage: 25,
gender: "female",
}
console.log(information);
//////////////////////////////////////
let informationn = {
thename: "sura",
theage: 25,
gender: "female",
}
console.log(informationn.thename);
console.log(informationn.theage);
console.log(informationn.gender);
///////////////////////////////////////////
let informationnn = {
thename: "sura",
theage: 25,
gender: "female",
}
console.log(informationnn["thename"]);
console.log(informationnn["theage"]);
console.log(informationnn["gender"]);
//////////////////////////////////////////
let informationnnn = {
thename: "sura",
theage: 25,
gender: "female",
}
console.log(informationnnn.thename);

///////////////////////////////////////////
let information1 = {
thename: "sura",
theage: 25,
gender: "female",
}
console.log(information1["thename"]);
///////////////////////////////////////////////
let person = {
name: "sura",
age: 21,
gender: "Female"
};

for (let key in person) {
console.log(key + ": " + person[key]);
}
//////////////////////////////////////////
let personn = {
name: "sura",
age: 21,
gender: "Female"
};
let oob=Object.keys(personn);
console.log(oob);
/////////////////////////////////////////

let personnn = {
name: "sura",
age: 21,
gender: "Female"
};
let oobb=Object.values(personn);
console.log(oobb);
/////////////////////////////////////////
let personnn1 = {
name: "sura",
age: 21,
gender: "Female"
};
let oobj=Object.entries(personnn1);
console.log(oobj);
///////////////////////////////////
let personn2 = {
name: "sura",
age: 21,
gender: "Female"
};
let ssss={
    ggg:"jood",
    age:11,

}

let oobje=Object.assign(personn2,ssss);

console.log(oobje);
/////////////////////////////////////////////
let personn3 = {
name: "sura",
age: 21,
gender: "Female"
};
let oobject=Object.freeze(personn3);
personn3.name="jood";
delete personn3.age;
console.log(oobject);
////////////////////////////////////
let personn4 = {
name: "sura",
age: 21,
gender: "Female"
};
let oobjectt=Object.seal(personn4);
;personn4.age=30,
personn4.major="eng";
console.log(oobjectt);