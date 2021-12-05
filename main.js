screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = "";

function preload(){
    apple = lodImage();
}

recognition.onresult = function() {
    to_number = Number(content);
    if(Number.isInteger(to_number)){
        document.getElementById("status").innerHTML = "Started to draw apple";
        draw_apple = "set";
    }
    else{
        document.getElementById("status").innerHTML = "The speech has not recognized a number";
    }
}

function setup(){
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width, screen_height-150);
    canvas.position(0, 150);
}

function draw(){
    if(draw_apple = "set"){
        i = 1;
        i + 1;
        x = Math.floor(Math.random() * 700);
        x = Math.floor(Math.random() * 400);
        circle(x,y,radius);
        image(
            apple = "https://waapple.org/wp-content/uploads/2021/06/Variety_Cosmic-Crisp-transparent-300x300.png",x,y,screen_width,screen_height

        )
        document.getElementById("status").innerHTML = "Apples drawn.";
        speak()
    }
}