window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input element 
	// they are initially empty and hidden

    var span1 = document.createElement("span");
	span1.style.display = "none"; //hide the span element
	var email = document.getElementById("email");
    email.parentNode.appendChild(span1);

    email.onfocus = function(){

            email.classList.remove('error');
            span1.textContent = "Email should be of the type: stephcurry@example.com";
            span1.style.display="";

    }

    email.onblur = function(){

            span1.style.display="none";

    }
    
    var span2 = document.createElement("span");
	span2.style.display = "none"; //hide the span element
	var pwd = document.getElementById("pwd");
    pwd.parentNode.appendChild(span2);

    pwd.onfocus = function(){

            pwd.classList.remove('error');
            span2.textContent = "Password should be atleast 6 characters";
            span2.style.display="";

    }

    pwd.onblur = function(){

            span2.style.display="none";
        }


    var span3 = document.createElement("span");
	span3.style.display = "none"; //hide the span element
	var confirm = document.getElementById("confirm");
    confirm.parentNode.appendChild(span3);

    confirm.onfocus = function(){

            span3.setAttribute("class","info");
            span3.textContent = "Re-enter password";
            span3.style.display="";

    }

    confirm.onblur = function(){

        if(!confirm.value.match(pwd.value))
        {
            confirm.classList.add('error');
            span3.textContent = "Passwords are not matching";
            span3.style.display="";
        }

        else
        {
            confirm.classList.remove('error');
            span3.style.display="none";
        }

    }


    document.onsubmit=function(event){
        var pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        
        if (email.value.length==0){
            event.preventDefault();
            span1.textContent = "Email address cannot be empty";
            span1.style.display="";
            email.classList.add('error');
        }

        else if(!email.value.match(pattern)){
            event.preventDefault();
            span1.textContent = "Invalid email format";
            span1.style.display="";
            email.classList.add('error');
            
        }

        if(pwd.value.length==0){
            event.preventDefault();
            span2.textContent = "Password cannot be empty";
            span2.style.display="";
            pwd.classList.add('error');
        }

        if(pwd.value.length>0 && pwd.value.length<6){
            event.preventDefault();
            span2.textContent = "Password has to be atleast 6 characters";
            span2.style.display="";
            pwd.classList.add('error');
        }
    
    }


}


