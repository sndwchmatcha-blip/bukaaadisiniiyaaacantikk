const loading = document.getElementById("loading");
const cover = document.getElementById("cover");
const story = document.getElementById("story");

const openBtn = document.getElementById("openBtn");

const typingText = document.getElementById("typingText");
const storyImage = document.getElementById("storyImage");

const music = document.getElementById("bgMusic");

const heartContainer = document.getElementById("heartContainer");

const storyData = [

{
type:"text",
value:"maafff yaaaa sayangggg..."
},

{
type:"text",
value:"massss belummm bisaaaa ngerayaaainnnn ulanggg tahunnn kamuuu secaraa langsungggg karnaaaa kitaaa masiiiihhh terhalaangg jarakkkk..."
},

{
type:"text",
value:"semogaaa suatuuu saattt nantiiii, ulanggg tahunnn kamuuu nggakkkkk lagiiii kitaaa rayaaainnn lewattt layarr, tapiii dengannn pelukannn yangggg benerannnn. 🤍"
},

{
type:"image",
value:"foto1.jpg"
},

{
type:"text",
value:"terimaaa kasihhhh yaaaa karnaaaa udahhh hadirr diii hiduppp massss..."
},

{
type:"image",
value:"foto2.jpg"
},

{
type:"text",
value:"kamuuu bukannn cumaaa oranggg yanggg massss sayanggg...\n\nkamuuu jugaaa rumahhh tempattt hatiii massss selaluuu pengennn pulanggg..."
},

{
type:"image",
value:"foto3.jpg"
},

{
type:"text",
value:"massss percayaa...\n\nsejauhhhh apaapunnn jarakkk kitaaa sekaranggg...\n\ndoaaa massss selaluuu nyampeee buattt kamuuu setiappp harinyaa..."
},

{
type:"image",
value:"foto4.jpg"
},

{
type:"text",
value:"selamattt ulanggg tahunnn istrikuuuu 🤍"
},

{
type:"image",
value:"foto5.jpg"
},

{
type:"text",
value:"i loveee youuuu...\n\ntodayyy...\n\ntomorrowww...\n\nanddd foreverrr... 🤍"
}

];
window.addEventListener("load",()=>{

    setTimeout(()=>{

        loading.style.opacity="0";

        setTimeout(()=>{

            loading.style.display="none";

        },1000);

    },2500);

});

openBtn.addEventListener("click",()=>{

    cover.style.opacity="0";
    cover.style.transition="1s";

    setTimeout(()=>{

        cover.style.display="none";

        story.style.display="flex";

        music.currentTime=21;

        music.play().catch(()=>{});

        startHeartRain();

        playStory();

    },1000);

});

music.addEventListener("ended",()=>{

    music.currentTime=21;

    music.play();

});

function startHeartRain(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="🤍";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(16+Math.random()*26)+"px";

        heart.style.animationDuration=(4+Math.random()*4)+"s";

        heart.style.opacity=(0.4+Math.random()*0.6);

        heartContainer.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },8000);

    },180);

                         }
async function typeText(text){

    typingText.innerHTML="";
    typingText.classList.add("cursor");
    typingText.classList.add("fadeIn");

    for(let i=0;i<text.length;i++){

        typingText.innerHTML+=text.charAt(i);

        await new Promise(resolve=>setTimeout(resolve,45));

    }

    typingText.classList.remove("cursor");

}

function showImage(src){

    return new Promise(resolve=>{

        storyImage.style.display="block";

        storyImage.src=src;

        storyImage.style.opacity="0";
        storyImage.style.transform="scale(.92)";

        setTimeout(()=>{

            storyImage.style.opacity="1";
            storyImage.style.transform="scale(1.08)";

        },50);

        setTimeout(resolve,4200);

    });

}

function hideImage(){

    storyImage.style.opacity="0";

    storyImage.style.transform="scale(1.12)";

    setTimeout(()=>{

        storyImage.style.display="none";

    },800);

}

async function playStory(){

    for(const item of storyData){

        if(item.type==="text"){

            storyImage.style.display="none";

            typingText.classList.add("fadeIn");

            await typeText(item.value);

            await new Promise(resolve=>setTimeout(resolve,2200));

            typingText.classList.remove("fadeIn");
            typingText.classList.add("fadeOut");

            await new Promise(resolve=>setTimeout(resolve,800));

            typingText.innerHTML="";
            typingText.classList.remove("fadeOut");

        }

        else{

            typingText.innerHTML="";

            await showImage(item.value);

            hideImage();

            await new Promise(resolve=>setTimeout(resolve,900));

        }

    }

}
setTimeout(()=>{

    document.body.style.cursor="default";

},100);

window.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});

window.addEventListener("dragstart",(e)=>{

    e.preventDefault();

});

document.addEventListener("selectstart",(e)=>{

    e.preventDefault();

});

document.addEventListener("touchstart",()=>{

    if(music.paused){

        music.currentTime=21;

        music.play().catch(()=>{});

    }

},{once:true});
