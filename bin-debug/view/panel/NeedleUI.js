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
    var NeedleUI = (function (_super) {
        __extends(NeedleUI, _super);
        function NeedleUI() {
            var _this = _super.call(this) || this;
            _this.$radius = 20;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        Object.defineProperty(NeedleUI.prototype, "radius", {
            set: function (val) {
                this.$radius = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NeedleUI.prototype, "Num", {
            set: function (val) {
                this.numLabel.text = val;
            },
            enumerable: true,
            configurable: true
        });
        NeedleUI.prototype.onAddToStage = function (event) {
            var shp = new egret.Shape();
            shp.graphics.lineStyle(2, 0x00ff00);
            shp.graphics.beginFill(0xff0000, 1);
            shp.graphics.drawCircle(0, 0, this.$radius);
            shp.graphics.endFill();
            shp.$setAnchorOffsetX(this.$radius / 2);
            shp.$setAnchorOffsetY(this.$radius / 2);
            this.addChild(shp);
            this.numLabel = new egret.TextField();
            this.numLabel.text = "10";
            this.numLabel.x = -26;
            this.numLabel.y = -25;
            this.addChild(this.numLabel);
        };
        return NeedleUI;
    }(egret.DisplayObjectContainer));
    game.NeedleUI = NeedleUI;
    __reflect(NeedleUI.prototype, "game.NeedleUI");
})(game || (game = {}));
//# sourceMappingURL=NeedleUI.js.map