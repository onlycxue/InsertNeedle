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
        function NeedleUI(text) {
            var _this = _super.call(this) || this;
            _this.$radius = 20;
            _this.text = "";
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            _this.text = text;
            return _this;
        }
        Object.defineProperty(NeedleUI.prototype, "radius", {
            set: function (val) {
                this.$radius = val;
            },
            enumerable: true,
            configurable: true
        });
        NeedleUI.prototype.onAddToStage = function (event) {
            var shp = new egret.Shape();
            //  shp.graphics.lineStyle(2,0x00ff00);
            shp.graphics.beginFill(0x000000, 1);
            shp.graphics.drawCircle(0, 0, this.$radius);
            shp.graphics.endFill();
            this.addChild(shp);
            this.numLabel = new egret.TextField();
            this.numLabel.text = this.text;
            this.numLabel.x = -this.numLabel.width / 2;
            this.numLabel.y = -this.numLabel.height / 2;
            this.addChild(this.numLabel);
        };
        return NeedleUI;
    }(egret.DisplayObjectContainer));
    game.NeedleUI = NeedleUI;
    __reflect(NeedleUI.prototype, "game.NeedleUI");
})(game || (game = {}));
//# sourceMappingURL=NeedleUI.js.map