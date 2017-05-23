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
    var EndPopup = (function (_super) {
        __extends(EndPopup, _super);
        function EndPopup() {
            var _this = _super.call(this) || this;
            _this.skinName = "src/skin/EndUISkin.exml";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createComplete, _this);
            return _this;
        }
        EndPopup.prototype.createComplete = function (event) {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createComplete, this);
            game.ApplicationFacade.getInstance().registerMediator(new game.EndPopupMediator(this));
        };
        EndPopup.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return EndPopup;
    }(eui.Component));
    game.EndPopup = EndPopup;
    __reflect(EndPopup.prototype, "game.EndPopup");
})(game || (game = {}));
//# sourceMappingURL=EndPopup.js.map