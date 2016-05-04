var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });
var Phaser;
function preload() {
    game.load.image('ground', 'assets/images/background.png');
    game.load.spritesheet('soldier', 'assets/sprites/Soldier.gif', 64, 64, 7)
    game.load.spritesheet('zombie', 'assets/sprites/zombiecombo.png', 66, 64, 25)
    game.load.audio('machinegun', 'assets/sounds/machinegun.mp3');
    // game.load.audio('background', 'assets/sounds/electrictiger.mp3')
    
}

//Globals
var button;
var button1;
var buttonLabel1;
var pDamage;


//Begin Create
function create() {
    
    
//Background Image and Audio
    game.add.sprite(-600,0, 'ground')
    // var back = game.add.audio('background');
    //  back.play();
    //  back.volume = .015
    
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
     
    
//Start Horde/Create new NPC
    var horde = []
    
    for(var x = 0; x<=4; x++){
            var z = [-215, -186, -146, -87, -45]
            var Zombie = new Npc(
            25,
            game.add.sprite(z[x], 440, 'zombie')
            )

     //Zombie Animation Shamble  !!!!!!!!!!
        var shamble = Zombie.sprite.animations.add('shamble', [0,1,2,3,4,5,6,7,8]);
        Zombie.sprite.animations.play('shamble', 10, true);
        game.add.tween(Zombie.sprite).to({ x: game.width }, 15000, Phaser.Easing.Linear.None, true);



//Horde array 
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
    
    //Buttons
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
        //animation
            var shoot = Soldier.sprite.animations.add('shoot');
            Soldier.sprite.animations.play('shoot', 25, false);
        //Sound
             var bang = game.add.audio('machinegun');
             bang.play();
    
        //Health-Damage change
        var newZombieHealth;
        var lastZ = horde.length -1
        pDamage = game.rnd.integerInRange(12, 30);
        newZombieHealth = horde[lastZ].health - pDamage
        horde[lastZ].health = newZombieHealth
               
        //Zed animation death       
        if(horde[lastZ].health <= 0){
         var pointX = Zombie.sprite.x -13
         var pointY = Zombie.sprite.y
         console.log(pointX, pointY)
         var zDie = this.game.add.sprite(pointX, pointY, 'zombie')
            zDie.animations.add('zDie', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16,17,18,19,20,21,22,23,24], false);
            zDie.animations.play('zDie');
                horde[lastZ].sprite.kill()
                horde.splice(lastZ, 1)
                console.log(horde)
         } 
   
   
   
    }
    


//Dump Bin

    // function reload(){
    //     if(Soldier.bullets>0){
    //     var magazine = Soldier.bullets - 1
    //     Soldier.bullets = magazine
    //         } else {
    //             button1.visible = false
    //         }
    //     }
    
    
    
    
    
    
   
}
//End create 


        
    

    
    
function update(){
    
    
}

   
