document.addEventListener("DOMContentLoaded", () => {

let count = Number(localStorage.getItem("count")) || 0;

const countText = document.getElementById("count");
const prize = document.getElementById("prize");

update();

document.getElementById("scanButton").addEventListener("click",()=>{

if(count>=3)return;

count++;

localStorage.setItem("count",count);

update();

});

function update(){

countText.innerHTML=count+" / 3";

document.getElementById("mitsugi").innerHTML=count>=1?"✅ 御調イベント":"⬜ 御調イベント";

document.getElementById("mukaishima").innerHTML=count>=2?"✅ 向島イベント":"⬜ 向島イベント";

document.getElementById("setoda").innerHTML=count>=3?"✅ 瀬戸田イベント":"⬜ 瀬戸田イベント";

if(count==0){

prize.innerHTML="スタンプを集めよう！";

}

if(count==1){

prize.innerHTML="あと1つで景品！";

}

if(count==2){

prize.innerHTML="🎁 景品交換できます！";

}

if(count==3){

prize.innerHTML="👑 豪華景品GET！";

}

}

});
