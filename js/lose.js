var loseState = {
    
    
     create: function(){
    var merc = this.add.sprite(250,250, 'mercdead')
    this.add.sprite(100,100, 'brains')            
    var dead = this.add.audio('playerdead');
             dead.play();
    var startLabel = this.add.text(80, game.world.height-80,
                    'Press the "Spacebar" key to return to menu.',
                    {font: '25px Arial', fill: '#ffffff'})
                    
    var startLabe2 = this.add.text(80, 80,
                    'You are dead.',
                    {font: '25px Arial', fill: '#ffffff'})
    
     var startLabe3 = this.add.text(80, game.world.height-40,
                    'Special thanks to Drew Twietmeyer',
                    {font: '25px Arial', fill: '#ffffff'})
                    
    var ykey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    
    ykey.onDown.addOnce(this.start, this)
    
    },
      
      start: function(){
         this.state.start('menu') 
      
    }
    
    
    
}