var k = document.getElementsByClassName('self1');
k.onmouseover = function(){
    this.style.backgroundColor = 'yello';
}
k.onmouseout = function(){
    this.style.backgroundColor='red'
}

// 这里（全局！）声明了需要控制的变量，然后设置一个隐藏函数，放在显示函数的首行。
let obj1= document.getElementById('para1');
let obj2= document.getElementById('para2');
let obj3= document.getElementById('para3');
let obj4= document.getElementById('para4');
let obj5= document.getElementById('para5');
//下面或许可以替代这些
/*
 window.onload=function(){
        let odiv=document.getElementsByClassName('man-right');
        let objNum=odiv.getElementsByTagName('para');
        let obj1=objNum[0];obj2=objNum[1];obj3=objNum[2];obj4=objNum[3];obj5=objNum[4];
    }
 */

// var 和 let 的区别：
var hide=function () {
    obj1.style.display = 'none' ;
    obj2.style.display = 'none' ;
    obj3.style.display = 'none' ;
    obj4.style.display = 'none' ;
    obj5.style.display = 'none' ;
}
 let setBlock=function (objNum) {
    //objDefine(objNum);
    hide();
    objNum.style.display='block';
 }  //功能类似下面的代码

/*
var block1=function () {
    hide();
    obj1.style.display='block';
}
var block2=function () {
    hide();
    obj2.style.display='block';
}
var block3=function () {
    hide();
    obj3.style.display='block';
}
var block4=function () {
    hide();
    obj4.style.display='block';
}
var block5=function () {
    hide();
    obj5.style.display='block';
}
*/