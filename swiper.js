var Curscreen = 1;
var MaxScreen = 5;
var timer = null;
function $(id) {return document.getElementById(id);};
function switchPic() {
    if (Curscreen == MaxScreen){
        Curscreen =0;
    } else{
        Curscreen++;
    }
    $("pic").src="img/" + Curscreen +".jpg";     //更换图像的文件名
}
function reStart() {
    switchPic();        //切换下一张图
    init();             //开始定时器
}
function init() {
    timer = setInterval('switchPic();',2000);   //初始化函数，在Body加载时触发
}
//下面这个是消除定时器，单独放置
function pause() {
    clearInterval(timer);
}
function go() {
    init();
}
