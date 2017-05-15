module game {
    export class ApplicationFacade extends puremvc.Facade implements puremvc.IFacade {

        constructor(key) {
            super(key);
        }
        public static STARTUP:string = "startup";
        public static instance:ApplicationFacade; 
        
        public static getInstance(): ApplicationFacade {
            if (this.instance == null) this.instance = new ApplicationFacade("ApplicationFacado");
            return <ApplicationFacade><any>(this.instance);
        }

        public initializeController(): void{
            super.initializeController();
            this.registerCommand(ApplicationFacade.STARTUP,StartupCommand);
            // this.registerCommand()
        }

        public startUp(rootView:eui.UILayer) : void {
            this.sendNotification(ApplicationFacade.STARTUP,rootView);
            this.removeCommand(ApplicationFacade.STARTUP);

        }
   }
}