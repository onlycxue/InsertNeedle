//用来监听appContainerMediator的事件处理
module game{

    export class AppContainerMediator extends puremvc.Mediator implements puremvc.IMediator{


        public static NAME:string = "ApplicationMediator";
        constructor(viewComponent:any ){
            super(AppContainerMediator.NAME,viewComponent);
        }
        //要处理的监听事件
        public listNotificationInterests():Array<any>{
            return [];
        }

        public  handleNotification(notification: puremvc.INotification):void {

            
        }

    }
}