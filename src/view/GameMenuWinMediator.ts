module game {

    export class GameMenuWinMediator extends puremvc.Mediator {

        public static NAME:string = "GameMenuWinMediator";
        constructor(viewComponent:any){
            super(GameMenuWinMediator.NAME,viewComponent)

            this.gameMenuWin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.buttonClick,this);
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
            console.log(">>>>>>>> start game btn 按下 >>>>")
        }
    }
}