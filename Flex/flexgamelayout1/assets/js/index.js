const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = 800; //window.innerWidth;
canvas.height = 600; //window.innerHeight;

const scoreDisplay = document.getElementById("score");
let score = 0;
let isPaused = false;
const SPEED = 3;
const ROTATIONAL_SPEED = 0.05;
const FRICTION = 0.9;
const PROJECT_SPEED = 3;
let can_fire = true;
let controllerEnabled = false;
let canFire = true;
const keys = {
    a: { pressed: false },
    d: { pressed: false },
    w: { pressed: false },
    s: { pressed: false },
    space: { pressed: false },
    left: { pressed: false },
    right: { pressed: false },
    up: { pressed: false },
    down: { pressed: false },
  };

  

  
  const player = new Sprite({
    position: { x: canvas.width / 2, y: canvas.height / 2 },
    velocity: { x: 0, y: 0 },
    dimensions: {height: 30, width: 50},
    color: "chocolate",
  });

  const pickup = new Sprite({
    position: { x: 100, y: 100 },
    velocity: { x: 0, y: 0 },
    dimensions: {height: 30, width: 30},
    color: "gray",
  });

  const environ = new Sprite({
    position: { x: 300, y: 400 },
    velocity: { x: 0, y: 0 },
    dimensions: {height: 100, width: 100},
    color: "goldenrod",
  });



  function animate() {
    if (!isPaused) {
      window.requestAnimationFrame(animate);
    }

    c.fillStyle = "green";
    c.fillRect(0, 0, canvas.width, canvas.height);
    //console.log("animating");
    player.update();
    pickup.update();
    environ.update();
    scoreDisplay.innerText = `Gold: $${score}`

    if(rectangularCollision({rectangle: player, rectangle2: pickup})){
       pickup.alive = false;
       score  += 1;
       //console.log(pickup);
    }

  
    player.velocity = { x: 0, y: 0 };
    //controll managment
    if (keys.down.pressed) {
      player.velocity.y += SPEED;
    } else if (keys.up.pressed) {
      //console.log("pressed up");
      player.velocity.y -= SPEED;
      // player.velocity.x = Math.cos(player.rotation) * SPEED;
      //player.velocity.y = Math.sin(player.rotation) * SPEED;
    } else {
      player.velocity.y *= FRICTION;
    }
  
    if (keys.left.pressed) {
      player.velocity.x -= SPEED;
    } else if (keys.right.pressed) {
      player.velocity.x += SPEED;
    } else {
      player.velocity.x *= FRICTION;
    }

    if(rectangularCollision({rectangle: player, rectangle2: environ})){
        //console.log("collide")
         player.velocity.x = -(player.velocity.x + 1);
        player.velocity.y = -(player.velocity.y + 1);
      }
 
}

animate();

window.addEventListener("keydown", (ev) => {
    //console.log(ev.key);
    switch (ev.key) {
      case "p":
    //     //keys.w.pressed = true;
    //     //player.lastKey = "w";
    //     isPaused = !isPaused;
    //     if (!isPaused) {
    //       gameMenu.style.display = "none";
    //       animate();
    //      // decreaseTimer();
    //     } else {
    //       gameMenu.style.display = "block";
    //       gameMenu.innerHTML = "PAUSED V0.1";
    //     };
    //     break;
    //   case " ":
    //     if (projectiles.length < 5) {
    //       projectiles.push(
    //         new Projectile({
    //           position: {
    //             x: player.position.x + 25,
    //             y: player.position.y - 20,
    //           },
    //           velocity: {
    //             x: 0,
    //             y: -PROJECT_SPEED,
    //           },
    //         })
    //       );
    //     }
    //     //console.log(projectiles);
        break;
  
      //player keys
      case "ArrowRight":
        keys.right.pressed = true;
        player.lastKey = "ArrowRight";
        break;
      case "ArrowLeft":
        keys.left.pressed = true;
        player.lastKey = "ArrowLeft";
        break;
      case "ArrowUp":
        keys.up.pressed = true;
        player.lastKey = "ArrowUp";
  
        break;
      case "ArrowDown":
        keys.down.pressed = true;
        player.lastKey = "ArrowDown";
        break;
    }
  });
  
  window.addEventListener("keyup", (ev) => {
    //console.log(ev.key);
    switch (ev.key) {
      //player keys
      case "ArrowRight":
        keys.right.pressed = false;
        break;
      case "ArrowLeft":
        keys.left.pressed = false;
        break;
      case "ArrowUp":
        keys.up.pressed = false;
        break;
      case "ArrowDown":
        keys.down.pressed = false;
        break;
    }
  });