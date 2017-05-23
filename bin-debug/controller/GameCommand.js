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
    var GameCommand = (function (_super) {
        __extends(GameCommand, _super);
        function GameCommand() {
            return _super.call(this) || this;
        }
        GameCommand.prototype.register = function () {
            game.ApplicationFacade.getInstance().registerCommand(GameCommand.START_GAME, GameCommand);
            game.ApplicationFacade.getInstance().registerCommand(GameCommand.OVER_GAME, GameCommand);
            game.ApplicationFacade.getInstance().registerCommand(GameCommand.WIN_GAME, GameCommand);
        };
        GameCommand.prototype.execute = function (notification) {
            var gameProxy = (game.ApplicationFacade.getInstance().retrieveProxy(game.GameProxy.NAME));
            switch (notification.getName()) {
                case GameCommand.START_GAME: {
                    gameProxy.startGame();
                    break;
                }
                case GameCommand.OVER_GAME: {
                    gameProxy.setResult(false);
                    break;
                }
                case GameCommand.WIN_GAME: {
                    gameProxy.setResult(true);
                    break;
                }
            }
        };
        return GameCommand;
    }(puremvc.SimpleCommand));
    GameCommand.START_GAME = "start_game";
    GameCommand.OVER_GAME = "over_game";
    GameCommand.WIN_GAME = "win_game";
    game.GameCommand = GameCommand;
    __reflect(GameCommand.prototype, "game.GameCommand");
})(game || (game = {}));
//# sourceMappingURL=GameCommand.js.map