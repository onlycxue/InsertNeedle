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
    var NeedleGroupUI = (function (_super) {
        __extends(NeedleGroupUI, _super);
        function NeedleGroupUI() {
            return _super.call(this) || this;
        }
        return NeedleGroupUI;
    }(eui.Group));
    game.NeedleGroupUI = NeedleGroupUI;
    __reflect(NeedleGroupUI.prototype, "game.NeedleGroupUI");
})(game || (game = {}));
//# sourceMappingURL=NeedleGroupUI.js.map