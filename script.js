/*document.getElementById('submit').onclick = function() {
    var radios = document.getElementsByName("number");
    var selected = Array.from(radios).find(radio => radio.checked);
    
    this.onclick=location.href="./thanks.html"
    return sessionStorage.setItem("select2", selected.value) ;
}*/

function checked(){
    var este = document.getElementsByName('number');
    //this.onclick=location.href="./thanks.html"
    for (var i =0;i<este.length; i++){
        if(este[i].checked)
        return sessionStorage.setItem("select2", este[i].value);
    }
}


