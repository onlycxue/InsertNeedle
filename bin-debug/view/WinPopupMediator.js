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
    var WinPopupMediator = (function (_super) {
        __extends(WinPopupMediator, _super);
        function WinPopupMediator(viewComponent) {
            var _this = _super.call(this, game.EndPopupMediator.NAME, viewComponent) || this;
            _this.winPopup.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.nextBtnClick, _this);
            _this.winPopup.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.shareBtnClick, _this);
            return _this;
        }
        WinPopupMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        WinPopupMediator.prototype.handleNotification = function (notification) {
        };
        WinPopupMediator.prototype.nextBtnClick = function (event) {
            // console.log(">>>>> nextBtn >>>>>> clicked");
            //这两句颠倒有问题。
            this.sendNotification(game.GameCommand.RESTART_GAME);
            this.winPopup.visible = false;
        };
        WinPopupMediator.prototype.shareBtnClick = function (event) {
            console.log(">>>>> shareBtn >>>>>> clicked");
        };
        Object.defineProperty(WinPopupMediator.prototype, "winPopup", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        return WinPopupMediator;
    }(puremvc.Mediator));
    WinPopupMediator.NAME = "WinPopupMediator";
    game.WinPopupMediator = WinPopupMediator;
    __reflect(WinPopupMediator.prototype, "game.WinPopupMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=WinPopupMediator.js.map