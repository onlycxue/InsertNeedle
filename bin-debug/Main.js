var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.appContainer = new game.AppContainer();
        this.addChild(this.appContainer);
        // this.createGameScene();
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        // let loadingUI  = new game.LoadingUI();
        // this.addChild(loadingUI);
        new eui.Theme("resource/default.thm.json", this.stage);
    };
    Main.prototype.createGameScene = function () {
        game.ApplicationFacade.getInstance().startUp(this.appContainer);
        // this.addChild(new game.LoadingUI()); 
    };
    Main.prototype.onConfigComplete = function () {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgresse, this);
        RES.loadGroup("preload");
        // console.log(RES.getRes("LevelConfigData_json")); 没执行loadGroup 是获取不到数据的。
    };
    Main.prototype.onResourceLoadComplete = function (event) {
        // console.log(">>>>>>组配置加载完成。");
        console.log(RES.getRes("LevelConfigData_json"));
        if (event.groupName == "loading") {
        }
        else if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgresse, this);
            this.createGameScene();
        }
    };
    Main.prototype.onResourceProgresse = function (event) {
        // console.log(event)
        if (event.groupName == "preload") {
        }
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map