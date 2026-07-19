document.querySelectorAll("a").forEach(button=>{
    button.addEventListener("click",function(e){
        const tujuan=this.getAttribute("href");

        if(tujuan.startsWith("#")){
            e.preventDefault();

            document.querySelector(tujuan).scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});
