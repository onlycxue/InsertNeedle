module game{

    export class NeedleGroupUIMediator extends puremvc.Mediator {

        public static NAME:string = "NeedleGroupUIMediator";

        public constructor(view){
            super(NeedleGroupUIMediator.NAME,view);
        }

        listNotificationInterests():string[]{
            return [
               GameProxy.GAME_START
            ]
        }

        handleNotification(notification: puremvc.INotification ):void{

            var data:any = notification.getBody();

            switch(notification.getName()){

                case GameProxy.GAME_START:
                        this.needleGroupUI.initViewByLevel(<number><any>data);
                    break

            }
        }

        get needleGroupUI():game.NeedleGroupUI{

            return <game.NeedleGroupUI><any> this.viewComponent;
        }


    }
}