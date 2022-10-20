/* gap between pipes = 150px  */
let userscore = 0;


function reset1(){
    clearTimeout(my_time);
    reset_pipe();
    reset_bird();
    reset_road1();
    var points = document.getElementById('p');
    userscore = 0;
    points.innerHTML = "0";
    document.getElementById('reset').click();
    document.getElementById("start").disabled = false;
    document.getElementById("start").style.display = 'block';
    document.getElementById("jump").style.display = 'none';
}
function start(){
    timer();
    document.getElementById("start").disabled = true;
    document.getElementById("start").style.display = 'none';
    document.getElementById("jump").style.display = 'block';

}

function reset_pipe(){
    document.getElementById('i2').style.left = "1070px";
    document.getElementById('i3').style.left = "1070px";
}

function reset_bird(){
    document.getElementById("i1").style.top = "300px";
}

function reset_road1(){
    document.getElementById("p1").style.left = "500px";
}


function timer(){
    display();
    my_time = setTimeout('timer()',13);
    document.getElementById("start").disabled = true;
   

}



function pipe_gen(){
    let y = Math.floor((Math.random() * (500-200)) + 200);
    let i = 150+(400-y);
    let x = -i;
    document.getElementById('i2').style.top = y + "px";
    document.getElementById('point').style.top = y - 150 + "px";
    document.getElementById('i3').style.top = x + "px";
}

var clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
});


function points(){
    
    var bird_img = document.getElementById("i1");
    var point_line = document.getElementById("point");
    var points = document.getElementById('p');

    if (bird_img.x + bird_img.width == point_line.x) {
        userscore ++;
        points.innerHTML = (userscore);

    };
}


function display(){
    var y_bird = document.getElementById('i1').offsetTop;
    var x=document.getElementById('p1').offsetLeft;
    var bird_vel = 3;

    if (x > 110){
        var step = 2;
        x = x  - step;
        pipe_x = pipe_x - step;
        y_bird = y_bird + bird_vel;
        document.getElementById('i1').style.top = y_bird + "px";
        document.getElementById('p1').style.left = x + "px";
        var y = document.getElementById('i1').offsetTop;
        var pipe_x = document.getElementById("i2").offsetLeft;
        document.getElementById('i1').offsetLeft = pipe_x + "px";
        points();
        if (y > 550){
            console.log(y);
            reset1();
            var element = document.getElementById("reset");
            element2.click();
            

        }if (pipe_x > 100){
            console.log('width pf pipe = '+(document.getElementById('i2').offsetTop+100));
            var pipe_vel = 2;
            pipe_x = pipe_x - pipe_vel;
            document.getElementById('i2').style.left = pipe_x + "px";
            document.getElementById('i3').style.left = pipe_x + "px";
            document.getElementById('point').style.left = pipe_x + 50 + "px";

        }if (collides() == true){
            
            reset1();
            var element = document.getElementById("reset");
            element2.click();
            
            
            
            
    

        }if(pipe_x < 500){
            pipe_gen();
            reset_pipe();
        }
        

    }else if (x < 113){
        reset_road1();

    }}     
    
document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ){
        document.getElementById('jump').click();
    
    }
}


    



function jump(){
    var y_bird = document.getElementById('i1').offsetTop;
    var vel = 50;
    y_bird = y_bird - vel;
    document.getElementById('i1').style.top = y_bird + "px";
}

function collides(){   
    var bird_img = document.getElementById("i1");
    var pipe_img = document.getElementById("i2");
    var pipe_img2 = document.getElementById('i3');

    if (bird_img.x < pipe_img.x + pipe_img.width &&
        bird_img.x + bird_img.width > pipe_img.x &&
        bird_img.y < pipe_img.y + pipe_img.height &&
        bird_img.y + bird_img.height > pipe_img.y) return true;
    
    if (bird_img.x < pipe_img2.x + pipe_img2.width &&
        bird_img.x + bird_img.width > pipe_img2.x &&
        bird_img.y < pipe_img2.y + pipe_img2.height &&
        bird_img.y + bird_img.height > pipe_img2.y) return true;
}

