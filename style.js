var rect = document.querySelector("#rect");
rect.addEventListener("mousemove",function(dets){
    var xloca = dets.clientX - rect.getBoundingClientRect().x;
    var yloca = dets.clientY - rect.getBoundingClientRect().y;
    document.querySelector("#irect").style.clipPath = `circle(12% at ${xloca}px ${yloca}px)`
})


