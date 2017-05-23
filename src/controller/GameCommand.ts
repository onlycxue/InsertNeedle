module game{
    export class GameCommand extends puremvc.SimpleCommand{
        public constructor(){
            super();
        }

        public static START_GAME: string = "start_game";

        public static OVER_GAME: string = "over_game";

        public static WIN_GAME: string = "win_game";

        public register():void{

            ApplicationFacade.getInstance().registerCommand(GameCommand.START_GAME,GameCommand);
            ApplicationFacade.getInstance().registerCommand(GameCommand.OVER_GAME,GameCommand);
            ApplicationFacade.getInstance().registerCommand(GameCommand.WIN_GAME,GameCommand);
        }
        public execute(notification:puremvc.INotification):void{

            var gameProxy = <GameProxy><any>(ApplicationFacade.getInstance().retrieveProxy(GameProxy.NAME));

            switch(notification.getName()){
                case GameCommand.START_GAME: {
                    
                    gameProxy.startGame();

                    break;
                }
                case GameCommand.OVER_GAME: {
                    gameProxy.setResult(false);
                    break;
                }
                case GameCommand.WIN_GAME:{
                    gameProxy.setResult(true);
                    break;
                }
            }

        }
    }
}