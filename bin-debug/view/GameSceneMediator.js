var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game;
(function (game) {
    var GameSceneMediator = (function (_super) {
        __extends(GameSceneMediator, _super);
        function GameSceneMediator(viewCompentend) {
            var _this = _super.call(this, GameSceneMediator.NAME, viewCompentend) || this;
            _this.gameScene.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.touchEventHandle, _this);
            return _this;
        }
        //触摸事件响应
        GameSceneMediator.prototype.touchEventHandle = function (event) {
            this.gameScene.shotNeedle(this.checkCollision.bind(this));
        };
        //检测合法性
        GameSceneMediator.prototype.checkCollision = function (data) {
            var needle = data;
            var nPoint = this.gameScene.localToGlobal(needle.x, needle.y);
            //判断是否发生碰撞
            for (var _i = 0, _a = this.gameScene.wheel.needleList; _i < _a.length; _i++) {
                var item = _a[_i];
                var iPoint = this.gameScene.wheel.localToGlobal(item.x, item.y);
                if (egret.Point.distance(nPoint, iPoint) <= 60) {
                    console.log(">>>>> 发生碰撞 <<<<<<<<");
                    this.gameScene.wheel.stop();
                    this.gameScene.redShap.visible = true;
                    return;
                }
            }
            this.gameScene.wheel.insertElement(needle);
            this.gameScene.needleGroup.move();
        };
        GameSceneMediator.prototype.listNotificationInterests = function () {
            return [
                game.GameProxy.GAME_START,
            ];
        };
        GameSceneMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case game.GameProxy.GAME_START: {
                    break;
                }
            }
        };
        Object.defineProperty(GameSceneMediator.prototype, "gameScene", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        return GameSceneMediator;
    }(puremvc.Mediator));
    GameSceneMediator.NAME = "GameSceneMediator";
    game.GameSceneMediator = GameSceneMediator;
    __reflect(GameSceneMediator.prototype, "game.GameSceneMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=GameSceneMediator.js.map