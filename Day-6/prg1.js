const LikeButton = document.querySelector(".btn-Like");
const UnlikeButton = document.querySelector(".btn-Unlike");
const LikeCount = document.querySelector(".Like-Count");
let like=0;

LikeButton.addEventListener("click",()=>{
    like++;
    LikeCount.innerText=`${like} Like`;
});
UnlikeButton.addEventListener("click",()=>{
    console.log("Unlike Button Clicked");
    if(like>0){
        like--;
    }
});
