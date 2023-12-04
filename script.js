// Reload Page 
const reloadPage = document.getElementById("avatar")
reloadPage.addEventListener("click", ()=>{
    location.reload()


});

const reloadPageTwo = document.getElementById("title")
reloadPageTwo.addEventListener("click", ()=>{
    location.reload()

});

const reloadPageThree = document.getElementById("subTitle")
reloadPageThree.addEventListener("click", ()=>{
    location.reload()

});

// Button return page
document.addEventListener("scroll", hide)

const returnTop = document.getElementById("returnTop")
returnTop.addEventListener("click", ()=>{
window.scrollTo(0,0)

});

function hide(){
    if(window.scrollY > 200){
        returnTop.style.display = "flex"
    }   else{
        returnTop.style.display = "none"
    }

}

hide()

