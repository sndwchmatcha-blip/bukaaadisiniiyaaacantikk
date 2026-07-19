document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    }, {
        threshold: 0.2
    });

    sections.forEach(section => {

        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 1s ease";

        observer.observe(section);

    });

});
const photos = document.querySelectorAll(".gallery img");

photos.forEach((photo) => {

    photo.addEventListener("click", () => {

        if(photo.classList.contains("zoom")){
            photo.classList.remove("zoom");
        }else{
            photos.forEach(p => p.classList.remove("zoom"));
            photo.classList.add("zoom");
        }

    });

});
const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.08)";
});

button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
});

button.addEventListener("touchstart", () => {
    button.style.transform = "scale(0.95)";
});

button.addEventListener("touchend", () => {
    button.style.transform = "scale(1)";
});

window.addEventListener("load",()=>{

    for(let i=0;i<18;i++){

        const heart=document.createElement("div");

        heart.innerHTML="🤍";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="-30px";
        heart.style.fontSize=(18+Math.random()*18)+"px";
        heart.style.opacity="0.7";
        heart.style.pointerEvents="none";
        heart.style.transition="transform 6s linear, top 6s linear, opacity 6s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.top="110vh";
            heart.style.transform=`translateX(${Math.random()*200-100}px)`;
            heart.style.opacity="0";

        },100);

        setTimeout(()=>{
            heart.remove();
        },6200);

    }

});
