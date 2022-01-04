import { Scene } from "phaser";

export class MainScene extends Scene {
    constructor() {
        super(`main`);
    }

    preload() {

    }

    create() {
        console.log('Main scene was created');
    }

    update(time, delta) {

    }
}