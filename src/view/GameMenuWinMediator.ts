module game {

    export class GameMenuWinMediator extends puremvc.Mediator implements puremvc.IMediator {

        public static NAME:string = "GameMenuWinMediator";
        public constructor(viewComponent:any){
            super(GameMenuWinMediator.NAME,viewComponent)
            this.gameMenuWin.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.buttonClick,this);
        }
        //要处理的监听事件
        public listNotificationInterests():Array<any>{
            return [];
        }

        public  handleNotification(notification: puremvc.INotification):void {

            
        }

        public get gameMenuWin():game.GameMenuWindow{
            return <game.GameMenuWindow> this.viewComponent;
        }

        private buttonClick(event: egret.TouchEvent):void {
          let mediator: puremvc.IMediator = ApplicationFacade.getInstance().retrieveMediator(game.AppContainerMediator.NAME);
          let appContainerMediator = <game.AppContainerMediator><any> mediator;
          appContainerMediator.appContainer.removeChild(this.gameMenuWin);

          this.sendNotification(game.GameCommand.START_GAME);
        }
    }
}