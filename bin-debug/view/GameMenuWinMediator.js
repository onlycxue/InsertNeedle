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
    var GameMenuWinMediator = (function (_super) {
        __extends(GameMenuWinMediator, _super);
        function GameMenuWinMediator(viewComponent) {
            var _this = _super.call(this, GameMenuWinMediator.NAME, viewComponent) || this;
            _this.gameMenuWin.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.buttonClick, _this);
            return _this;
        }
        //要处理的监听事件
        GameMenuWinMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        GameMenuWinMediator.prototype.handleNotification = function (notification) {
        };
        Object.defineProperty(GameMenuWinMediator.prototype, "gameMenuWin", {
            get: function () {
                return this.viewComponent;
            },
            enumerable: true,
            configurable: true
        });
        GameMenuWinMediator.prototype.buttonClick = function (event) {
            console.log(">>>>>>>> start game btn 按下 >>>>");
        };
        return GameMenuWinMediator;
    }(puremvc.Mediator));
    GameMenuWinMediator.NAME = "GameMenuWinMediator";
    game.GameMenuWinMediator = GameMenuWinMediator;
    __reflect(GameMenuWinMediator.prototype, "game.GameMenuWinMediator");
})(game || (game = {}));
//# sourceMappingURL=GameMenuWinMediator.js.map