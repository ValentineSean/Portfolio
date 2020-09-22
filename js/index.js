$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    
    if(scroll > 0){
        $("header").addClass("scrolled");
    }

    else{
        $("header").removeClass("scrolled");
    }
});

// CUSTOM SCROLL BAR
let progress = document.getElementById("progress_bar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;

    progress.style.height = progressHeight + "%";
}