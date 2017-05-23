module game {
    export class AppContainer extends eui.UILayer{

        protected createChildren():void{
            super.createChildren();


            // this.showGameScene();
            this.showGameMenuWin();
            // this.showEndPopup();
            // this.showWinPopup();
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

        public showEndPopup():void {
            let endPopup = new game.EndPopup();
            this.addChild(endPopup);
        }

        public showWinPopup():void {
            let winPopup = new game.WinPopup();
            this.addChild(winPopup);
        }
        
    }


}