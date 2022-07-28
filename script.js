const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.style.backgroundColor = "lightblue";
let time = 30;
let displayTime = time;
let snowman = 60;
let snowmaN = 55;
let snowmAN = 50;
let sca = 1;
let imgg = 0;
let imggg = 0;
let un = 10;
const color = "blue";

function snowMan() {
  ctx.beginPath();
  ctx.fillStyle = "#FAFAFA";
  //ctx.stokeStyle = "black"
  ctx.beginPath();
  ctx.arc(100, 200, snowmAN, 0, 3 * Math.PI);
  //ctx.arc(50, 50, 3, 0, 2 * Math.PI);
  //ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "#FAFAFA";
  //ctx.stokeStyle = "black"
  ctx.beginPath();
  ctx.arc(100, 285, snowmaN, 0, 3 * Math.PI);
  //ctx.arc(50, 50, 3, 0, 2 * Math.PI);
  //ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "#FAFAFA";
  //ctx.stokeStyle = "black"
  ctx.beginPath();
  ctx.arc(100, 375, snowman, 0, 3 * Math.PI);
  //ctx.arc(50, 50, 3, 0, 2 * Math.PI);
  //ctx.stroke();
  ctx.fill();
}
var score = 0;

function howTo() {
  ctx.font = "16px Calibri";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Move the snowman to collect the snowballs!", 8, 20);
}
function howTo2() {
  ctx.font = "16px Calibri";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("If you hit the sun you lose a point. 3 points to win!", 8, 40);
}

function drawScore() {
  ctx.font = "16px Calibri";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 60);
}

function youWin() {
  ctx.font = "40px Calibri";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("YOU WIN!", canvas.width / 2 - 100, canvas.height / 2);
}

function tryAgain() {
  ctx.font = "40px Calibri";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Aw Try Again!", canvas.width / 2 - 100, canvas.height / 2);
}

function drawTimer() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Timer: " + displayTime, 8, 80);
}

function move(){
 
}

let left = false;
let right = false;
let up = false;
let down = false;

window.addEventListener("keyup", function (event) {
  switch (event.code) {
    case "ArrowRight":
      right = false;
      break;
    case "ArrowLeft":
      left = false;
      break;
    case "ArrowUp":
      up = false;
      break;
    case "ArrowDown":
      down = false;
      break;
  }
});

window.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowRight":
      right = true;
      break;
    case "ArrowLeft":
      left = true;
      break;
    case "ArrowUp":
      up = true;
      break;
    case "ArrowDown":
      down = true;
      break;
  }
});

const man = { x: 0, y: 0 };

let snow = [];

for (let i = 0; i < 15; i++) {
  snow.push({
    x: 100 + Math.random() * 600,
    y: 75 + Math.random() * 300,
    color: "white",
    radius: 5 + Math.random() * 5
  });
}
let sun = [];

for (let e = 0; e < 15; e++) {
  sun.push({
    x: un,
    y: 75 + Math.random() * 300,
    //   color: "#FFFF00",
    radius: 5 + Math.random() * 5
  });
}

let mouse = {
  down: false,
  x: 0,
  y: 0
};

var img = new Image(); // Create new img element
img.addEventListener(
  "load",
  function () {
    // execute drawImage statements here
  },
  false
);
img.src = "https://icon-library.com/images/home-icon-png/home-icon-png-23.jpg"; // Set source path


var img3 = new Image(); // Create new img element
img3.addEventListener(
  "load",
  function () {
    // execute drawImage statements here
  },
  false
);
img3.src =
  "https://cdn-1.vircadia.com/us-e-1/Bazaar/Assets/Textures/Defaults/Interface/default_particle.png"; // Set source path


var img4 = new Image(); // Create new img element
img4.addEventListener(
  "load",
  function () {
    // execute drawImage statements here
  },
  false
);
img4.src = "https://www.freeiconspng.com/uploads/cloud-outline-icon-12.png"; // Set source path

//animation

//body

