const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const GAME_SIZE = canvas.width;
const SQUARE_SIZE = 20;
let score = 3;
let currentDirection = 'left';
/*for each block*/

class Block{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.oldX = x;
        this.oldY = y;
    }
    draw(){ 
      ctx.fillStyle ='red';
      ctx.fillRect(this.x*SQUARE_SIZE, this.y*SQUARE_SIZE,SQUARE_SIZE,SQUARE_SIZE);
    }
    setPosition(x,y){
        this.oldX = this.x;
        this.oldY = this.y; 
        this.x = x;
        this.y = y;
    }
  }
/*for snake ! My person */
class Snake{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.blockSize = SQUARE_SIZE;
        this.blocks = [];
        this.addBlock(this.x,this.y);
        this.Alive = true;
    }
    addBlock(x,y){
       const block = new Block(x,y);
       this.blocks.push(block);
    }
    moveHead(){
        const head = this.blocks[0];
        head.oldX  = head.x;
        head.oldY = head.y;
        switch (currentDirection) {
            case 'right':
                head.x +=1;
                break;
            case 'left':
                head.x -=1;
                break;
            case 'down':
                head.y +=1;
                break;
            case 'up':
                head.y -=1      
                break;
            default:
                break;
        }
    }
    cadrer(){
        const head = this.blocks[0];
        if(head.x < 0){
            head.x = GAME_SIZE/SQUARE_SIZE;
        }else if(head.x >= GAME_SIZE/SQUARE_SIZE){
            head.x = 0;
        }
        if(head.y < 0){
            head.y = GAME_SIZE/SQUARE_SIZE;
        }else if(head.y >= GAME_SIZE/SQUARE_SIZE){
            head.y = 0;
        }
    }
    calculateNewPosition(){
        let {x,y} = this.blocks[this.blocks.length-1];
        switch (currentDirection) {
            case 'right':
                x -=1;
                break;
            case 'left':
                x +=1;
                break;
            case 'down':
                y -=1;
                break;
            case 'up':
                y +=1      
                break;
            default:
                break;
        }
        return {x,y};

    }
    eat(){
        const head = this.blocks[0];
        if(head.x ===food.x && head.y===food.y){
            food.setRandomPosition();
            const {x,y} = this.calculateNewPosition();
            this.addBlock(x,y);
            console.log(this.blocks);
        }  
    }
    checkIfDead(block){
        let {x,y} = this.blocks[0];
        return x===block.x && y===block.y;
    }
    update(){
        this.moveHead();
        this.cadrer();
        this.eat();
        for(const [index,block] of this.blocks.entries()){
            if(index >0){
                const {oldX,oldY} = this.blocks[index-1];
                block.setPosition(oldX,oldY);
                if(this.checkIfDead(block)){
                  this.Alive = false;
                
                }
            }
            block.draw();
        }
    }
}


/* food will be eating by snake*/
class Food{
    constructor(){
       this.size = SQUARE_SIZE;
       this.setRandomPosition();
    }
    setRandomPosition(){
        let maxSize = GAME_SIZE % ((GAME_SIZE/SQUARE_SIZE) -1);
        this.x = Math.round(Math.random()*maxSize);
        this.y = Math.round(Math.random()*maxSize);
    }
    draw(){
         ctx.fillStyle = 'blue';
         ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}

const food = new Food();
const snake = new Snake();
console.log(food.x*SQUARE_SIZE,food.y*SQUARE_SIZE);
function keyControlePressed(){
     document.addEventListener('keydown',(e)=>{
        switch (e.key) {
            case 'ArrowRight':
                currentDirection = 'right';
                break;
            case 'ArrowLeft':
                currentDirection ='left';
                break;
            case 'ArrowDown':
                currentDirection ='down';
                break;
            case 'ArrowUp':
                currentDirection = 'up';
            default:
                break;
        }
     })
}
function clearScreen(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function update(){
 clearScreen();
 food.draw();
snake.update();
keyControlePressed();
console.log(snake.Alive);
   if(snake.Alive){
    setTimeout(update,150);
   }
}

function start(){
    update();
}
start();
