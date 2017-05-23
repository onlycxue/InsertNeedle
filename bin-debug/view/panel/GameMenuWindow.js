// TypeScript file
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
    var GameMenuWindow = (function (_super) {
        __extends(GameMenuWindow, _super);
        function GameMenuWindow() {
            var _this = _super.call(this) || this;
            _this.skinName = "src/skin/GameMenuUISkin.exml";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        GameMenuWindow.prototype.createCompleteEvent = function (event) {
            console.log(">>>>>> game . createCompleteEvent ");
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            game.ApplicationFacade.getInstance().registerMediator(new game.GameMenuWinMediator(this));
        };
        GameMenuWindow.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return GameMenuWindow;
    }(eui.Component));
    game.GameMenuWindow = GameMenuWindow;
    __reflect(GameMenuWindow.prototype, "game.GameMenuWindow");
})(game || (game = {}));
//# sourceMappingURL=GameMenuWindow.js.map