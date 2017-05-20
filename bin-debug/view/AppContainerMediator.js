var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//用来监听appContainerMediator的事件处理
var game;
(function (game) {
    var AppContainerMediator = (function (_super) {
        __extends(AppContainerMediator, _super);
        function AppContainerMediator(viewComponent) {
            return _super.call(this, AppContainerMediator.NAME, viewComponent) || this;
        }
        //要处理的监听事件
        AppContainerMediator.prototype.listNotificationInterests = function () {
            return [game.GameCommand.START_GAME];
        };
        AppContainerMediator.prototype.handleNotification = function (notification) {
            switch (notification.getName()) {
                case game.GameCommand.START_GAME:
                    this.appContainer.showGameScene();
                    break;
            }
        };
        Object.defineProperty(AppContainerMediator.prototype, "appContainer", {
            get: function () {
                return this.viewComponent;
            },
            enumerable: true,
            configurable: true
        });
        return AppContainerMediator;
    }(puremvc.Mediator));
    AppContainerMediator.NAME = "ApplicationMediator";
    game.AppContainerMediator = AppContainerMediator;
    __reflect(AppContainerMediator.prototype, "game.AppContainerMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=AppContainerMediator.js.map