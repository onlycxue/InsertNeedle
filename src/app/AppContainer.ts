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
        private endPopup:game.EndPopup;
        private winPopup:game.WinPopup;
        public showGameScene():void{
            if (this.gameScene instanceof game.GameScene){
                console.log(">>>>>>> 已经创建 >>>>>>>")
            }else {
                this.gameScene = new game.GameScene();
                this.addChild(this.gameScene);
            }
        }

        public showGameMenuWin():void {
            

            let gameMenuWin = new game.GameMenuWindow();
            this.addChild(gameMenuWin);
        }

        public showEndPopup():void {
            
            if (this.endPopup instanceof game.EndPopup){
                this.endPopup.visible = true;
                console.log(">>>>> 已经创建 直接显示 >>>>>");
            }
            else{
                this.endPopup = new game.EndPopup();
                this.addChild(this.endPopup);
            }

        }

        public showWinPopup():void {
            // let winPopup = new game.WinPopup();
            // this.addChild(winPopup);

            if(this.winPopup instanceof game.WinPopup){
                this.winPopup.visible = true;
            }
            else{
                this.winPopup = new game.WinPopup();
                this.addChild(this.winPopup);
            }
        }
        
    }


}