function cycle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawScore();
  drawTimer();
  howTo();
  howTo2();
  ctx.drawImage(img, 0, 200);
  ctx.drawImage(img3, -70, imgg);
   ctx.drawImage(img4, -70, imggg);
  //youWin();
  if (left) {
    man.x -= 4.5;
    if (man.x < -50) {
      man.x = -50;
    }
  }

  if (right) {
    man.x += 4.5;
    if (man.x > canvas.width - 147) {
      man.x = canvas.width - 147;
    }
  }

  ctx.translate(man.x, man.y);
  //snowman
  snowMan();
  //end of snowman

  //eye
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.stokeStyle = "black";
  ctx.beginPath();
  ctx.arc(90, 185, 5, 0, 3 * Math.PI);
  //ctx.arc(50, 50, 3, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.stokeStyle = "black";
  ctx.beginPath();
  ctx.arc(110, 185, 5, 0, 3 * Math.PI);
  //ctx.arc(50, 50, 3, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  //carrot
  ctx.beginPath();
  ctx.fillStyle = "orange";
  ctx.fillRect(100, 200, 50, 5);

  //scarf
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(58 * sca, 235, 90 * sca, 25);
  ctx.fillRect(61, 251, 20, 35);

  //bottoms
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.stokeStyle = "black";
  ctx.beginPath();
  ctx.arc(100, 340, 5, 0, 3 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.stokeStyle = "black";
  ctx.beginPath();
  ctx.arc(100, 310, 5, 0, 3 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.stokeStyle = "black";
  ctx.beginPath();
  ctx.arc(100, 280, 5, 0, 3 * Math.PI);
  ctx.stroke();
  ctx.fill();

  // smile
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(84, 212);
  ctx.lineTo(88, 210);
  //  ctx.lineTo(110,219);
  ctx.lineTo(114, 215);
  ctx.fill();

  ctx.translate(-man.x, -man.y);

  //snow

  var grd = ctx.createLinearGradient(0, 0, 300, 0);
  grd.addColorStop(1, color);
  grd.addColorStop(0, color);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 400, canvas.width, 3000);

  for (i = 0; i < snow.length; i++) {
    const dx = man.x - snow[i].x + 100;
    const dy = man.y - snow[i].y + 200;
    if (Math.sqrt(dx * dx + dy * dy) < snow[i].radius + 50) {
      snow[i].y = 0;
      snow[i].x = Math.random() * canvas.width;
      // console.log("hit");
      if (time > 1) {
        score += 1;
      }
      if (time > 1) {
        snowman += 2;
      }
      if (time > 1) {
        if ((snowmAN += 1)) {
          sca += 0.01;
        }
      }
      if (time > 1) {
        snowmaN += 1.5;
      }
    }

    ctx.beginPath();
    ctx.fillStyle = snow[i].color;
    ctx.arc(snow[i].x, snow[i].y, snow[i].radius, 0, 2 * Math.PI);
    ctx.fill();
    snow[i].y += 0.95;
    if (snow[i].y > canvas.height) {
      snow[i].y = 0;
      snow[i].x = Math.random() * canvas.width;

      if (time > 1) {
        score -= 0.5;
      }
      if (time > 1) {
        snowman -= 1;
      }
      if (time > 1) {
        if ((snowmAN -= 0.25)) {
          sca -= 0.01;
        }
      }
      if (time > 1) {
        snowmaN -= 0.5;
      }
    }
  }
  for (e = 0; e < sun.length; e++) {
    
    const dx = man.x - sun[e].x + 100;
    const dy = man.y - sun[e].y + 200;
    if (Math.sqrt(dx * dx + dy * dy) < sun[e].radius + 50) {
      sun[e].y = 0;
      sun[e].x = un;
      //  console.log("hit1");
      if (time > 1) {
        score -= 0.5;
      }
    
    }

    ctx.beginPath();
    ctx.fillStyle = "#FFFF00";
    ctx.arc(sun[e].x, sun[e].y, sun[e].radius, 0, 2 * Math.PI);
    ctx.fill();
    sun[e].y += 0.95;
    if (sun[e].y > canvas.height) {
      sun[e].y = 0;
      sun[e].x = un;
      
      if (sun.y > canvas.height){
      un +=100;
   console.log("hit");
    }
  
 
  }

}

  
  displayTime = Math.floor(time);

  if (time > 1) {
    if ((time -= 1 / 60));
    {
      imgg -= 0.4; 
    }
  }
  if (time > 1) {
    if ((time -= 1 / 60));
    {
      imggg += 0.4; 
    }
  }
  if (time < 1) {
    if (score < 3) {
      tryAgain();
    } else if (score > 2) {
      youWin();
    }
  }

  if (time < 1) {
    man.x = canvas.width * 2;
  }

  requestAnimationFrame(cycle);
}
requestAnimationFrame(cycle);
