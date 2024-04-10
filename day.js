var el = document.getElementById("mytext");
        el.classList.add("nice");    
        el.classList.remove("nice");
        el.classList.toggle("nice");
        if (el.classList.contains("nice")) {
            alert("The element contains the 'nice' class.");
        }

//sets the local storage key value pair
localStorage.setItem("name","Tarun");

const user = {name:"tarun"};
localStorage.setItem("user",user);
//use this to store as a string 
localStorage.setItem('user-copy',JSON.stringify(user));
