module game{
    export class GameCommand extends puremvc.SimpleCommand{
        public constructor(){
            super();
        }

        public static START_GAME: string = "start_game";

        public register():void{

            ApplicationFacade.getInstance().registerCommand(GameCommand.START_GAME,GameCommand);
        }
        public execute(notification:puremvc.INotification):void{

            var gameProxy = <GameProxy><any>(ApplicationFacade.getInstance().retrieveProxy(GameProxy.NAME));

            switch(notification.getName()){
                case GameCommand.START_GAME: {
                    
                    gameProxy.startGame();

                    break;
                }
            }

        }
    }
}