# Overview
Dockerized app for easier development of Phaser.JS games

## Stack
- Phaser 3
- http-server
- webpack

## Features 
- Loading bar
- Asset preload
- Dockerized for easier deployment

# Get Started
`phaser-docker` is a full environment for developing projects in Phaser.JS.

## How to Start
- Clone repo to your machine
- `npm i`
- `npm run dev`
- Open http://localhost:9000/ in your browser

## Assets
When adding assets, add them to the assets folder. Then in `src/scenes/assets.js` include the different imports by file type (image or sound.) This will ensure that those assets are preloaded at the start of the game and able to be used throughout the project.

## Scenes
When adding new scenes, please import add into `src/scenes/index.js`. All of these scenes are imported in order into the config.