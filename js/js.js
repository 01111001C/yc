/*
window.addEventListener('resize', function(event) {
if(window.innerWidth<window.innerHeight){
    document.getElementById("D_img").width = window.innerWidth;
    document.getElementById("D_img").height = window.innerWidth;  
}else{
    document.getElementById("D_img").width = window.innerHeight;
    document.getElementById("D_img").height = window.innerHeight;  
}

}, true);
*/

window.addEventListener('resize', function(event) {
    var w;
    var h;
    if(window.innerWidth<window.innerHeight){
        w=window.innerWidth;h=window.innerWidth;
    }else{w=window.innerHeight;h=window.innerHeight;}
    
    document.getElementById("D_img").width = w;
    document.getElementById("D_img").height = h;  
    
    }, true);