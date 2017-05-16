module game{

    export class GameSceneMediator extends puremvc.Mediator implements puremvc.IMediator{


        public static NAME:string = "GameSceneMediator";
        constructor(viewCompentend:any){
            super(GameSceneMediator.NAME,viewCompentend);
            
            this.gameScene.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchEventHandle,this);

        }
        //触摸事件响应
        public touchEventHandle(event:egret.TouchEvent){

            console.log(">>>>>>>> 触摸事件响应 >>>>>>>>")
            this.gameScene.shotNeedle(this.checkCollision);

        }
        //检测合法性
        public checkCollision(data:any){
            // let needle = <game.NeedleUI><any>data;
            console.log(">>>>>> 碰撞检测开始执行 >>>>>>>")

            // this.gameScene.wheel.insertElement(needle);
        }
        public listNotificationInterests():Array<any>{
            return [
                GameProxy.GAME_START,
            ];
        }

        public  handleNotification(notification: puremvc.INotification):void {

            var data:any = notification.getBody();
            switch(notification.getName()){

                case GameProxy.GAME_START:{

                    break;
                }

            }
        }
        
        public get gameScene():game.GameScene{
            return <game.GameScene><any>(this.viewComponent);
        }

    }
}