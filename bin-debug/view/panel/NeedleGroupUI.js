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
            var _this = _super.call(this) || this;
            _this.initByNum(6);
            return _this;
            // this.verticalCenter = 0;
        }
        NeedleGroupUI.prototype.initByNum = function (num) {
            this.setContentSize(30, num * (30 + 10));
            for (var i = num; i >= 1; i--) {
                var needle = new game.NeedleUI(i.toString());
                needle.y = (num - i * (30 + 10));
                this.addChild(needle);
            }
        };
        return NeedleGroupUI;
    }(eui.Group));
    game.NeedleGroupUI = NeedleGroupUI;
    __reflect(NeedleGroupUI.prototype, "game.NeedleGroupUI");
})(game || (game = {}));
//# sourceMappingURL=NeedleGroupUI.js.map