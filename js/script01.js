function setLogin(){
    try
    {
    var pass = document.getElementById('pass').value;
    var user =document.getElementById("user").value;
    if(user !== ""){
        var inputUser = document.getElementById("user");
        inputUser.classList.add("error-imput");
        alert("Campo de usuario Obligatorio");
        
    }
    
    
    alert("Usuario " + user+ +"password"+ pass);
    

    
    }catch (error) {
        console.log(error);
    }
    
    
}