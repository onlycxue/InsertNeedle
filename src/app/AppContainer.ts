module game {
    export class AppContainer extends eui.UILayer{

        protected createChildren():void{
            super.createChildren();


            this.showGameScene();
        }  
        private gameScene: game.GameScene;

        public showGameScene():void{
            this.gameScene = new game.GameScene();
            this.addChild(this.gameScene);
        }
    }


}