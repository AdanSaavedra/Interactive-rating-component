
function checked(){
    var este = document.getElementsByName('number');
    
    for (var i =0;i<este.length; i++){
        if(este[i].checked)
        return sessionStorage.setItem("select2", este[i].value);
    }
}


