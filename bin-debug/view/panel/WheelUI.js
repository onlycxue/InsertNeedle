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
            this.$graphics.lineStyle(10, 0x00ff00);
            this.$graphics.beginFill(0xff00000, 1);
            this.$graphics.drawCircle(0, 0, this.$radius);
            // this.$graphics.drawRect(0,0,this.$radius,this.$radius);
            this.$graphics.endFill();
            // this.$setAnchorOffsetX(this.$radius/2);
            // this.$setAnchorOffsetY(this.$radius/2);
        };
        // public set radius(val:number){
        //     this.$radius = val;
        // }
        // public get radius(){
        //     return this.$radius;
        // }
        // public set maxRadius(maxR:number){
        //     this.$maxRadius = maxR;
        // }
        // public get maxRadius(){
        //     return this.$maxRadius;
        // }
        WheelUI.prototype.addElementByAngles = function (angles) {
            var element = new game.NeedleUI();
            element.x = this.$maxRadius * Math.cos(angles);
            element.y = this.$maxRadius * Math.sin(angles);
            this.addChild(element);
        };
        //插入
        WheelUI.prototype.insertElement = function (view) {
            // var globalPoint = view.localToGlobal(view.x,view.y)
            var point = this.globalToLocal(view.x, view.y);
            // var point = this.globalToLocal(globalPoint.x,globalPoint.y);
            var parent = view.$parent;
            if (parent) {
                parent.removeChild(view);
            }
            this.addChild(view);
            view.x = point.x;
            view.y = point.y;
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