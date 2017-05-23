module game{
    export class SceneCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
        public constructor(){
            super();
        }

        public static NAME:string = "SceneCommand";

        /**
         *  显示胜利界面
         */        
        public static SHOW_WIN:string = "scene_win";

        /**
         * 显示结束窗口 
         */        
        public static SHOW_END:string = "scene_end";

        /**
         *  注册消息
         */        
        public register():void{

            ApplicationFacade.getInstance().registerCommand(SceneCommand.SHOW_WIN,SceneCommand);
            ApplicationFacade.getInstance().registerCommand(SceneCommand.SHOW_END,SceneCommand);

        }

        public execute(notification:puremvc.INotification):void{

            var data :any = notification.getBody();
            var appMediator: AppContainerMediator = 
            <AppContainerMediator><any>ApplicationFacade.getInstance().retrieveMediator(AppContainerMediator.NAME);
            switch(notification.getName()){
                case SceneCommand.SHOW_WIN:{

                    appMediator.appContainer.showWinPopup();
                    break;
                }
                case SceneCommand.SHOW_END:{
                    
                    setTimeout(function():void {
                        appMediator.appContainer.showEndPopup();
                    }, this,300);
                    
                   break;
                }
            }
        }



    }
}