function elementFromHTML(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
};
export const CONTACT = elementFromHTML(`
<div class="content contact">
<div class="banner">              
</div>
<main>
    <div class="form">
        <h3>
            對我們有興趣嗎?
            <br>歡迎留下您的資料
        </h3>
        <form action="contact.html">
            <textarea name="textarea" id="" cols="40" rows="7"></textarea>
            <div class="form_text">
                <label for="name">姓名</label>
                <input id="name" type="text" name="name" placeholder="請輸入姓名">
                <label for="tele">電話 </label>
                <input id="tele" type="tel" name="tele" placeholder="0912345678">
                <label for="mail">信箱</label>
                <input id="mail" type="email" name="email" placeholder="hexschool@gmail.com">
                <input type="submit" class="button" value="提交">
            </div>
        </form>
    </div>
    <div class="info">
        <p>聯絡我們 : <a href="mailto:abc@gmail.com">abc@gmail.com</a></p>
        <p>電話 : <a href="tel:+8869123456789">+8869123456789</a></p>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1742.2368313188942!2d120.28820488550797!3d23.39371268235705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x632dcd28fffcd1d9!2z5ZKM6IiI6LaF5biC!5e1!3m2!1szh-TW!2stw!4v1656644584373!5m2!1szh-TW!2stw" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</main>        
</div>
`)