import { Scene } from 'phaser';

export class Controls extends Scene {

  constructor() {
    super('controls');
  }

  preload() {
    
  }

  create() {
    console.log('Controls registered.');
    this.keys = this.scene.scene.input.keyboard.createCursorKeys();
  }
}