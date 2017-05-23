
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/tween/tween.js",
	"modules/puremvc/bin/puremvc/puremvc.js",
	"bin-debug/ApplicationFacade.js",
	"bin-debug/view/GameSceneMediator.js",
	"bin-debug/controller/GameCommand.js",
	"bin-debug/controller/SceneCommand.js",
	"bin-debug/controller/StartupCommand.js",
	"bin-debug/Main.js",
	"bin-debug/model/common/CommonData.js",
	"bin-debug/model/GameProxy.js",
	"bin-debug/view/AppContainerMediator.js",
	"bin-debug/view/EndPopupMediator.js",
	"bin-debug/view/GameMenuWinMediator.js",
	"bin-debug/app/AppContainer.js",
	"bin-debug/view/NeedleGroupUIMediator.js",
	"bin-debug/view/panel/EndPopup.js",
	"bin-debug/view/panel/GameMenuWindow.js",
	"bin-debug/view/panel/GameScene.js",
	"bin-debug/view/panel/LoadingUI.js",
	"bin-debug/view/panel/NeedleGroupUI.js",
	"bin-debug/view/panel/NeedleUI.js",
	"bin-debug/view/panel/WheelUI.js",
	"bin-debug/view/panel/WinPopup.js",
	"bin-debug/view/WheelUIMediator.js",
	"bin-debug/view/WinPopupMediator.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 640,
		contentHeight: 1136,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};