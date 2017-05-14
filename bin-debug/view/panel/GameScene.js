var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//游戏的主要逻辑
var game;
(function (game) {
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameScene.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.initView();
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
        };
        GameScene.prototype.initView = function () {
            // var shp:egret.Sprite = new egret.Sprite()
            // shp.x = 100;
            // shp.y = 100;
            // shp.graphics.lineStyle(10,0x00ff00);
            // shp.graphics.beginFill(0xff0000,1);
            // // shp.graphics.drawCircle(0,0,50);
            // shp.graphics.drawRect(0,0,100,100);
            // shp.graphics.endFill();
            // shp.$setAnchorOffsetX(50);
            // shp.$setAnchorOffsetY(50);
            // this.addChild(shp);
            // this.shp = shp;
            // shp.x = this.$stage.$stageWidth / 2;
            // shp.y = this.$stage.$stageHeight / 2 - 200
            // var tw = egret.Tween.get(shp,{loop: true});
            // tw.to({rotation:360},1000)
            var needle = new game.NeedleUI();
            needle.x = this.$stage.$stageWidth / 2;
            needle.y = this.$stage.$stageHeight / 2;
            this.addChild(needle);
            this.needle = needle;
            var wheel = new game.WheelUI();
            this.addChild(wheel);
            wheel.x = this.$stage.$stageWidth / 2;
            wheel.y = this.$stage.$stageHeight / 2 - 200;
            wheel.play(1000, false);
            this.wheel = wheel;
        };
        GameScene.prototype.onTouchBegan = function (evt) {
            console.log(">>>>>> onTouchBegan >>>>>> ");
            // var point = this.shp.globalToLocal(this.needle.x,this.needle.y);
            // this.removeChild(this.needle);
            // this.shp.addChild(this.needle);
            // this.needle.x = point.x;
            // this.needle.y = point.y;
            this.wheel.insertElement(this.needle);
        };
        return GameScene;
    }(eui.UILayer));
    game.GameScene = GameScene;
    __reflect(GameScene.prototype, "game.GameScene");
})(game || (game = {}));
//# sourceMappingURL=GameScene.js.map