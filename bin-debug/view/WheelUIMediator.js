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
    var WheelUIMediator = (function (_super) {
        __extends(WheelUIMediator, _super);
        function WheelUIMediator(view) {
            return _super.call(this, WheelUIMediator.NAME, view) || this;
        }
        WheelUIMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        WheelUIMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case game.GameProxy.GAME_START:
                    this.wheelUI.clearObjects();
                    this.wheelUI.initViewByLevel(data);
                    break;
            }
        };
        Object.defineProperty(WheelUIMediator.prototype, "wheelUI", {
            get: function () {
                return this.viewComponent;
            },
            enumerable: true,
            configurable: true
        });
        return WheelUIMediator;
    }(puremvc.Mediator));
    WheelUIMediator.NAME = "WheelUIMediator";
    game.WheelUIMediator = WheelUIMediator;
    __reflect(WheelUIMediator.prototype, "game.WheelUIMediator");
})(game || (game = {}));
//# sourceMappingURL=WheelUIMediator.js.map