module game{

    export class EndPopupMediator extends puremvc.Mediator implements puremvc.IMediator{

        public static NAME:string = "EndPopupMediator";

        constructor(viewComponent:any){
            super(EndPopupMediator.NAME,viewComponent);
            this.endPopup.restartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.restartBtnClick,this);
            this.endPopup.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shareBtnClick,this);
            // console.log(">>>>>>>>>>>>>>>>>>")
            // console.log(this.endPopup);
            // console.log(this.endPopup.restartBtn);

        }

        public listNotificationInterests():Array<any>{
            return [];
        }

        public handleNotification(notification:puremvc.INotification){


        }

        public restartBtnClick(event: egret.TouchEvent){
            // console.log(">>>>> restartBtn >>>>>> clicked");
            this.sendNotification(GameCommand.START_GAME);
        }

        public shareBtnClick(event: egret.TouchEvent){
            console.log(">>>>> shareBtn >>>>>> clicked");

        }

        public get endPopup():game.EndPopup{
            return <game.EndPopup><any>(this.viewComponent);
        }     
    }


}