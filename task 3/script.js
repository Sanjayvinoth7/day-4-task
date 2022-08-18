//3.Use the same rest countries and print all countries names,region,sub region and population


const xhr = new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();

xhr.responseType = "json";

xhr.onload = function displayresult() {
    const countries = xhr.response;

    for (let index in countries) {
        console.log(countries[index].name.common);
        console.log(countries[index].region);
        console.log(countries[index].subregion);
        console.log(countries[index].population);
            
    }
}







