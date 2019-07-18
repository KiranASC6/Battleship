function setup(){
    createCanvas(1000, 1000);
    background(255, 255, 255);
}

let start = 0;
let end = 1000;
let fir = 100;
let box_width = 100;
let box_height = 100;
let empty = 0;
let ship = 1;
let missed = 2;
let grid = [[0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0 ,0, 1],
            [0, 1, 1, 1, 1, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

function mouseClicked(){
    let fi = mouseX/100;
    let si = mouseY/100;
    fi = Math.floor(fi);
    si = Math.floor(si);

    if(grid[fi][si] == 1){
        console.log ("You hit a ship!");
    } else {
        console.log ("You did not hit a ship.");
    }
    if(grid[fi][si] == 1){
        fill(255,0,0);
        rect(fi*box_height, si*box_width, 100, 100);
    } else {
        fill(57, 255, 20);
        rect(fi*box_height, si*box_width, 100, 100);
    }
}

function draw(){
    fill(255, 255, 255);
    for(let i = 0; i < 11; i++);
        line(fir, start, fir, end); //the columns
        line(start, fir, end, fir); //the rows
    fir += 100;

}

























