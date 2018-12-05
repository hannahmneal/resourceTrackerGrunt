// console.log("test domBuilder.js");   // Test. Linked to index.html.

const domBuilder = {            //Create a function to populate the HTML form
    // appendInputForm : function() {        //The key is appendInputForm and the value is a function
    // // console.log("Hello");                   // Testing method. A method is: a function that is on an object
    // }
//     appendInputForm () {                //This code (lines 7-9) does the same thing as the code above, lines 4-6
//         console.log("Hello")
//     }
// };
name: "Dom Builder Dom Component",
appendInputForm() {     
        let formContainer = document.querySelector("#form-container");
        formContainer.innerHTML = `<section>
        <label for="resourcename">Resource Name</label>
        <input type="text" name="resourcename" id="resource-name">
        </section>
        <section>
        <label for="resourcelink">Resource Link</label>
        <input type="text" name="resourcelink" id="resource-link">
        </section>
        <section>
        <label for="resourcetype">Resource Type</label>
        <input type="radio" name="resourcetype" value="Video" checked> Video
        <input type="radio" name="resourcetype" value="Article"> Article<br>
        </section>
        <section>
        <button type="button" id="add-button">Add Resource</button>
        </section>`;
    }
},

//domBuilder.appendInputForm();

appendResourceContainers() {
    let divContainer = document.querySelector("#display-container");
    divContainer.appendChild(domComponents.createDomElement(
        "h3", "Video Resources", null));
        const videosContainer = domComponents.createDomElement("article", null, "resource-container");
        videosContainer.setAttribute("id", "videos-container");
        divContainer.appendChild(videosContainer);
        divContainer.appendChild(domComponents.createDomElement("h3", "Article Resources", null));
        const articlesContainer = domComponents.createDomElement ("article", null, "resource-container");
        articlesContainer.setAttribute("id", "articles-container");
        divContainer.appendChild(articlesContainer);
    }
},

domBuilder.appendResourceContainers();

appendAllResource (fragmentsObj) {
    let articlesContainer = document.querySelector
    ("#articles-container");
    let videosContainer = document.querySelector("#videos-container")
};
