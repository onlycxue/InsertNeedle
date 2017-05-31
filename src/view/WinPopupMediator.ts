module game{

    export class WinPopupMediator extends puremvc.Mediator implements puremvc.IMediator{

        public static NAME:string = "WinPopupMediator";

        constructor(viewComponent:any){
            super(EndPopupMediator.NAME,viewComponent);
            this.winPopup.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.nextBtnClick,this);
            this.winPopup.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shareBtnClick,this);
        }

        public listNotificationInterests():Array<any>{
            return [];
        }

        public handleNotification(notification:puremvc.INotification){


        }

        public nextBtnClick(event: egret.TouchEvent){
            // console.log(">>>>> nextBtn >>>>>> clicked");
            
            //这两句颠倒有问题。
            this.sendNotification(GameCommand.RESTART_GAME);
            this.winPopup.visible = false;

        }

        public shareBtnClick(event: egret.TouchEvent){
            console.log(">>>>> shareBtn >>>>>> clicked");

        }

        public get winPopup():game.WinPopup{
            return <game.WinPopup><any>(this.viewComponent);
        }     
    }


}