//1.compare two JASON have the same properties without order


//a. var obj1 = {name:"person 1",age:5};
//b. var obj2 = {age:5,name:"person 1"};


var obj1 = {
    name:"person 1",
    age:5
};

 var obj2 = {
    age:5,
    name:"person 1"
};

 console.log(JSON.stringify(obj1) === JSON.stringify (obj2)) 

