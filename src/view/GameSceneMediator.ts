module game{

    export class GameSceneMediator extends puremvc.Mediator implements puremvc.IMediator{


        public static NAME:string = "GameSceneMediator";
        constructor(viewCompentend:any){
            super(GameSceneMediator.NAME,viewCompentend);
            
            this.gameScene.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchEventHandle,this);

        }
        //触摸事件响应
        public touchEventHandle(event:egret.TouchEvent){

            this.gameScene.shotNeedle(this.checkCollision.bind(this));

        }
        //检测合法性
        public checkCollision(data:any){
            let needle = <game.NeedleUI><any>data;
            let nPoint = this.gameScene.localToGlobal(needle.x,needle.y);
            //判断是否发生碰撞
            for (let item of this.gameScene.wheel.needleList){


                let iPoint = this.gameScene.wheel.localToGlobal(item.x,item.y);

                if (egret.Point.distance(nPoint,iPoint) <= 60 ){
                    this.gameScene.wheel.stop();
                    this.gameScene.redShap.visible = true;
                    this.gameScene.wheel.insertElement(needle);

                    this.sendNotification(SceneCommand.SHOW_END);
                    return;
                }
            }
            this.gameScene.wheel.insertElement(needle);
            this.gameScene.needleGroup.move();
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
                    this.gameScene.redShap.visible = false
                    break;
                }

            }
        }
        
        public get gameScene():game.GameScene{
            return <game.GameScene><any>(this.viewComponent);
        }

    }
}