import { Scene } from "phaser";
import { TextButton } from "../../game/ui/button";

export class MainMenu extends Scene {
    constructor() {
        super(`main-menu`);
    }

    preload() {

    }

    create() {
        console.log('Main Menu scene was created');

        this.startButton = new TextButton(this, 100, 100, 'Start Game', { fill: '#0f0' });
        this.add.existing(this.startButton);
        this.startButton.on('pointerup', () => {
            console.log(`clicked start`)
        });
    }

    update(delta) {

    }
}