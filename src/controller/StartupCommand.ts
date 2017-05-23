module game {
    export class StartupCommand extends puremvc.SimpleCommand {
        public constructor(){
            super();
        }
        public execute(notification: puremvc.INotification):void {

            var main:game.AppContainer = notification.getBody();
            ApplicationFacade.getInstance().registerMediator(new game.AppContainerMediator(main));
            (new game.GameCommand()).register();
            (new game.SceneCommand()).register();
            ApplicationFacade.getInstance().registerProxy(new GameProxy());

        }
    }
}