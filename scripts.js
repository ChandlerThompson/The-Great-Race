//Developer: Chandler Thompson
//Project: The Great Race
//Date: 12/18/2021

window.addEventListener('load', function(){
    counter1 = 0    //set the counters to know what array postion to select
    counter2 = 0
    document.getElementById('stoplight').addEventListener('click', function(){  // strats the race and turns the light green
        document.getElementById('stoplight').src = "stoplight-green.png";
        Timer();
        timer = setInterval(Timer, 1000);
        
    })
    document.getElementById('winner1').addEventListener('click', function(){    // resets the game when you click this winner image
        document.getElementById("header").innerHTML = "The Great Snail Race";
        document.getElementById('stoplight').src = "stoplight-red.png";
        document.getElementById('winner1').src = "";
        document.getElementById('winner2').src = "";
        counter1 = 0;
        counter2 = 0;
        document.getElementById('garry').style.position = "relative";
        document.getElementById('garry').style.top = "190px";
        document.getElementById('garry').style.left = "1100px";
        document.getElementById('rocky').style.position = "relative";
        document.getElementById('rocky').style.top = "0px";
        document.getElementById('rocky').style.left = "900px";

    })
    
    document.getElementById('winner2').addEventListener('click', function(){    // resets the game when you click this winner image
        document.getElementById("header").innerHTML = "The Great Snail Race";
        document.getElementById('stoplight').src = "stoplight-red.png";
        document.getElementById('winner1').src = "";
        document.getElementById('winner2').src = "";
        counter1 = 0;
        counter2 = 0;
        document.getElementById('garry').style.position = "relative";
        document.getElementById('garry').style.top = "190px";
        document.getElementById('garry').style.left = "1100px";
        document.getElementById('rocky').style.position = "relative";
        document.getElementById('rocky').style.top = "0px";
        document.getElementById('rocky').style.left = "900px";

    })
    function Timer(){   // adds either one or two to the counters 
        check();
        garrymovement();
        rockymovement();

        var randNumGen1 = Math.ceil(Math.random() * 2);
        var randNumGen2 = Math.ceil(Math.random() * 2);
        counter1 += randNumGen1;
        counter2 += randNumGen2;

        
        
    }
    function garrymovement(){ // sets the postion of garry using a array and uses the counter for the postion 
        var garryArray = ["1100px", "1000px", "900px", "800px", "700px", "600px", "500px", "400px", "300px", "200px", "100px", "0px", "-100px", "200px"];
        document.getElementById('garry').style.position = "relative";
        document.getElementById('garry').style.top = "180px";
        document.getElementById('garry').style.left = garryArray[counter1];
        console.log(counter1);  // these are to test that it was working
        console.log(garryArray[counter1]);
    }
    function garrywin(){    // sets garry as the winner img
        document.getElementById('winner1').src = "gary.png"
    }
    function rockymovement(){   // sets the postioning of rocky using a array and uses the counter for the postion 
        var rockyArray = ["900px", "800px", "700px", "600px", "500px", "400px", "300px", "200px", "100px", "0px", "-100px", "-200px" , "-300px", "-400px"];
        document.getElementById('rocky').style.position = "relative";
        document.getElementById('rocky').style.top = "350px";
        document.getElementById('rocky').style.left = rockyArray[counter2];
        console.log(counter2);  // these are to test that it was working
        console.log(rockyArray[counter2]);
    }
    function rockywin(){    // sets rocky as the winner img
        document.getElementById('winner2').src = "rocky.png";
    }

    function check(){
        if(counter1 >= 11 && counter2 >= 11){   // if they tie they both show up as winners
            clearTimeout(timer);    // stops the timer from going 
            document.getElementById("header").innerHTML = "Its a Tie";
            garrywin();
            rockywin();
        }
        else if(counter1 >= 11){    // sets garray as the winner
            clearTimeout(timer);    // stops the timer from going 
            document.getElementById("header").innerHTML = "Garray Wins";

            garrywin();
        }
        else if(counter2 >= 11){    // sets rocky as the winner
            clearTimeout(timer);    // stops the timer from going 
            document.getElementById("header").innerHTML = "Rocky Wins";
            rockywin();
        }
    }
})