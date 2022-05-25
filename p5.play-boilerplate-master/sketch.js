const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

let engine;
let world;
var isGameOver = false
var gameStates = 0
var player, playerImg
var enemiesGroup, enemy1, enemy2, enemy3
var bullets = []
var boom, boomImg

function preload() {
enemy1 = loadImage("./assets/enemy1.png")
enemy2 = loadImage("./assets/enemy2.png")
enemy3 = loadImage("./assets/enemy3.png")
boomImg = loadImage("./assets/explosion.png")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  createSprite(400, 200, 50, 50);
  
  player = new Player(width/2, 500, 50, 150)
  enemiesGroup = new Group()
}

function draw() {
  background(255,255,255);  

  player.display(playerImg, width/2, 500, 50, 150)

  drawSprites();
}

function handlePlayerControls() {
  
    if(keyIsDown(RIGHT_ARROW)) {
      player.positionX += 8
    }
    
    if(keyIsDown(LEFT_ARROW)) {
      player.positionY -= 8
    }

    if(keyCode === DOWN_ARROW && isGameOver === false) {
      bullets.shoot()
    }
  
}

  
function shoot() {
  var bullet =  new Bullet(player.x, player.y)
  bullet.display()
  bullets.push(bullet)
  Matter.Body.setVelocity(bullets(index), {x: 0, y: -60})
}

function createEnemies() {
  
}

