const productContainer = document.querySelector(".blog");

const queryString = document.location.search;

const params = new URLSearchParams(queryString)

const id = params.get("id")

console.log(id)

const url = "https://www.fredrikolsen.one/wp-json/wp/v2/posts/" + id;

console.log(url)


async function getGame(){

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

getGame()

function createHTML(results) {
    productContainer.innerHTML += 
    `
    <div>
        <h2>${results.title.rendered}</h2>
        <div class="details_paragraph">
            ${results.content.rendered}
        </div>
    </div>
    <div class="details">
        <img src="${results.featured_media_src_url}" alt ="${results.title.rendered}">
    </div>
    <div class="modal-bg">
        <div class="modal">
            <img src="${results.featured_media_src_url}" alt ="${results.title.rendered}">
        </div>
    </div>
    `
    const modalClick = document.querySelector('.details');
    const modalBg = document.querySelector('.modal-bg');

    modalClick.addEventListener("click", modal);
    
    function modal(){
        modalBg.style.display = "flex"
    }

    modalBg.addEventListener('click', function(){
        modalBg.style.display = "none"
    })
}

