var winState = {
    create: function(){
        
        
        var reload = this.add.audio('reload');
             reload.play();
    this.add.sprite(150,350, 'zedHead')
    this.add.sprite(300,350, 'zedHead')
    this.add.sprite(225,250, 'zedHead')
    this.add.sprite(300, 0, 'merc')
    var startLabel = this.add.text(80, game.world.height-80,
                    'Press the "Spacebar" key to return to menu.',
                    {font: '25px Arial', fill: '#ffffff'})
                    
    var startLabe2 = this.add.text(80, 80,
                    'You kicked some zombie butt',
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
    
    
    };