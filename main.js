var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('ground', 'assets/images/background.gif');
    game.load.spritesheet('zombie', 'assets/sprites/zombie.gif', 65, 80);
    game.load.spritesheet('soldier', 'assets/sprites/soldier.gif', 75, 80, 2)
}


var button;
var zombie;
var zombie2;
var zombie3;
var soldier;
var soldierHealth;
var zombieHealth;
var newZombieHealth
var bullets = 5;
var button1;
var buttonLabel1;

function create() {
    
    //background
    game.add.sprite(0,0, 'ground')
    
    
    //Soldier
    soldier = game.add.sprite(500, 440, 'soldier')
    soldier.frame = 1;
    soldierHealth = 100

   
    
    //Damage
    //Soldier
    
    
    
    
    
    //Zombies
    zombie = game.add.sprite(125, 440, 'zombie');
    zombie2 = game.add.sprite(175, 440, 'zombie');
    zombie3 = game.add.sprite(145, 440, 'zombie');
    zombieHealth = 25
    
    
    
    
    //draw hud
var drawActionMenuBorder;
var bmd = game.add.bitmapData(352, 152);
bmd.ctx.beginPath();
bmd.ctx.rect(0, 0, 352, 152);
bmd.ctx.fillStyle = '#8e8e8e';
bmd.ctx.fill();
drawnActionMenu = game.add.sprite(650, 50, bmd);
drawnActionMenu.anchor.setTo(0.5, 0.5);
    var drawnActionMenu;
    var bmd = game.add.bitmapData(350, 150);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 350, 150);
    bmd.ctx.fillStyle = '#1B303D';
    bmd.ctx.fill();
    drawnActionMenu = game.add.sprite(650, 50, bmd);
    drawnActionMenu.anchor.setTo(0.5, 0.5);
    
//HealthCount
    var style = { font: "40px Arial", fill: "#fff", align: "center" };
    var healthText = game.add.text(520, 35, soldierHealth, style);
    
//buttons
    var buttonStyle = { font: "32px Arial", fill: "#ffffff" };
    
    button1 = game.add.button( 650, 10, null, shootGun);
    buttonLabel1 = game.make.text( 0, 0, "Shoot", buttonStyle)
    button1.addChild( buttonLabel1 );


    var button2 = game.add.button( 650, 60, null, reloadGun);
    var buttonLabel2 = game.make.text( 0, 0, "Reload", buttonStyle)
    button2.addChild( buttonLabel2 );

    
}

///shoot gun
 function shootGun () {
    var shoot = soldier.animations.add('shoot');
    soldier.animations.play('shoot', 4, false);
    if(zombieHealth > 0){
       newZombieHealth = zombieHealth - 5
       zombieHealth = newZombieHealth
       if(zombieHealth <= 0){
        zombie.kill()
        }
        
        
    }
    
    if(bullets>1){
        var magazine = bullets - 1
        bullets = magazine
    } else {
        button1.visible = false
    }
}

function reloadGun(){
    button1.visible = true
    bullets = 5
    zombieHealth = 25
}

function update(){
    
    
}