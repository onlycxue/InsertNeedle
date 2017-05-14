class Main extends eui.UILayer {

    private appContainer:game.AppContainer;
    protected createChildren(): void {
        super.createChildren();
        
        this.appContainer = new game.AppContainer();
        this.addChild(this.appContainer);

        // this.createGameScene();
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
        RES.loadConfig("resource/default.res.json","resource/");

        let loadingUI  = new game.LoadingUI();
        this.addChild(loadingUI);

        new eui.Theme("resource/default.thm.json",this.stage);
    }
    
    private createGameScene():void{

        game.ApplicationFacade.getInstance().startUp(this.appContainer)

        // this.addChild(new game.LoadingUI()); 


    }
    private onConfigComplete():void{

        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgresse,this);
        RES.loadGroup("preload");
        // console.log(RES.getRes("LevelConfigData_json")); 没执行loadGroup 是获取不到数据的。
    }
    private onResourceLoadComplete(event:RES.ResourceEvent):void{
        
        // console.log(">>>>>>组配置加载完成。");
        // console.log(RES.getRes("LevelConfigData_json"));
        if(event.groupName == "loading"){
            
        }
        else if(event.groupName == "preload"){
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgresse,this);
            this.createGameScene();
        }
    }

    private onResourceProgresse(event:RES.ResourceEvent):void{

        // console.log(event)
        if(event.groupName == "preload"){

        }
    }

}
