//旋转的轮子
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
    var WheelUI = (function (_super) {
        __extends(WheelUI, _super);
        function WheelUI() {
            var _this = _super.call(this) || this;
            _this.$radius = 100;
            _this.$maxRadius = 200;
            _this.init();
            return _this;
        }
        //创建圆盘
        WheelUI.prototype.init = function () {
            // this.$graphics.lineStyle(10,0x00ff00);
            this.$graphics.beginFill(0x000000, 1);
            this.$graphics.drawCircle(0, 0, this.$radius);
            this.$graphics.endFill();
        };
        WheelUI.prototype.addElementByAngles = function (angles) {
            var element = new game.NeedleUI();
            element.x = this.$maxRadius * Math.cos(angles);
            element.y = this.$maxRadius * Math.sin(angles);
            this.addChild(element);
            this.drawLine(0, 0, element.x, element.y);
        };
        //插入
        WheelUI.prototype.insertElement = function (view) {
            var point = this.globalToLocal(view.x, view.y);
            var parent = view.$parent;
            if (parent) {
                parent.removeChild(view);
            }
            this.addChild(view);
            view.x = point.x;
            view.y = point.y;
            this.drawLine(0, 0, point.x, point.y);
        };
        WheelUI.prototype.drawLine = function (x, y, toX, toY) {
            var line = new egret.Shape();
            line.graphics.lineStyle(4, 0x000000);
            line.graphics.moveTo(x, y);
            line.graphics.lineTo(toX, toY);
            line.graphics.endFill();
            this.addChild(line);
        };
        //开始旋转
        WheelUI.prototype.play = function (time, isReverse) {
            this.twAction = egret.Tween.get(this, { loop: true });
            if (isReverse) {
                this.twAction.to({ rotation: -360 }, time);
            }
            else {
                this.twAction.to({ rotation: 360 }, time);
            }
        };
        //停止旋转
        WheelUI.prototype.stop = function () {
            this.twAction.pause();
        };
        return WheelUI;
    }(egret.Sprite));
    game.WheelUI = WheelUI;
    __reflect(WheelUI.prototype, "game.WheelUI");
})(game || (game = {}));
//# sourceMappingURL=WheelUI.js.map