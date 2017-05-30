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
            // this.initByNum(6);
            game.ApplicationFacade.getInstance().registerMediator(new game.NeedleGroupUIMediator(_this));
            return _this;
        }
        NeedleGroupUI.prototype.initViewByLevel = function (level) {
            var data = RES.getRes("LevelConfigData_json");
            var num = data[level].reqNum;
            for (var i = num; i >= 1; i--) {
                var item = game.ObjectPool.getPool("game.NeedleUI").borrowObject();
                this.addChild(item);
                item.setText(i.toString());
                item.y = (num - i * (30 + 10));
                item.x = 0;
            }
            if (num > NeedleGroupUI.showNum) {
                this.y = this.y + (num - NeedleGroupUI.showNum) * (30 + 10);
            }
            console.log(this.numElements);
        };
        //向前移动一下
        NeedleGroupUI.prototype.move = function () {
            egret.Tween.get(this, { loop: false }).to({ y: this.y - (30 + 10) }, 200);
        };
        NeedleGroupUI.prototype.clearObjects = function () {
            var needle;
            var num = this.numChildren;
            for (var i = num - 1; i >= 0; i--) {
                needle = this.removeChildAt(i);
                game.ObjectPool.getPool("game.NeedleUI").returnObject(needle);
            }
        };
        return NeedleGroupUI;
    }(eui.Group));
    NeedleGroupUI.showNum = 5;
    game.NeedleGroupUI = NeedleGroupUI;
    __reflect(NeedleGroupUI.prototype, "game.NeedleGroupUI");
})(game || (game = {}));
//# sourceMappingURL=NeedleGroupUI.js.map