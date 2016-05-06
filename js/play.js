var playState = {
//Globals

preload: function(){
    
},

//Begin Create
create: function() {
    
   
//Background Image and Audio
    this.add.sprite(-600,0, 'ground')
    this.cache.removeSound('background');
     var city = this.add.audio('city');
             city.play();
             
    setTimeout(function(){
      sprite = game.add.sprite(555, 160, 'boom')
    sprite.animations.add('exploding');
    sprite.animations.play('exploding', 15, false);
     var explode = game.add.audio('bang');
             explode.play();
             explode.volume = 1.5
    },4000)
    
     setTimeout(function(){
      flier = game.add.sprite(-15, 75, 'helo')
    flier.animations.add('flyby');
    flier.animations.play('flyby', 15, true);
     var flying = game.add.audio('flier');
             flying.play();
    game.add.tween(flier).to({x: game.width}, 4000, Phaser.Easing.Quadratic.none, true);
    },500)
    
    

//Objects

         
    function Player(name, animate, health, bullets, sprite, dmg){
        this.name = name,
        this.animate = animate,
        this.health = health,
        this.bullets = bullets,
        this.sprite = sprite,
        this.dmg = dmg
    }
    
    Soldier = new Player(
        "",
        "",
        100,
        5,
        this.add.sprite(500, 440, 'soldier'),
        pDamage
        )
 
    function Npc(health, sprite){
        this.health = health,
        this.sprite = sprite
    }
     
    
//Start Horde/Create new NPC
    horde = []
    
    for(var x = 0; x<=4; x++){
            var z = [-215, -186, -146, -87, -45]
            Zombie = new Npc(
            25,
            this.add.sprite(z[x], 440, 'zombie')
            )

     //Zombie Animation Shamble  !!!!!!!!!!
        var shamble = Zombie.sprite.animations.add('shamble', [0,1,2,3,4,5,6,7,8]);
        Zombie.sprite.animations.play('shamble', 10, true);
        this.add.tween(Zombie.sprite).to({ x: 510 }, 9000, Phaser.Easing.Linear.none, true);
        

//Horde array 
        horde.push(Zombie)
    };
            
    
        
//GUI/HUD
var drawActionMenuBorder;
var bmd = this.add.bitmapData(352, 150);
bmd.ctx.beginPath();
bmd.ctx.rect(0, 0, 352, 152);
bmd.ctx.fillStyle = '#8e8e8e';
bmd.ctx.fill();
drawnActionMenu = this.add.sprite(650, 0, bmd);
drawnActionMenu.anchor.setTo(0.5, 0.5);
    var drawnActionMenu;
    var bmd = this.add.bitmapData(350, 0);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 350, 150);
    bmd.ctx.fillStyle = '#1B303D';
    bmd.ctx.fill();
    drawnActionMenu = this.add.sprite(650, 50, bmd);
    drawnActionMenu.anchor.setTo(0.5, 0.5);

    
    
    //Buttons
    var buttonStyle = { font: "32px Arial", fill: "#ffffff" };
    button1 = this.add.button( 650, 10, null, playerShoot);
    buttonLabel1 = this.make.text( 0, 0, "Shoot", buttonStyle)
    button1.addChild( buttonLabel1 );

//Methods
    //Fire Weapon w/ Damage
    function playerShoot(){
        //animation
            var shoot = Soldier.sprite.animations.add('shoot');
            Soldier.sprite.animations.play('shoot', 25, false);
        //Sound
             bang = game.add.audio('machinegun');
             bang.play();
    
        //Health-Damage change
        var newZombieHealth;
        var lastZ = horde.length -1
        pDamage = game.rnd.integerInRange(12, 30);
        newZombieHealth = horde[lastZ].health - pDamage
        horde[lastZ].health = newZombieHealth
               
        //Zed animation death       
       if(horde[lastZ].health <= 0){
           var dead = game.add.audio('zeddead')
           dead.play()
         pointX = Zombie.sprite.x
         pointY = Zombie.sprite.y
         var zDie = this.game.add.sprite(pointX, pointY, 'zombie')
            zDie.animations.add('zDie', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16,17,18,19,20,21,22,23,24], false);
            zDie.animations.play('zDie');
             horde[lastZ].sprite.kill()
             horde.splice(lastZ, 1)
             score = 0
             score += 1
             scoreLabels.text = score
            
         } 
   
    }
          
            score = 0
            showLabels()
            scoreLabels.text = score 


             

        var shamble = Zombie.sprite.animations.add('shamble', [0,1,2,3,4,5,6,7,8]);
        Zombie.sprite.animations.play('shamble', 10, true);
        this.add.tween(Zombie.sprite).to({ x: 510 }, 8000, Phaser.Easing.Linear.none, true);

},

//End create 
    
update: function(){

    if(horde.length != 0){
        if(Zombie.sprite.x >= 510){
        Soldier.sprite.kill()
        for( var d = 0; d < horde.length; d++){
            horde[d].sprite.kill()
            button1.kill()
            game.state.start('lose');
            }
            
        }
        
    }
    
    if(horde.length === 0){
        game.state.start('win');
    }
},


updateText: function () {
    
    healthText.setText(score);

},



}

function showLabels(){
    var text = "0"
    var style = { font: "40px Arial", fill: "#fff", align: "center" };
    scoreLabels = game.add.text(520, 15, text, style)
    }
    




var button;
var button1;
var buttonLabel1;
var pDamage;
var zPositionX;
var Zombie;
var Soldier;
var horde;
var healthText;
var scoreLabels;
var pointX;
var pointY;
var bang;
var score;
var sprite;

