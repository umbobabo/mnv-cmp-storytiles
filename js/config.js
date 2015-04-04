var ecStoryTilesConfig = {
 "config" : {
  "bundle": {
    "assets": {
      "version": "0.1.0",
      "host": "cdn.static-economist.com"
    },
    "data": {
      "version": "0.1.0",
      "url": "sites/default/files/external/minerva_data/ec-storytiles/0.1.0/data-jsonp.json",
      "provider": "jsonp"
    }
  }
},
 "minerva" :{
  "name": "Storytiles",
  "ns": {
    "js": "ecStoryTiles",
    "css": "ec-storytiles",
    "folder": "ec-storytiles"
  },
  "description": "Set of tools used by The Economist Front End Team",
  "version": "0.1.0",
  "debugMode": true,
  "private": true,
  "homepage": "https://github.com/the-economist-editorial/minerva",
  "author": {
    "name": "Umberto Babini",
    "email" : "umbertobabini@economist.com"
  },
  "devDependencies": {
    "bower": "~1.2.7",
    "express": "^4.10.6",
    "express-handlebars": "^1.1.0",
    "express-logger": "0.0.3",
    "grunt": "~0.4.1",
    "grunt-browser-sync": "^1.5.3",
    "grunt-cli": "^0.1.13",
    "grunt-contrib-concat": "~0.3.0",
    "grunt-contrib-jasmine": "0.5.1",
    "grunt-contrib-jshint": "0.6.4",
    "grunt-contrib-uglify": "~0.2.4",
    "grunt-contrib-watch": "^0.6.1",
    "grunt-githooks": "~0.2.0",
    "grunt-handlebars-compiler": "0.0.7",
    "grunt-ngmin": "0.0.3",
    "grunt-sass": "0.6.0",
    "grunt-shell": "~0.5.0",
    "grunt-usemin": "~0.1.12",
    "url": "^0.10.1",
    "yeoman-generator": "^0.18.4",
    "grunt-criticalcss": "^0.5.0" 
  },
  "engines": {
    "node": ">=0.8.0"
  }
} };