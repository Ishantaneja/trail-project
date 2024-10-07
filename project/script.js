let a= document.getElementById("join");
a.addEventListener("mouseover",function(){
    a.style.background="red";
    a.style.color="white";
})

a.addEventListener("mouseout",function(){
    a.style.background="white";
    a.style.color="black";
})

 document.getElementById("reload").addEventListener("click", function(){
    location.reload()
})
function goToOtherPage(){
    window.location.href ="form.html"
}

 