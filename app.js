document.addEventListener("DOMContentLoaded", function () {

    let count = 0;

    const button = document.getElementById("scanButton");

    const prize = document.getElementById("prize");

    const counter = document.getElementById("count");

    button.addEventListener("click", function () {

        if(count < 3){

            count++;

            counter.innerHTML = count + " / 3";

            if(count == 2){

                prize.innerHTML = "🎁 景品交換できます！";

            }

            if(count == 3){

                prize.innerHTML = "👑 豪華景品GET！";

            }

        }

    });

});
