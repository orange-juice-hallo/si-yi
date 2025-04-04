const button = document.getElementById("button") ;
var d = ['炒飯','涼麵','包子','拉麵','炸醬麵','泡麵','罐頭','火鍋','烤肉','可麗餅','雞排','排骨便當','滷雞腿便當','炸雞腿便當','烏龍麵','春捲','義大利麵','餡餅','關東煮','清粥','沙拉','雞胸肉','炒麵','鍋燒麵',"滷肉飯","雙層牛肉堡+中薯+綠茶","雙層牛肉堡+中薯+可樂","大麥克+中薯+可樂","麥香魚+中薯+可樂","麥香雞+中薯+可樂","雙層牛肉堡+小杯可樂"];
var a = "晚餐" ;
button.addEventListener("click",hallo()) ;

function hallo(){
    a = d[Math.floor(Math.random()*31)];
    document.getElementById("dinner").innerHTML = a;

}
