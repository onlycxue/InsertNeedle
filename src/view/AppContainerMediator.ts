//用来监听appContainerMediator的事件处理
module game{

    export class AppContainerMediator extends puremvc.Mediator implements puremvc.IMediator{


        public static NAME:string = "ApplicationMediator";
        constructor(viewComponent:any ){
            super(AppContainerMediator.NAME,viewComponent);
        }
        //要处理的监听事件
        public listNotificationInterests():Array<any>{
            return [game.GameCommand.START_GAME];
        }

        public  handleNotification(notification: puremvc.INotification):void {

            switch(notification.getName()){

                case game.GameCommand.START_GAME:
                    this.appContainer.showGameScene();
                    break;
            }
            
        }
        public get appContainer():game.AppContainer{

            return <game.AppContainer><any> this.viewComponent;
        }

    }
}