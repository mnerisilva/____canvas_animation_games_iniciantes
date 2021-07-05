/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 700;

enemy1 = {
    x: 50,
    y: 100,
    width: 200,
    height: 200
}

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //enemy1.x++;
    ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    //requestAnimationFrame(animate);
}

document.addEventListener('keydown', function(event){
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
});

animate();