function clickRefresh() {
    location.reload();
}

function countDown()
{
    let number = 30;
    let count = 2;
    document.getElementById("changeText").textContent="等候網頁" + number + "秒";
        setInterval(function (){
            if (number === 1){
                if (count !== 0){
                    number += Math.floor(Math.random()*10) + 5
                    count--
                } else {
                    window.location.href = "https://course.fcu.edu.tw/";
                    number = 1
                }
            }
            number--;
            document.getElementById("changeText").textContent="等候網頁" + number + "秒";
        }, 1000)
}

function moveRight(){
    let magic = document.getElementById("magic");
    window.addEventListener('scroll', function (){
        let value = window.scrollY;
        if (value * 3 < window.innerWidth / 2.4){
            magic.style.zIndex = "9";
            magic.style.marginLeft = value * 3 + 'px';
        } else {
            magic.style.marginLeft = window.innerWidth / 2.4 + 'px';
            magic.style.zIndex = "11";
        }

    })
}

function magicClick(){
    window.alert("海螺說");
    alert("坐好")
}

