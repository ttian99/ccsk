import res from "./resource-es6";
import haha from "./lib-es6.js";
// const haha = require('./lib-es6.js');

const HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    ctor: () => {
        this._super();
        const size = cc.winSize;
        const helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        this.addChild(helloLabel, 5);

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
        return true;
    }
});

const HelloWorldScene = cc.Scene.extend({
    onEnter: () => {
        this._super();
        const layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

