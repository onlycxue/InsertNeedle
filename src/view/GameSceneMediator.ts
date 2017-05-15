module game{

    export class GameSceneMediator extends puremvc.Mediator implements puremvc.IMediator{


        public static NAME:string = "GameSceneMediator";
        constructor(viewCompentend:any){
            super(GameSceneMediator.NAME,viewCompentend);
            
            this.gameScene.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchEventHandle,this);

        }

        public touchEventHandle(event:egret.TouchEvent){



        }
        public listNotificationInterests():Array<any>{
            return [];
        }

        public  handleNotification(notification: puremvc.INotification):void {

            
        }
        
        public get gameScene():game.GameScene{
            return <game.GameScene><any>(this.viewComponent);
        }

    }




}