module game{
    export class GameProxy extends puremvc.Proxy implements puremvc.IProxy{

        public static NAME:string = "GameProxy";

        public static GAME_START:string = "game_start";
        public static GAME_RESTART:string = "game_restart";

        public constructor(){
            super(GameProxy.NAME);
        }

        public startGame(){

            // let level = game.CommonData.level;
            this.sendNotification(GameProxy.GAME_START,game.CommonData.level);
            game.CommonData.isRunning = true
        }
        public restartGame(){
            
            this.sendNotification(GameProxy.GAME_RESTART,game.CommonData.level);
        }
        public setResult(b:boolean):void{

            if (b){
                game.CommonData.level = game.CommonData.level + 1;
            }else{
                game.CommonData.level = 0;
            }
            game.CommonData.isRunning = false
        } 

    }


}