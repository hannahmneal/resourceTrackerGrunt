// console.log("test main.js");     // Test. Linked to index.html.

data.getResources()
.then(resourcesArray => {
    console.log(resourcesArray);    //console.logs the data
    let resourcesFragments = 
    domComponents.createResourcesDocumentFragments(resourcesArray);
    console.log(resourcesFragments);
    domBuilder.appendAllResources(resourcesFragments);
});   