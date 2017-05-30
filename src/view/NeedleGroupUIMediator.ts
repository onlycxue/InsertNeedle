module game{

    export class NeedleGroupUIMediator extends puremvc.Mediator {

        public static NAME:string = "NeedleGroupUIMediator";

        public constructor(view){
            super(NeedleGroupUIMediator.NAME,view);
        }

        listNotificationInterests():string[]{
            return [
               GameProxy.GAME_START,
               GameProxy.GAME_RESTART
            ]
        }

        handleNotification(notification: puremvc.INotification ):void{

            var data:any = notification.getBody();

            switch(notification.getName()){

                case GameProxy.GAME_START:
                        this.needleGroupUI.initViewByLevel(<number><any>data);
                    break
                case GameProxy.GAME_RESTART:
                        this.needleGroupUI.clearObjects();
                        this.needleGroupUI.y = this.needleGroupUI.parent.$stage.$stageHeight;
                        this.needleGroupUI.initViewByLevel(<number><any>data);
                    break
            }
        }

        get needleGroupUI():game.NeedleGroupUI{

            return <game.NeedleGroupUI><any> this.viewComponent;
        }


    }
}