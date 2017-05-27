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
    var NeedleGroupUIMediator = (function (_super) {
        __extends(NeedleGroupUIMediator, _super);
        function NeedleGroupUIMediator(view) {
            return _super.call(this, NeedleGroupUIMediator.NAME, view) || this;
        }
        NeedleGroupUIMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        NeedleGroupUIMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case game.GameProxy.GAME_START:
                    this.needleGroupUI.clearObjects();
                    this.needleGroupUI.initViewByLevel(data);
                    break;
            }
        };
        Object.defineProperty(NeedleGroupUIMediator.prototype, "needleGroupUI", {
            get: function () {
                return this.viewComponent;
            },
            enumerable: true,
            configurable: true
        });
        return NeedleGroupUIMediator;
    }(puremvc.Mediator));
    NeedleGroupUIMediator.NAME = "NeedleGroupUIMediator";
    game.NeedleGroupUIMediator = NeedleGroupUIMediator;
    __reflect(NeedleGroupUIMediator.prototype, "game.NeedleGroupUIMediator");
})(game || (game = {}));
//# sourceMappingURL=NeedleGroupUIMediator.js.map