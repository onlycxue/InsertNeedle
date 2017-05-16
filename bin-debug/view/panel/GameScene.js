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
            game.ApplicationFacade.getInstance().registerMediator(new game.GameSceneMediator(this));
        };
        GameScene.prototype.initView = function () {
            var wheel = new game.WheelUI();
            this.addChild(wheel);
            wheel.x = this.$stage.$stageWidth / 2;
            wheel.y = this.$stage.$stageHeight / 2 - 200;
            wheel.play(4000, false);
            this.wheel = wheel;
            var group = new game.NeedleGroupUI();
            group.x = this.$stage.$stageWidth / 2;
            group.y = this.$stage.$stageHeight;
            this.needleGroup = group;
            this.addChild(group);
        };
        //发射针
        GameScene.prototype.shotNeedle = function (callback) {
            var needle = this.needleGroup.getElementAt(0);
            var globalPos = needle.parent.localToGlobal(needle.x, needle.y);
            this.needleGroup.removeChild(needle);
            this.addChild(needle);
            needle.x = globalPos.x;
            needle.y = globalPos.y;
            egret.Tween.get(needle, { loop: false }).to({ y: this.wheel.insertPos() }, 200).call(callback(needle));
        };
        return GameScene;
    }(eui.UILayer));
    game.GameScene = GameScene;
    __reflect(GameScene.prototype, "game.GameScene");
})(game || (game = {}));
//# sourceMappingURL=GameScene.js.map