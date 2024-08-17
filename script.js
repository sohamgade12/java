function login(){
    var username=document.getElementsByClassName("name").value;
    // console.log("username is verified");

    var password=document.getElementById("password").value;
    // console.log("password is verified");
    if(!username || !password){
        console.log("Please enter valid username and password");
    }
    else if(username=="Vikram" && password=="Destiny@21")
    {
        console.log("username and password are verified");
    }

    
}


