import { Scene } from 'phaser';
import game from '../../game';

export class LoadingScene extends Scene {
  constructor() {
    super('loading-scene');
  }
  create() {
    console.log('Loading scene was created');
    game();
  }
}