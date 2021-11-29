var w;
var h;
if(window.innerWidth<window.innerHeight){
    w=window.innerWidth;h=window.innerWidth;
}else{w=window.innerHeight;h=window.innerHeight;}

document.getElementById("D_img").width = w;
document.getElementById("D_img").height = h;  


window.addEventListener('resize', function(event) {
    var w;
    var h;
    if(window.innerWidth<window.innerHeight){
        w=window.innerWidth;h=window.innerWidth;
    }else{w=window.innerHeight;h=window.innerHeight;}
    
    document.getElementById("D_img").width = w;
    document.getElementById("D_img").height = h;  
    
    }, true);