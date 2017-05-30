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
    var EndPopupMediator = (function (_super) {
        __extends(EndPopupMediator, _super);
        function EndPopupMediator(viewComponent) {
            var _this = _super.call(this, EndPopupMediator.NAME, viewComponent) || this;
            _this.endPopup.restartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.restartBtnClick, _this);
            _this.endPopup.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.shareBtnClick, _this);
            return _this;
            // console.log(">>>>>>>>>>>>>>>>>>")
            // console.log(this.endPopup);
            // console.log(this.endPopup.restartBtn);
        }
        EndPopupMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        EndPopupMediator.prototype.handleNotification = function (notification) {
        };
        EndPopupMediator.prototype.restartBtnClick = function (event) {
            console.log(">>>>> restartBtn >>>>>> clicked");
            var mediator = game.ApplicationFacade.getInstance().retrieveMediator(game.AppContainerMediator.NAME);
            var appContainerMediator = mediator;
            // appContainerMediator.appContainer.removeChild(this.endPopup);
            this.sendNotification(game.GameCommand.RESTART_GAME);
            this.endPopup.visible = false;
        };
        EndPopupMediator.prototype.shareBtnClick = function (event) {
            console.log(">>>>> shareBtn >>>>>> clicked");
        };
        Object.defineProperty(EndPopupMediator.prototype, "endPopup", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        return EndPopupMediator;
    }(puremvc.Mediator));
    EndPopupMediator.NAME = "EndPopupMediator";
    game.EndPopupMediator = EndPopupMediator;
    __reflect(EndPopupMediator.prototype, "game.EndPopupMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=EndPopupMediator.js.map