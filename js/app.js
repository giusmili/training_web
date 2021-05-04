document.addEventListener("DOMContentLoaded",()=>{
    console.log(200);
    let date, pub, article_section, stock_article, btn_article
        date = ({
            myDate : new Date().getFullYear(),
            target : document.querySelector("footer p")
            
        })
        /* bouton pour voir les articles */
        btn_article =document.querySelector(".btn-add")
        date.target.innerText += date.myDate;
        console.log(typeof date)
        /* objet article  titre, date et paragraphe */
        pub = [
            {
                titre: "Publication 1",
                date: `04-05-${date.myDate}`,
                msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, aspernatur.",
                image: "./asset/dessinee.jpg",
                imoji: "&#128077;"   
            },
            {
                titre: "Publication 2",
                date: `01-05-${date.myDate}`,
                msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, aspernatur.",
                image: "./asset/dessinee.jpg",
                imoji: "&#128077;"   
            },
            {
                titre: "Publication 3",
                date: `02-05-${date.myDate}`,
                msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, aspernatur.",
                image: "./asset/dessinee.jpg",
                imoji: "&#128077;"   
            }

        ]
        //console.table(pub)
        /* itération */
        article_section = document.querySelector(".article_of");
        stock_article = "";
        for(data of pub){
            console.log(
                `${data.titre} ${data.date} ${data.msg} ${data.image} ${data.imoji}`
            )
            stock_article += `
                            <figure>
                                <img src="${data.image}" alt="image">
                                <figcaption>
                                    <h2>${data.titre}</h2>
                                    <time datetime="2021-04-10T20:00:00">${data.date}</time>
                                    <p>${data.msg}<span aria-hidden="true">${data.imoji}</span></p>
                                </figcaption>
                            </figure>`
            }
     
        btn_article.addEventListener("click",function(){
            article_section.innerHTML = stock_article;
            article_section.classList.toggle("article_on");
           this.classList.toggle("btn-remove");
        })




})