var menuState = {
    preload: function(){
    game.load.audio('background', 'assets/sounds/background.mp3')
    },
    create: function(){
    
    this.add.sprite(150,350, 'zedHead')
    this.add.sprite(300, 0, 'merc')
    var back = this.add.audio('background');
             back.play();
    
    var nameLabel = this.add.text(80, 80, 'The Horde',
                                    {font: '50px Arial', fill: '#ffffff'});
                                    
    var byLabel = this.add.text(95, 150, 'Created by Jim Wolf',
                                    {font: '20px Arial', fill: '#ffffff'});
                    
    
                    
    var startLabel = this.add.text(80, game.world.height-80,
                    'Press the "Spacebar" key to start',
                    {font: '25px Arial', fill: '#ffffff'})
    
    var skey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    
    skey.onDown.addOnce(this.start, this)
    
    },
      
      start: function(){
         this.state.start('play') 
      
    },
};