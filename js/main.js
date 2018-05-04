// Game Component Variables-------
var heroMoveSpeed = 7;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var missile = new missile();
var missiles = [];
var bossHealth = 30;
var playerHealth = 100;
//------------------------------------------

// HealthBar Function & Variables-------
var hBar = $('.health-bar');
var totalHealth = hBar.data('total');
var currentHealth = hBar.data('value');
var bar = hBar.find('.bar');

function healthUpdate(damage) {
  var newHealth = playerHealth - damage;
  var barWidth = (newHealth / 100) * 100;
  bar.css('width', barWidth + "%");
};
//------------------------------------------
var enemies = [{
    left: 100,
    top: 100
  },
  {
    left: 200,
    top: 100
  },
  {
    left: 300,
    top: 100
  },
  {
    left: 400,
    top: 100
  },
  {
    left: 500,
    top: 100
  },
  {
    left: 600,
    top: 100
  },
  {
    left: 700,
    top: 100
  },
  {
    left: 800,
    top: 100
  },
  {
    left: 100,
    top: 250
  },
  {
    left: 200,
    top: 250
  },
  {
    left: 300,
    top: 250
  },
  {
    left: 400,
    top: 250
  },
  {
    left: 500,
    top: 250
  },
  {
    left: 600,
    top: 250
  },
  {
    left: 700,
    top: 250
  },
  {
    left: 800,
    top: 250
  }
];
var bossEnemies = [{
    left: 100,
    top: 100
  },
  {
    left: 200,
    top: 100
  },
  {
    left: 300,
    top: 100
  },
  {
    left: 400,
    top: 100
  },
  {
    left: 500,
    top: 100
  },
  {
    left: 600,
    top: 100
  },
  {
    left: 700,
    top: 100
  },
  {
    left: 800,
    top: 100
  },
  {
    left: 100,
    top: 175
  },
  {
    left: 200,
    top: 175
  },
  {
    left: 300,
    top: 175
  },
  {
    left: 400,
    top: 175
  },
  {
    left: 500,
    top: 175
  },
  {
    left: 600,
    top: 175
  },
  {
    left: 700,
    top: 175
  },
  {
    left: 800,
    top: 175
  },
  {
    left: 100,
    top: 250
  },
  {
    left: 200,
    top: 250
  },
  {
    left: 300,
    top: 250
  },
  {
    left: 400,
    top: 250
  },
  {
    left: 500,
    top: 250
  },
  {
    left: 600,
    top: 250
  },
  {
    left: 700,
    top: 250
  },
  {
    left: 800,
    top: 250
  }
];

function random(size) {
  return Math.random() * size + 1
};

// Object constructor & Render of objects---------------
var fighter = new Object();
fighter.element = 'fighter';
fighter.x = 500;
fighter.y = 650;
fighter.w = 150;
fighter.h = 80;

var boss = new Object();
boss.element = 'boss';
boss.x = 400;
boss.y = 100;
boss.w = 192;
boss.h = 180;

function setPosition(sprite) {
  var e = document.getElementById(sprite.element);
  e.style.left = sprite.x + 'px';
  e.style.top = sprite.y + 'px';
  e.style.width = sprite.w + 'px';
  e.style.height = sprite.h + 'px';
};
// ----------------------------------------

// Movement Loops---------------
$(document).keydown(function(x) {

  if (x.keyCode === 37) {
    //Moving left
    leftPressed = true
  }
  if (x.keyCode === 39) {
    //Moving rights
    rightPressed = true
  }
  if (x.keyCode === 38) {
    //Moving Up
    upPressed = true

  }
  if (x.keyCode === 40) {
    //Moving Down
    downPressed = true
  }
  if (x.keyCode === 32 && missiles.length == 0) {
    //Space for Fire
    missile.posX = fighter.x;
    missile.posY = fighter.y;
    missile.spawnMissile();
  }
});

$(document).keyup(function(x) {

  if (x.keyCode === 37) {
    //Moving left
    leftPressed = false;
  }
  if (x.keyCode === 39) {
    //Moving rights
    rightPressed = false;
  }
  if (x.keyCode === 38) {
    //Moving Up
    upPressed = false;
  }
  if (x.keyCode === 40) {
    //Moving Down
    downPressed = false;
  }
});

function move() {
  if (leftPressed == true) {
    fighter.x -= heroMoveSpeed;
    // positionOfFighter();
  } else if (rightPressed == true) {
    fighter.x += heroMoveSpeed;
    // positionOfFighter();
  } else if (upPressed == true) {
    fighter.y -= heroMoveSpeed;
    // positionOfFighter();

  } else if (downPressed == true) {
    fighter.y += heroMoveSpeed;
    // positionOfFighter();
  }
  bounds(fighter);
};

function bounds(sprite) {
  if (sprite.x < 0) {
    sprite.x = 0;
  }
  if (sprite.y < 0) {
    sprite.y = 0;
  }
  if (sprite.x + sprite.w > 1090) {
    sprite.x = 1090 - sprite.w;
  }
  if (sprite.y + sprite.h > 700) {
    sprite.y = 700 - sprite.h;
  }
};
//------------------------------
function drawEnemies() {
  document.getElementById('enemies').innerHTML = "";
  for (var i = 0; i < enemies.length; i++) {
    document.getElementById('enemies').innerHTML += `<div class='enemy' style='left:${enemies[i].left}px; top:${enemies[i].top}px'></div>`;
  }
}

function moveEnemies() {
  for (var i = 0; i < enemies.length; i++) {
    if (enemies[i].top < 650) {
      enemies[i].top = enemies[i].top + 0.5;
    } else if (enemies[i].top >= 650) {
      enemies.splice(i, 1);
      healthUpdate(20);
      playerHealth -= 20;
    }
  };
};

