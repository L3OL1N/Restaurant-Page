function elementFromHTML(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
};
export const FOOTER = elementFromHTML(`
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