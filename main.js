


sketch = quick_draw_data_set[random_number];
console.log(random_number);
Element_of_array = quick_draw_data_set[random_number];

timer_counter=0;
timer_check=[];
drawn_sketch=[];
answer_holder=[];
score=0;


setup();
function draw() {
check_sketch()

if (drawn_sketch == sketch) {
answer_holder = ["set"];
score = score+1;
document.getElementById("score").innerHTML=score;


}
}
function drawtext() {
timer_counter = timer_counter+1;
document.getElementById("time").innerHTML= timer_counter;
console.log(timer_counter);
if (timer_counter > 400) {
timer_counter = 0;
timer_check = "completed"

if (timer_check == "completed" || answer_holder == "set" ) {
timer_check = "";
answer_holder = "";
update_canvas();

}
}
}

function check_sketch() {

}

function update_canvas() {
    background("white");
    random_number = Math.floor((Math.random()*array_1.length)+1)
    console.log(sketch);
    document.getElementById("draw_this").innerHTML=sketch;
    


}

function setup() {
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");

    
}