function drawbossEnemies() {
  document.getElementById('enemies').innerHTML = "";
  for (var i = 0; i < bossEnemies.length; i++) {
    document.getElementById('enemies').innerHTML += `<div class='bossEnemy' style='left:${bossEnemies[i].left}px; top:${bossEnemies[i].top}px'></div>`;
  };
};

function movebossEnemies() {
  for (var i = 0; i < bossEnemies.length; i++) {
    if (bossEnemies[i].top < 650) {
      bossEnemies[i].top = bossEnemies[i].top + 0.5;
    } else if (bossEnemies[i].top >= 650) {
      bossEnemies.splice(i, 1);
      healthUpdate(10);
      playerHealth -= 10;
    }
  };
};

//Game Music function-------------//
function loseCondition() {
  if (playerHealth <= 0) {
    gameScreen.style.display = "none";
    loseScreen.style.display = "block";
    winScreen.style.display = "none";
    gameOver.play();
  }
};

function winCondition() {
  if (bossHealth <= 0) {
    gameScreen.style.display = "none";
    winScreen.style.display = "block";
    loseScreen.style.display = "none";
    bossMusic.stop();
    gameOver.stop();
  }
};
//-------------------------------//
//Missile function-------------//
function missile() {
  this.velocity = -12;
  this.missileArr = [];
  this.posX;
  this.posY;

  this.spawnMissile = function() {
    this.missile = document.createElement('div');
    this.missile.className = "missile";
    document.getElementById("background").appendChild(this.missile);
    missiles.push(this.missile);
  }

  this.position = function(x) {
    this.missile.style.top = this.posY - 20 + 'px';
    this.missile.style.left = this.posX + 20 + 'px';
  };
  this.fire = function() {
    this.posY += this.velocity;
    if (this.posY <= 0) {
      missiles.splice(missile, 1);
      $('.missile').remove();
    };
  };
};
//-------------------------------//
//Collision and  Enemies Render-------------//
function bossSpawn() {
  if (enemies.length <= 0 && playerHealth >0) {
    setPosition(boss);
    drawbossEnemies();
    movebossEnemies();
    checkCollisionBoss();
    checkCollisionbossEnemies();
    bossMusic.play();
    mainSound.stop();
    if (bossHealth <= 0) {
      bossMusic.stop();
    }
  }
};

function checkCollision() {
  for (var enemy = 0; enemy < enemies.length; enemy++) {
    for (var missile = 0; missile < missiles.length; missile++) {
      if (
        missiles[missile].style.left >= enemies[enemy].left + 'px' &&
        missiles[missile].style.left <= enemies[enemy].left + 50 + 'px' &&
        missiles[missile].style.top <= enemies[enemy].top + 50 + 'px' &&
        missiles[missile].style.top >= enemies[enemy].top + 'px'
      ) {
        enemies.splice(enemy, 1);
        missiles.splice(missile, 1);
        $('.missile').remove();
      }
    }
  };
};

function checkCollisionbossEnemies() {
  for (var enemy = 0; enemy < bossEnemies.length; enemy++) {
    for (var missile = 0; missile < missiles.length; missile++) {
      if (
        missiles[missile].style.left >= bossEnemies[enemy].left + 'px' &&
        missiles[missile].style.left <= bossEnemies[enemy].left + 50 + 'px' &&
        missiles[missile].style.top <= bossEnemies[enemy].top + 50 + 'px' &&
        missiles[missile].style.top >= bossEnemies[enemy].top + 'px'
      ) {
        console.log("hit");
        bossEnemies.splice(enemy, 1);
        missiles.splice(missile, 1);
        $('.missile').remove();
      }
    }
  };
};

function checkCollisionBoss() {
  for (var missile = 0; missile < missiles.length; missile++) {
    if (
      missiles[missile].style.left >= boss.x + 'px' &&
      missiles[missile].style.left <= boss.x + boss.w + 'px' &&
      missiles[missile].style.top <= boss.y + boss.h + 'px' &&
      missiles[missile].style.top >= boss.y + 'px'
    ) {
      console.log("hit");
      $('.missile').remove();
      bossHealth -= 1 / 2;
      console.log(bossHealth);
    };
  };
};
//-------------------------------//
// Game Screens Function-------------//
var loseScreen = document.getElementById('loseScreen');
var gameScreen = document.getElementById('background');
var startScreen = document.getElementById('startScreen');
var winScreen = document.getElementById('winScreen');

loseScreen.style.display = "none";
gameScreen.style.display = "none";
startScreen.style.display = "block";
winScreen.style.display = "none";

function startGame() {
  $("#startScreen").hide();
  $("#background").show();
  mainSound.play();
  setInterval(function() {
    gameLoop();
  }, 1000 / 60);
};
//-----------------------------------//
// Game Loop-------------//
function gameLoop() {
  move();
  setPosition(fighter);
  drawEnemies();
  moveEnemies();
  missile.position();
  missile.fire();
  checkCollision();
  setTimeout(function() {
    bossSpawn();
  }, 1000);
  loseCondition();
  winCondition();
};
//-----------------------------------//

//Game Music function-------------//
var bossMusic = new sound("./sound/bossMusic.mp3", 0.1)
var mainSound = new sound("./sound/background.mp3", 1);
var gameOver = new sound("./sound/gameover2.mp3", 0.1);


function sound(src, volume, value) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.volume = volume;
  this.sound.loop = value;
  this.sound.setAttribute("preload", "auto");
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  }
  this.stop = function() {
    this.sound.pause();
  }
};
//-----------------------------------//
