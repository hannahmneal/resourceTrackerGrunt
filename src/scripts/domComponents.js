// console.log("test domComponents.js");    // Test. Linked to index.html.

const domComponents = {
    createDomElement = (elementType,content, CssClass) {
        const element = document.createElement(elementType);
        element.textContent = content;
        if(CssClass) {
            element.classList.add(CssClass);
        }
        return element;
    },
//This function below takes an array, loops through and creates one dom fragment for articles and one for videos. 
//In order to get data and put on dom so user can see, we need to use the method on data.js to fetch the data. Once we have it, we use the method below to create a place for the data. Then, we use the code on domBuilder to put the data in place.
    createResourcesDocumentFragments(resourcesArray) {

        let domFragments = {
            articles: document.createDocumentFragment(),
            videos: document.createDocumentFragment()
        }
        resourcesArray.forEach(resourceObj) => {
            const resourceSection = this.createDomElement("section", null, "resource-section");
            resourceSection.setAttribute("id", `resource--${resourceObj.id}`);
            const linkElement = this.createDomElement("a", resourceObj.name, null);
            linkElement.setAttribute
        }
    }
};

//This function takes in the HTML element's class, etc., makes a class for it, and returns it to you