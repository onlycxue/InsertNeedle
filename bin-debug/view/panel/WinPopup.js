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
    var WinPopup = (function (_super) {
        __extends(WinPopup, _super);
        function WinPopup() {
            var _this = _super.call(this) || this;
            _this.skinName = "src/skin/WinUISkin.exml";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createComplete, _this);
            return _this;
        }
        WinPopup.prototype.createComplete = function (event) {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createComplete, this);
            game.ApplicationFacade.getInstance().registerMediator(new game.WinPopupMediator(this));
        };
        WinPopup.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return WinPopup;
    }(eui.Component));
    game.WinPopup = WinPopup;
    __reflect(WinPopup.prototype, "game.WinPopup");
})(game || (game = {}));
//# sourceMappingURL=WinPopup.js.map