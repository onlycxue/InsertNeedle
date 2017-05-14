module game {
    export class StartupCommand extends puremvc.SimpleCommand {
        public constructor(){
            super();
        }
        public execute(notification: puremvc.INotification):void {

            console.log(">>>>>> here is StartupCommand")

            var main:game.AppContainer = notification.getBody();
            ApplicationFacade.getInstance().registerMediator(new game.AppContainerMediator(main));

        }
    }
}