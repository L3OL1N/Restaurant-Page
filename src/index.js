import { HEADER } from "./header";
import { HOME } from "./home";
import { RECIPES } from "./recipes";
import { CONTACT } from "./contact";
import { FOOTER } from "./footer";

// header footer
document.getElementById("content").prepend(HEADER);
document.getElementById("content").appendChild(HOME);
document.getElementById("content").append(FOOTER);
// #content
const pages = document.querySelectorAll("[data-page]");
const content = document.getElementsByClassName("content");
const footer = document.querySelector("footer");
// page event listener
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
        document.querySelector(`header [data-page=${dataPage}]`).classList.add("active");  
        if(dataPage == "HOME") document.getElementById("content").appendChild(HOME);
        if(dataPage == "RECIPES"){
            document.getElementById("content").appendChild(RECIPES);
            shopShow();
        } 
        if(dataPage == "CONTACT") document.getElementById("content").appendChild(CONTACT);
        document.getElementById("content").append(FOOTER); 
    })
}
// photo event listener
function shopShow(){
    const recipesPhoto = document.getElementById("photo");
    recipesPhoto.addEventListener("click",photohandle);
    document.querySelector(".sidebar").addEventListener("click",sidehandle);
// photo handle
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
// side handle
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

