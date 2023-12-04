// Button return page
document.addEventListener("scroll", hide)

const returnTop = document.getElementById("returnTop")
returnTop.addEventListener("click", ()=>{
window.scrollTo(0,0)

});

function hide(){
    if(window.scrollY > 140){
        returnTop.style.display = "flex"
    }   else{
        returnTop.style.display = "none"
    }

}

hide()

// Reload

let reloadPage1 = document.getElementById('Avatar')
reloadPage1.addEventListener('click', ()=>{
    location.reload();
})


let reloadPage2 = document.getElementById('titleSite')
reloadPage2.addEventListener('click', ()=>{
    location.reload();
})

// Cor page
let claro = document.getElementById('claro');
claro.addEventListener('click', ()=>{ 
    document.body.style.background="white";
    
});

let escuro = document.getElementById('escuro');
escuro.addEventListener('click', ()=>{ 
    document.body.style.background="black";
    
});
