function elementFromHTML(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
};
export const HEADER = elementFromHTML(`
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