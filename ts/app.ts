/// <reference path="../ts_definitions/phaser.d.ts"/>

class SimpleGame {
    
    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    preload() {
        this.game.load.image('logo', 'assets/img/phaser.png');
        game.load.atlas('button', 'assets/img/button_texture_atlas.png', 'assets/img/button_texture_atlas.json');
        game.load.image('background','assets/img/starfield.jpg');
    }
    
    var button;
    var background;

    create() {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }

}

window.onload = () => {

    var game:SimpleGame = new SimpleGame();
    console.log("Hello World");


};