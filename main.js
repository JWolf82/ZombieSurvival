var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });
var Phaser;
function preload() {
    game.load.image('ground', 'assets/images/background.png');
    game.load.spritesheet('zombie', 'assets/sprites/zombie.png', 44, 64, 9);
    game.load.spritesheet('soldier', 'assets/sprites/Soldier.gif', 64, 64, 7)

    
}


var button;
var button1;
var buttonLabel1;
var pDamage;



function create() {
    
    
 //background
    game.add.sprite(-600,0, 'ground')
    
    
//Objects
    function Player(name, animate, health, bullets, sprite, dmg){
        this.name = name,
        this.animate = animate,
        this.health = health,
        this.bullets = bullets,
        this.sprite = sprite,
        this.dmg = dmg
    }
    
    var Soldier = new Player(
        "",
        "",
        100,
        5,
        game.add.sprite(500, 440, 'soldier'),
        pDamage
        )
 
        
    function Npc(health, sprite){
        this.health = health,
        this.sprite = sprite
    }
    
//zombie animation
//Start Horde
    var horde = []
    
    for(var x = 0; x<=4; x++){
        
        var z = [50, 86, 146, 187, 215]
        var Zombie = new Npc(
        25,
        game.add.sprite(z[x], 440, 'zombie')
        )
        
            var shamble = Zombie.sprite.animations.add('shamble');
Zombie.sprite.animations.play('shamble', 10, true);
game.add.tween(Zombie.sprite).to({ x: game.width }, 20000, Phaser.Easing.Linear.None, true);
       
//horde array 
     horde.push(Zombie)
      
    };
  
    
    
        
//GUI/HUD
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
    var healthText = game.add.text(520, 35, Soldier.health, style);
    
//buttons
    var buttonStyle = { font: "32px Arial", fill: "#ffffff" };
    
    button1 = game.add.button( 650, 10, null, playerShoot);
    buttonLabel1 = game.make.text( 0, 0, "Shoot", buttonStyle)
    button1.addChild( buttonLabel1 );


    // var button2 = game.add.button( 650, 60, null, reload);
    // var buttonLabel2 = game.make.text( 0, 0, "Reload", buttonStyle)
    // button2.addChild( buttonLabel2 );

//Methods

    
    //Fire Weapon w/ Damage
    function playerShoot(){
        var shoot = Soldier.sprite.animations.add('shoot');
    Soldier.sprite.animations.play('shoot', 25, false);
       var newZombieHealth;
       var lastZ = horde.length -1
       pDamage = game.rnd.integerInRange(12, 25);
        newZombieHealth = horde[lastZ].health - pDamage
         horde[lastZ].health = newZombieHealth
       if(horde[lastZ].health <= 0){
          horde[lastZ].sprite.kill()
          horde.splice(lastZ, 1)
          console.log(horde)
       } 
    }

    // function reload(){
        
    //     if(Soldier.bullets>0){
    //     var magazine = Soldier.bullets - 1
    //     Soldier.bullets = magazine
    //         } else {
    //             button1.visible = false
    //         }
    //     }
    
    
    
    
    
    
//end create    
}



        
    

    
    
function update(){
    
    
}

   
