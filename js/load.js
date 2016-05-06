var loadState = {
    
    preload: function(){
        var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});
    game.load.audio('machinegun', 'assets/sounds/machinegun.mp3');  
    game.load.audio('zeddead', 'assets/sounds/zombiedie.mp3')
    game.load.audio('playerdead', 'assets/sounds/playerdie.mp3')
    game.load.audio('reload', 'assets/sounds/reload.mp3')
    game.load.audio('city', 'assets/sounds/city.mp3')
    game.load.audio('bang', 'assets/sounds/explosion.mp3')
     game.load.audio('flier', 'assets/sounds/helicopter.mp3')
     
    game.load.image('zedHead', 'assets/images/head.png')
    game.load.image('merc', 'assets/images/merc.png')
     game.load.image('mercdead', 'assets/images/deadmerc.png')
      game.load.image('brains', 'assets/images/braineat.png')
      
    game.load.image('ground', 'assets/images/background.png');
    game.load.spritesheet('soldier', 'assets/sprites/Soldier.gif', 64, 64, 7);
    game.load.spritesheet('soldierdie', 'assets/sprites/merckill.png', 64, 64, 7);
    game.load.spritesheet('zombie', 'assets/sprites/zombiecombo.png', 66, 64, 31);
    game.load.spritesheet('eat', 'assets/sprites/eat.png', 64, 64, 5);
 game.load.spritesheet('boom', 'assets/images/explosion.png', 200,200,11)
 game.load.spritesheet('helo', 'assets/sprites/helicopter.png', 115, 65, 3)
    },
    
    create: function(){
        game.state.start('menu');
    }
    
    
};