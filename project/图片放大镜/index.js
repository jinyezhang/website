function init() {

}
init();
var oApp = document.getElementById("app");
var oBigPic = oApp.getElementsByClassName('big-pic')[0];
var oMove = oApp.getElementsByClassName('move')[0];
var oBigImg = oApp.getElementsByClassName('bigPic')[0];
var imgList = document.getElementsByClassName('imgList')[0];
// var imgArr = imgList.getElementsByClassName('small-img');
var imgArr = imgList.getElementsByTagName('img');
var activeImg = imgArr[0];

function move() {
    oBigPic.onmousemove = function(e) {
        oMove.style.display = "block";
        oBigImg.style.display = "block";
        var left = e.clientX - oApp.offsetLeft - oMove.offsetWidth / 2;
        var top = e.clientY - oApp.offsetTop - oMove.offsetHeight / 2;
        left < 0 ? left = 0 : left;
        top < 0 ? top = 0 : top;
        left > oApp.offsetWidth - oMove.offsetWidth ? left = oApp.offsetWidth - oMove.offsetWidth : left;
        top > oApp.offsetHeight - oMove.offsetHeight ? top = oApp.offsetHeight - oMove.offsetHeight : top;

        oMove.style.left = left + 'px';
        oMove.style.top = top + "px";
        oBigImg.style.backgroundPosition = -left * 3 + "px " + -top * 3 + 'px'

    }
    oBigPic.onmouseleave = function() {
        oMove.style.display = "none";
        oBigImg.style.display = "none";
    }
}
move();

function getImg() {
    for (let i = 0; i < imgArr.length; i++) {
        // var img = imgArr[i];
        // img.onclick = function() {
        //     img.classList.add('active');
        // }
        // imgArr[i].onclick = function() {
        //     imgArr[i].classList.add('active');
        // }
        // var img = imgArr[i];
        // img.onclick = function() {
        //         console.log('当前索引', i);
        //         img.classList.add('active');
        //         activeImg.classList.remove('active');
        //         activeImg = img;
        //         var activeimg = img.getAttribute('src');
        //         oBigPic.style.backgroundImage = "url(" + activeimg + ")";
        //         oBigImg.style.backgroundImage = "url(" + activeimg + ")";
        //     }
        (function(i) {
            var img = imgArr[i];
            img.onclick = function() {
                console.log('当前索引', i);
                img.classList.add('active');
                activeImg.classList.remove('active');
                activeImg = img;
                var activeimg = img.getAttribute('src');
                oBigPic.style.backgroundImage = "url(" + activeimg + ")";
                oBigImg.style.backgroundImage = "url(" + activeimg + ")";
            }
        })(i)

    }
}
getImg();