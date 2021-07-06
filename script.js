/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 700;

/*enemy1 = {
    x: 50,
    y: 100,
    width: 200,
    height: 200
}*/

class Enemy {
    constructor(){
        this.x = 50;
        this.y = 100;
        this.width = 200;
        this.height = 200;
    }
}

let incremento;
let limite = 250;
const enemy2 = new Enemy();

function incrementa(adiciona){
    enemy2.x += adiciona;
}

function decrementa(subtrai){
    enemy2.x -= subtrai;
}

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //enemy2.x++;
    incrementa(1);
    if(enemy2.x == 25){
        decrementa(-1);
    }
    console.log(enemy2.x)
    ctx.fillRect(enemy2.x, enemy2.y, enemy2.width, enemy2.height);
    //requestAnimationFrame(animate);
}

/*document.addEventListener('keydown', function(event){
    const keyName = event.key;
    //console.log('keydown event\n\n' + 'key: ' + keyName);
    if(keyName == 'ArrowRight'){
        enemy1.x += 10;
        animate();
        console.log(enemy1.x);
    } else if(keyName == 'ArrowLeft'){
        enemy1.x -= 10;
        animate();
        console.log(enemy1.y);
    }
});*/

animate();