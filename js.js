window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        var x = document.getElementsByClassName("sticky");
        var div = x[0];
        div.style.top = "-50px";
    }
    else{
        var x = document.getElementsByClassName("sticky");
        var div = x[0]
        div.style.top = "10px";
    }
}