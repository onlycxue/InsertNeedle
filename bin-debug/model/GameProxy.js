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
    var GameProxy = (function (_super) {
        __extends(GameProxy, _super);
        function GameProxy() {
            return _super.call(this, GameProxy.NAME) || this;
        }
        GameProxy.prototype.startGame = function () {
            // let level = game.CommonData.level;
            this.sendNotification(GameProxy.GAME_START, game.CommonData.level);
            game.CommonData.isRunning = true;
        };
        GameProxy.prototype.restartGame = function () {
            this.sendNotification(GameProxy.GAME_RESTART, game.CommonData.level);
            game.CommonData.isRunning = true;
        };
        GameProxy.prototype.setResult = function (b) {
            if (b) {
                game.CommonData.level = game.CommonData.level + 1;
            }
            else {
                game.CommonData.level = 0;
            }
            game.CommonData.isRunning = false;
        };
        return GameProxy;
    }(puremvc.Proxy));
    GameProxy.NAME = "GameProxy";
    GameProxy.GAME_START = "game_start";
    GameProxy.GAME_RESTART = "game_restart";
    game.GameProxy = GameProxy;
    __reflect(GameProxy.prototype, "game.GameProxy", ["puremvc.IProxy", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=GameProxy.js.map