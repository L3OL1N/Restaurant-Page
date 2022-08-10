import { RECIPES } from "./recipes";

function elementFromHTML(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
};
const HOME = elementFromHTML(`
<div class="content">
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
const pages = document.querySelectorAll("[data-page]");
const content = document.getElementsByClassName("content");
for(let i = 0; i < pages.length; i++){
    let page = pages[i];
    page.addEventListener("click",()=>{
        console.log(page.dataset.page)
        console.log(content)
        if(page.dataset.page == "HOME"){
            if(content.length > 0) content[0].remove();
            document.getElementById("content").appendChild(HOME);
        } 
        if(page.dataset.page == "RECIPES"){
            if(content.length > 0) content[0].remove();
            document.getElementById("content").appendChild(RECIPES);
        } 
        
    })
}
