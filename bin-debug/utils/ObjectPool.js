var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var ObjectPool = (function () {
        function ObjectPool(className) {
            this.className = className;
            this.list = [];
        }
        /**
         * 获取对象
         */
        ObjectPool.prototype.borrowObject = function () {
            if (this.list.length > 0) {
                return this.list.shift();
            }
            var clazz = egret.getDefinitionByName(this.className);
            return new clazz();
        };
        /**
         * 回收对象
         */
        ObjectPool.prototype.returnObject = function (value) {
            this.list.push(value);
        };
        ObjectPool.getPool = function (className) {
            if (!ObjectPool.pool[className]) {
                ObjectPool.pool[className] = new ObjectPool(className);
            }
            return ObjectPool.pool[className];
        };
        return ObjectPool;
    }());
    ObjectPool.pool = {};
    game.ObjectPool = ObjectPool;
    __reflect(ObjectPool.prototype, "game.ObjectPool");
})(game || (game = {}));
//# sourceMappingURL=ObjectPool.js.map