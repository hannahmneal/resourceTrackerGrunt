// console.log("test data.js"); // Test. Linked to index.html.

const data = {
    getResources() {
        return fetch("http://localhost:8088/resources")        //Fetch request to api
        .then(response => response.json());     //We need to convert JSON to JS; whatever comes back from this request is stored in the variable you use as an argument ("response" here)
        //.then(function(response){     //The code on line 6 is exactly the same as this block here
        //     response.json();
        // })
//        .then(resourcesArray => console.log(resourcesArray));     //Because the code above is a one-line function, it will return whatever it executes down to. Whatever the array is that you asked for will be returned and you can access it here, because it is passed from the first .then to this one here.

    }
};
