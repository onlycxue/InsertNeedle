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
    var StartupCommand = (function (_super) {
        __extends(StartupCommand, _super);
        function StartupCommand() {
            return _super.call(this) || this;
        }
        StartupCommand.prototype.execute = function (notification) {
            console.log(">>>>>> here is StartupCommand");
            var main = notification.getBody();
            game.ApplicationFacade.getInstance().registerMediator(new game.AppContainerMediator(main));
        };
        return StartupCommand;
    }(puremvc.SimpleCommand));
    game.StartupCommand = StartupCommand;
    __reflect(StartupCommand.prototype, "game.StartupCommand");
})(game || (game = {}));
//# sourceMappingURL=StartupCommand.js.map