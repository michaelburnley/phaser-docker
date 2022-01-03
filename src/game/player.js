import { Phaser } from 'phaser';

class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, atlas, texture) {
        super(scene, x, y, atlas, texture);
        this.scene.physics.world.enableBody(this, 0); 
        scene.add.existing(this);
    }

    preload() {

    }

    create() {

    }

    update(time, delta) {

    }
}