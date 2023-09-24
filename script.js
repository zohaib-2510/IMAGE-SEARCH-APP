const accesKey = "XcGgQ84gTbKi48F8X5z7sNUW3d1RfOQstakU6uZIEvQ";
const  formEl  = document.querySelector("form");
const  inputEl  = document.getElementById("search-input");
const  searchResults  = document.querySelector(".search-results");
const  showMore  = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=&{inputData}&client_id=${accesKey}`;
    const responsive = await fetch(url);
    const data = await responsive.json();
    const results = data.results;
    if(page===1){
        searchResults.innerHTML = "";
    }
    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classlist.add("search-result");
        const image = document.createElement('img');
        image.scr = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageWrapper.appendChild(imageWrapper);
    });

page++;

if(page > 1){
    showMore.style.display="block";
}

}
formEl.addEventListener("submit",(event) => {
    event.preventDefault();
page = 1;
searchImages();
})



showMore.addEventListener("click",() => {
   
searchImages();
})
























