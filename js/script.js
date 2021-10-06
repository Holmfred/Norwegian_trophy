const url = "https://www.fredrikolsen.one/wp-json/wp/v2/posts?_embed";
const productContainer = document.querySelector(".latest-blogs");

async function getGames(){

    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results)
        
        for (let i = 0; i < results.length ;i++){
            productContainer.innerHTML += 
            `
            <div class="latest-games">
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
            </div>
            `

            if (i === 3) {
                break
            }
        }

    }
    catch(error){
        console.log(error);
    }
}

getGames()