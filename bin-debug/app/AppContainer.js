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
    var AppContainer = (function (_super) {
        __extends(AppContainer, _super);
        function AppContainer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AppContainer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            // this.showGameScene();
            this.showGameMenuWin();
        };
        AppContainer.prototype.showGameScene = function () {
            this.gameScene = new game.GameScene();
            this.addChild(this.gameScene);
        };
        AppContainer.prototype.showGameMenuWin = function () {
            var gameMenuWin = new game.GameMenuWindow();
            this.addChild(gameMenuWin);
        };
        return AppContainer;
    }(eui.UILayer));
    game.AppContainer = AppContainer;
    __reflect(AppContainer.prototype, "game.AppContainer");
})(game || (game = {}));
//# sourceMappingURL=AppContainer.js.map