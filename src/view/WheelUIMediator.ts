module game{

    export class WheelUIMediator extends puremvc.Mediator {

        public static NAME:string = "WheelUIMediator";

        public constructor(view){
            super(WheelUIMediator.NAME,view);
        }

       listNotificationInterests():string[]{
            return [
                // GameProxy.GAME_START,
            ]
        }

        handleNotification(notification: puremvc.INotification ):void{

            let data = <any> notification.getBody()

            switch(notification.getName()){
                case GameProxy.GAME_START:
                    this.wheelUI.clearObjects();
                    this.wheelUI.initViewByLevel(<number><any>data);
                break;
            }
        }

        public get wheelUI():game.WheelUI{

            return <game.WheelUI><any> this.viewComponent;
        }

    }
}