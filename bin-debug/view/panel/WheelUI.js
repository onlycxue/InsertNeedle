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
            _this.$maxRadius = 250;
            _this.needles = [];
            _this.lines = [];
            _this.init();
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStageComplete, _this);
            return _this;
        }
        WheelUI.prototype.addToStageComplete = function () {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStageComplete, this);
            game.ApplicationFacade.getInstance().registerMediator(new game.WheelUIMediator(this));
        };
        //创建圆盘
        WheelUI.prototype.init = function () {
            // this.$graphics.lineStyle(10,0x00ff00);
            this.$graphics.beginFill(0x000000, 1);
            this.$graphics.drawCircle(0, 0, this.$radius);
            this.$graphics.endFill();
        };
        WheelUI.prototype.initViewByLevel = function (level) {
            var anglesList = RES.getRes("LevelConfigData_json")[level].init;
            for (var _i = 0, anglesList_1 = anglesList; _i < anglesList_1.length; _i++) {
                var angles = anglesList_1[_i];
                this.addElementByAngles(angles);
            }
        };
        WheelUI.prototype.addElementByAngles = function (angles) {
            // let element = new game.NeedleUI("");
            var element = game.ObjectPool.getPool('game.NeedleUI').borrowObject();
            element.x = this.$maxRadius * Math.cos(2 * Math.PI / 360 * angles);
            element.y = this.$maxRadius * Math.sin(2 * Math.PI / 360 * angles);
            this.addChild(element);
            this.drawLine(0, 0, element.x, element.y);
            this.needles.push(element);
        };
        //插入
        WheelUI.prototype.insertElement = function (view) {
            var point = this.globalToLocal(view.x, view.y);
            var parent = view.$parent;
            if (parent) {
                parent.removeChild(view);
            }
            view.setText("");
            this.addChild(view);
            view.x = point.x;
            view.y = point.y;
            this.drawLine(0, 0, point.x, point.y);
            this.needles.push(view);
        };
        WheelUI.prototype.drawLine = function (x, y, toX, toY) {
            // let line:egret.Shape = new egret.Shape();
            var line = game.ObjectPool.getPool('egret.Shape').borrowObject();
            line.graphics.lineStyle(4, 0x000000);
            line.graphics.moveTo(x, y);
            line.graphics.lineTo(toX, toY);
            line.graphics.endFill();
            this.addChild(line);
            this.lines.push(line);
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
            this.twAction.setPaused(true);
            this.twAction.pause();
        };
        WheelUI.prototype.insertPos = function () {
            return this.y + this.$maxRadius;
        };
        Object.defineProperty(WheelUI.prototype, "needleList", {
            get: function () {
                return this.needles;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 清除所有
         */
        WheelUI.prototype.clearObjects = function () {
            //清除针
            for (var _i = 0, _a = this.needles; _i < _a.length; _i++) {
                var v = _a[_i];
                this.removeChild(v);
                game.ObjectPool.getPool("game.NeedleUI").returnObject(v);
            }
            //清除线
            for (var _b = 0, _c = this.lines; _b < _c.length; _b++) {
                var v = _c[_b];
                this.removeChild(v);
                game.ObjectPool.getPool("egret.Shape").returnObject(v);
            }
        };
        return WheelUI;
    }(egret.Sprite));
    game.WheelUI = WheelUI;
    __reflect(WheelUI.prototype, "game.WheelUI");
})(game || (game = {}));
//# sourceMappingURL=WheelUI.js.map