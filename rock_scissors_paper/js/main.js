const rspImg=document.getElementById("rsp"); 
const scissors=document.getElementById("scissors");
const rock=document.getElementById("rock");
const paper=document.getElementById("paper");


let imgs = new Array();

imgs[0]="rock.png";
imgs[1]="scissors.png";
imgs[2]="paper.png";

function showImg(){
    imgNum=Math.floor(Math.random()*3);
    console.log(imgNum);
    rspImg.src=imgs[imgNum];

    setTimeout(showImg,50); 
}

//showImg();

scissors.addEventListener('click',function(){
    
});

rock.addEventListener('click',function(){

});

paper.addEventListener('click',function(){

});
