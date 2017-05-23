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
    var SceneCommand = (function (_super) {
        __extends(SceneCommand, _super);
        function SceneCommand() {
            return _super.call(this) || this;
        }
        /**
         *  注册消息
         */
        SceneCommand.prototype.register = function () {
            game.ApplicationFacade.getInstance().registerCommand(SceneCommand.SHOW_WIN, SceneCommand);
            game.ApplicationFacade.getInstance().registerCommand(SceneCommand.SHOW_END, SceneCommand);
        };
        SceneCommand.prototype.execute = function (notification) {
            var data = notification.getBody();
            var appMediator = game.ApplicationFacade.getInstance().retrieveMediator(game.AppContainerMediator.NAME);
            switch (notification.getName()) {
                case SceneCommand.SHOW_WIN: {
                    appMediator.appContainer.showWinPopup();
                    break;
                }
                case SceneCommand.SHOW_END: {
                    setTimeout(function () {
                        appMediator.appContainer.showEndPopup();
                    }, this, 300);
                    break;
                }
            }
        };
        return SceneCommand;
    }(puremvc.SimpleCommand));
    SceneCommand.NAME = "SceneCommand";
    /**
     *  显示胜利界面
     */
    SceneCommand.SHOW_WIN = "scene_win";
    /**
     * 显示结束窗口
     */
    SceneCommand.SHOW_END = "scene_end";
    game.SceneCommand = SceneCommand;
    __reflect(SceneCommand.prototype, "game.SceneCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=SceneCommand.js.map