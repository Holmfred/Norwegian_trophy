const url = "https://www.fredrikolsen.one/wp-json/wp/v2/posts?_embed&per_page=100";
const productContainer = document.querySelector(".all-blogs");

async function getAllGames(){

    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results)
        createHTML(results)
    }

    catch(error){
        console.log(error);
    }
}

getAllGames()

function createHTML(results){
    productContainer.innerHTML += ""

    for (let i = 0; i < results.length; i++){
            
        if(i===10){
            break
        }  

        productContainer.innerHTML += 
        `
        <div>
            <img src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}" alt ="${results[i].title.rendered}">
            <a href="details.html?id=${results[i].id}"><button class="read-more">Read More</button></a>
        </div>
        <div>
            <h2>${results[i].title.rendered}</h2>
            <div class="paragraphs">
                <p>${results[i].excerpt.rendered}</p>
            </div>
        </div>
        ` 
    }
    const showClick = document.querySelector(".show-more");
    showClick.addEventListener("click", showMore);

    function showMore() {
        for (let i = 10; i < results.length ;i++){

            if(i===20){
                break
            }   

            productContainer.innerHTML += 
            `
            <div>
                <img src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}" alt ="${results[i].title.rendered}">
                <a href="details.html?id=${results[i].id}"><button class="read-more">Read More</button></a>
            </div>
            <div>
                <h2>${results[i].title.rendered}</h2>
                <div class="paragraphs">
                    <p>${results[i].excerpt.rendered}</p>
                </div>
            </div>
            `
    }
    showClick.style.display = "none"
}
}