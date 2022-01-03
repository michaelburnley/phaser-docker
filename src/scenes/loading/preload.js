import { Scene } from 'phaser';
import assets from '../assets';

export class PreloadScene extends Scene {

  constructor() {
    super('preload');
  }

  preloadAssets() {
    let has_assets = false;
    // Preload all image files
    for (const key of Object.keys(assets.images)) {
      this.load.image(key, assets.images[key]);
      has_assets = true;
    }
    // Preload all sound files
    for (const key of Object.keys(assets.sounds)) {
      this.load.audio(key, assets.sounds[key]);
      has_assets = true;
    }

    return has_assets;
  }

  preload() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();

    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const loadingText = this.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: 'Loading...',
        style: {
            font: '20px monospace',
            fill: '#ffffff'
        }
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
          font: '18px monospace',
          fill: '#ffffff'
          }
      });
      percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: '',
        style: {
            font: '18px monospace',
            fill: '#ffffff'
        }
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });
                
    this.load.on('fileprogress', function (file) {
        assetText.setText('Loading asset: ' + file.key);
    });

    this.load.on('complete', function () {
        console.log('completed loading all assets');
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
    });

    const has_assets = this.preloadAssets();

    if (!has_assets) {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
    }
  }

  create() {
    console.log('Preloading scene was created');
    this.scene.start('main-menu')
  }
}