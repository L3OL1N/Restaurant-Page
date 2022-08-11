import { RECIPES } from "./recipes";
import { CONTACT } from "./contact";

function elementFromHTML(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
};
const HEADER = elementFromHTML(`
<header>
<a href="">
    Logo
</a>
<ul class="menu">
    <a class="active" data-page="HOME"><li >HOME</li></a>
    <a data-page="RECIPES"><li>RECIPES</li></a>
    <a data-page="CONTACT"><li>CONTACT</li></a>
</ul>
<a class="hamburger" href="#">三</a>
</header>
`)
const HOME = elementFromHTML(`
<div class="content home">
<div class="banner">
</div>
<main>
    <h2>美味的秘密</h2>
    <ul class="secret">
        <li>
            <img src="https://images.unsplash.com/photo-1607181488396-a18845ee5a16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="spices">
            <h3>新鮮香料</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, perspiciatis?</p>
        </li>
        <li>
            <img src="https://images.unsplash.com/photo-1567539549213-cc1697632146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="chili">
            <h3>刺激辣味</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, perspiciatis?</p>
        </li>
        <li>
            <img src="https://images.unsplash.com/photo-1546272989-40c92939c6c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80" alt="chick">
            <h3>友善自然</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, perspiciatis?</p>
        </li>
    </ul>
    <div class="banner_2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdUJlgj5fDEZtJ8X1nakp34EtItFHvUjDaQ&usqp=CAU" alt="Rémy The Mouse">
        <h3>今日主廚 : Rémy
            <br>Today Chef : Rémy The Mouse
        </h3>
        <p class="p_long">
            Rémy, un jeune rat, vit dans la campagne française en périphérie de Paris avec son père, Django, son frère, Émile, et un clan de rats, dans le grenier de la maison de Mabel, une vieille dame à la retraite. Contrairement aux membres de sa famille, Rémy est un grand admirateur de la cuisine française. Grâce à son odorat très fin, le jeune rat connaît instinctivement les ingrédients à ajouter aux plats pour les rendre meilleurs et plus subtils. C'est pourquoi il se rend furtivement le soir dans la cuisine pour lire un livre de recettes du chef cuisinier étoilé, Auguste Gusteau, mort récemment après la perte d'une de ses étoiles à cause d'un critique culinaire, Anton Ego, qui s'opposait à l'idée fondamentale de Gusteau selon laquelle « tout le monde peut cuisiner ».
        </p>
        <p class="p_short">Rémy, un jeune rat, vit dans la campagne française en périphérie de Paris avec son père, Django, son frère,</p>
    </div>
</main>
</div>
`)
const FOOTER = elementFromHTML(`
<footer>
<a href="#">
    <img src="https://cdn-icons-png.flaticon.com/512/193/193699.png" alt="logo">
</a>
<a href="#" class="toTop-arrow"></a>
<ul>
    <a data-page="HOME"><li >首頁</li></a>
    <a data-page="RECIPES"><li>菜單</li></a>
    <a data-page="CONTACT"><li>聯絡我們</li></a>
</ul>
</footer>
`)
// header footer
document.getElementById("content").prepend(HEADER);
document.getElementById("content").appendChild(HOME);
document.getElementById("content").append(FOOTER);
// #content
const pages = document.querySelectorAll("[data-page]");
const content = document.getElementsByClassName("content");
const footer = document.querySelector("footer");
for(let i = 0; i < pages.length; i++){
    let page = pages[i];
    page.addEventListener("click",()=>{
        const dataPage = page.dataset.page;
        if(page.parentElement.parentElement.matches("footer")) window.scrollTo({top: 0, behavior: "instant" });
        if(content.length > 0) content[0].remove();
        footer.remove();
        for(let el of pages){
            el.classList.remove("active");
        }
        if(dataPage == "HOME"){
            document.querySelector(`header [data-page=${dataPage}]`).classList.add("active");     
            document.getElementById("content").appendChild(HOME);
        } 
        if(dataPage == "RECIPES"){
            document.querySelector(`header [data-page=${dataPage}]`).classList.add("active");
            document.getElementById("content").appendChild(RECIPES);
            shopShow();
        } 
        if(dataPage == "CONTACT"){
            document.querySelector(`header [data-page=${dataPage}]`).classList.add("active");
            document.getElementById("content").appendChild(CONTACT);
        }
        document.getElementById("content").append(FOOTER); 
    })
}
function shopShow(){
    const recipesPhoto = document.getElementById("photo");
    recipesPhoto.addEventListener("click",photohandle);
    document.querySelector(".sidebar").addEventListener("click",sidehandle);
    
    function photohandle(e){
        if(e.target.matches("a, h2")){
            e.preventDefault();
            let herfpos = e.target.id;
            if(e.target.matches("h2")) herfpos = e.target.parentElement.id
            window.scrollTo({top: 1260, behavior: 'smooth'});
            let shop = document.querySelector(`.right_item.${herfpos}`);
            let right_item = document.querySelectorAll(`.right_item`);
            for(let el of right_item){
                el.style.display = "none";
            }
            shop.style.display = "grid";
            let sidebar = document.querySelectorAll(`.sidebar>a[data-shop]`);
            for(let el of sidebar){
                el.classList.remove("select");
            }
            document.querySelector(`.sidebar>a[data-shop=${herfpos}]`).classList.add("select");
            document.querySelector(`.shop`).classList.add("active");
        } 
    }
    function sidehandle(e){
        if(e.target.matches("a,li")){
            e.preventDefault();
            let sidebar = document.querySelectorAll(`.sidebar>a[data-shop]`);
            for(let el of sidebar){
                el.classList.remove("select");
            }
            let herfpos = e.target.dataset.shop;
            e.target.classList.add("select");
            if(e.target.matches("li")){
                herfpos = e.target.parentElement.dataset.shop;
                e.target.parentElement.classList.add("select");
            } 
            let shop = document.querySelector(`.right_item.${herfpos}`);
            let right_item = document.querySelectorAll(`.right_item`);
            for(let el of right_item){
                el.style.display = "none";
            }
            shop.style.display = "grid";
        }

    }
}

