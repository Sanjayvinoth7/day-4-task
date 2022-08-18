// 2.Use the rest countries 'API URL and display all the country flags in the console


const xhr = new XMLHttpRequest();


xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();

xhr.responseType ="json";

xhr.onload = function displayresult() {
    const countries =xhr.response;

    for(let index in countries){
    console.log(countries[index].flags.png);
    }

}







