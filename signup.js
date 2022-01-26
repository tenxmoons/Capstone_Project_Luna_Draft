function continueSignUp(showhide){
    if(showhide == "show"){
        document.getElementById("left-side").style.visibility="hidden";
        document.getElementById("SignUp-Continued").style.visibility="visible";
        }else if(showhide == "hide"){
        document.getElementById("SignUp-Continued").style.visibility="hidden";
        document.getElementById("left-side").style.visibility="visible";
        }
}

function success() {
    if(document.getElementById("signUp-User-Email").value!=="") { 
           document.getElementById('Send-To-Next').disabled = false; 
       } 
   }

function updateFirstName(value) {
    document.getElementById('first-name').value = value;
   }