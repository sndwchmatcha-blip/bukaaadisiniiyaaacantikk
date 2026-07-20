window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        }, 1000);

    }, 2500);

});

const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const website = document.getElementById("website");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

    cover.style.opacity = "0";
    cover.style.transition = "1s";

    setTimeout(() => {

        cover.style.display = "none";
        website.style.display = "block";
        for(let i=0;i<25;i++){

    setTimeout(createHeart,i*180);

        }
        setTimeout(() => {

    startTyping();

},800);
        
music.currentTime = 21;
music.play().catch(() => {});

    }, 1000);

});
function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="🤍";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="-40px";
    heart.style.fontSize=(18+Math.random()*22)+"px";
    heart.style.pointerEvents="none";
    heart.style.zIndex="99999";
    heart.style.transition="transform 6s linear, top 6s linear, opacity 6s";
    heart.style.opacity=".9";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.top="110vh";
        heart.style.transform=`translateX(${Math.random()*250-125}px) rotate(${Math.random()*360}deg)`;
        heart.style.opacity="0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },6100);

               }
const typingElements = document.querySelectorAll(".typing");

async function typeWriter(element){

    const text = element.innerHTML;

    element.innerHTML = "";

    for(let i=0;i<text.length;i++){

        element.innerHTML += text.charAt(i);

        window.scrollTo({
            top: element.offsetTop-120,
            behavior:"smooth"
        });

        await new Promise(resolve=>setTimeout(resolve,35));

    }

}
async function startTyping(){

    for(const item of typingElements){

        await typeWriter(item);

        await new Promise(resolve=>setTimeout(resolve,500));

    }

}
music.addEventListener("ended", () => {

    music.currentTime = 21;

    music.play();

});
