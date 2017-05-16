var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var CommonData = (function () {
        function CommonData() {
        }
        return CommonData;
    }());
    CommonData.level = 0;
    CommonData.isRunning = false;
    game.CommonData = CommonData;
    __reflect(CommonData.prototype, "game.CommonData");
})(game || (game = {}));
//# sourceMappingURL=CommonData.js.map