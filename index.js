const buttonEl=(document.getElementById("button-el"));

buttonEl.addEventListener("click", function(){
    buttonEl.innerHTML = `Jacie...Zmieniło się😲😲`;
})

const obruzImg =document.getElementById("obruz");

obruzImg.addEventListener("click", function() {
    obruzImg.style.width= "700px";
});