function elementFromHTML(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
};
export const RECIPES = elementFromHTML(`
<div class="content">
            <div class="banner">              
            </div>
            <main>
                <div class="photo">
                    <a href="main_food" class="card wide" 
                         style="background-image:url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60') ;">
                        <h2>精緻主食</h2>
                    </a>
                    <a href="BBQ" class="card tall" 
                         style="background-image:url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60') ;">
                        <h2>經典炭烤</h2>
                    </a>
                    <a href="veg" class="card tall" 
                         style="background-image:url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60') ;">
                        <h2>新鮮生菜</h2>
                    </a>
                    <a href="dessert" class="card dessert" 
                         style="background-image:url('https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60') ;">
                        <h2>輕食甜點</h2>
                    </a>
                    <a href="chef_select" class="card wide" 
                         style="background-image:url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60') ;">
                        <h2>主廚精選</h2>
                    </a>
                </div>
                <nav id="nav"></nav>
                <div class="shop">
                    <ul class="sidebar">
                        <a href="main_food"><li>精緻主食</li></a>
                        <a href="BBQ"><li>經典炭烤</li></a>
                        <a href="veg"><li>新鮮生菜</li></a>
                        <a href="dessert"><li>輕食甜點</li></a>
                        <a href="chef_select"><li>主廚精選</li></a>
                    </ul>
                    <ul class="right_item main_food">
                        <li>
                            <img src="https://images.unsplash.com/photo-1600688640154-9619e002df30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="class hamburger" >
                            <h3>經典漢堡</h3>
                            <h4>Hamburger Classique</h4>
                            <P>$160</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1561758033-7e924f619b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="bacon hamburger">
                            <h3>培根漢堡</h3>
                            <h4>Hamburgers au Bacon</h4>
                            <P>$150</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="double hamburger">
                            <h3>雙層漢堡</h3>
                            <h4>Double Burger</h4>
                            <P>$170</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <span>Coming soon</span>
                        </li>
                        <li>
                            <span>Coming soon</span>
                        </li>
                        <li>
                            <span>Coming soon</span>
                        </li>
                    </ul>
                    <ul class="right_item BBQ">
                        <li>
                            <img src="https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="class BBQ">
                            <h3>經典BBQ</h3>
                            <h4>BBQ Classique</h4>
                            <P>$200</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1592894869086-f828b161e90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=646&q=80" alt="beef BBQ">
                            <h3>碳烤牛排</h3>
                            <h4>Steak grillé au charbon de bois</h4>
                            <P>$250</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1626323107927-008ae2828ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="vegtable BBQ">
                            <h3>碳烤蔬菜</h3>
                            <h4>Légumes grillés au charbon de bois</h4>
                            <P>$150</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <span>Coming soon</span>
                        </li>
                        <li>
                            <span>Coming soon</span>
                        </li>
                        <li>
                            <span>Coming soon</span>
                        </li>
                    </ul>
                    <ul class="right_item veg">
                        <li>
                            <img src="https://images.unsplash.com/photo-1601001816339-74036796370c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="vegtable">
                            <h3>時令鮮蔬</h3>
                            <h4>Légumes frais de saison</h4>
                            <P>$160</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1492015185162-70eff4d54ef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt="fruit">
                            <h3>特選蔬果</h3>
                            <h4>Fruits et légumes sélectionnés</h4>
                            <P>$320</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80" alt="salad">
                            <h3>凱薩沙拉</h3>
                            <h4>Salade César</h4>
                            <P>$180</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <span>Coming soon</span>
                        </li>
                        <li>
                            <span>Coming soon</span>
                        </li>
                        <li>
                            <span>Coming soon</span>
                        </li>
                    </ul>
                    <ul class="right_item dessert">
                        <li>
                            <img src="https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="oreo">
                            <h3>奧利奧蛋糕</h3>
                            <h4>Cupcakes Oreo avec Biscuits</h4>
                            <P>$160</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="icecream">
                            <h3>焦糖冰淇淋</h3>
                            <h4>Glace au Caramel</h4>
                            <P>$130</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="chocolate">
                            <h3>巧克力蛋糕</h3>
                            <h4>Gateau au Chocolat</h4>
                            <P>$100</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1547414368-ac947d00b91d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="cheese cake">
                            <h3>重乳起司</h3>
                            <h4>Fromage Lourd</h4>
                            <P>$200</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <span>Coming soon</span>
                        </li>
                        <li>
                            <span>Coming soon</span>
                        </li>
                    </ul>
                    <ul class="right_item chef_select">
                        <li>
                            <img src="https://images.unsplash.com/photo-1600688640154-9619e002df30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="class hamburger" >
                            <h3>經典漢堡</h3>
                            <h4>Hamburger Classique</h4>
                            <P>$160</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1592894869086-f828b161e90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=646&q=80" alt="beef BBQ">
                            <h3>碳烤牛排</h3>
                            <h4>Steak grillé au charbon de bois</h4>
                            <P>$250</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="class BBQ">
                            <h3>經典BBQ</h3>
                            <h4>BBQ Classique</h4>
                            <P>$200</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1601001816339-74036796370c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="vegtable">
                            <h3>時令鮮蔬</h3>
                            <h4>Légumes frais de saison</h4>
                            <P>$160</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="icecream">
                            <h3>焦糖冰淇淋</h3>
                            <h4>Glace au Caramel</h4>
                            <P>$130</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                        <li>
                            <img src="https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="oreo">
                            <h3>奧利奧蛋糕</h3>
                            <h4>Cupcakes Oreo avec Biscuits</h4>
                            <P>$160</P>
                            <button class="pure-button" type="button">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
`)