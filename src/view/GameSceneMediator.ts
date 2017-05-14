module game{

    export class GameSceneMediator extends puremvc.Mediator implements puremvc.IMediator{


        public static NAME:string = "GameSceneMediator";
        constructor(viewCompentend:any){
            super(GameSceneMediator.NAME,viewCompentend);
            

        }

        public listNotificationInterests():Array<any>{
            return [];
        }

        public  handleNotification(notification: puremvc.INotification):void {

            
        }

    }




}