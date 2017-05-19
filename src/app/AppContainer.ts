module game {
    export class AppContainer extends eui.UILayer{

        protected createChildren():void{
            super.createChildren();


            // this.showGameScene();
            this.showGameMenuWin();
        }  
        private gameScene: game.GameScene;

        public showGameScene():void{
            this.gameScene = new game.GameScene();
            this.addChild(this.gameScene);
        }

        public showGameMenuWin():void {
            let gameMenuWin = new game.GameMenuWindow();
            this.addChild(gameMenuWin);
        }
    }


}