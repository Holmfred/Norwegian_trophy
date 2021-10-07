const url = "https://www.fredrikolsen.one/wp-json/wp/v2/posts";
const productContainer = document.querySelector(".latest-games");

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
            
        if(i===2){
            break
        }  

        productContainer.innerHTML += 
        `
        <div>
            <img src="${results[i].featured_media_src_url}" alt ="${results[i].title.rendered}">
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
}