import { Phaser } from 'phaser';
import { IdleState } from '../states/player';
// import * as states from '../states/player';

export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, atlas, texture) {
        // super(scene, x, y, atlas, texture);
        // this.scene.physics.world.enableBody(this, 0); 
        // scene.add.existing(this);
    }

    preload() {

    }

    create() {
    // https://www.mkelly.me/blog/phaser-finite-state-machine/
    // The state machine managing the hero
    //     this.stateMachine = new StateMachine('idle', {
    //      idle: new IdleState(),
    //     //  move: new MoveState(),
    //     //  swing: new SwingState(),
    //    }, [this, this.hero]);
    }

    update(time, delta) {

    }
}