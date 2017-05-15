//游戏的主要逻辑
module game {

    export class GameScene extends eui.UILayer{

        
        protected createChildren():void{
            super.createChildren();

            this.initView();
            ApplicationFacade.getInstance().registerMediator(new game.GameSceneMediator(this));
        }   
        private wheel:game.WheelUI;
        private needle:game.NeedleUI;

        private initView():void{

            let wheel = new game.WheelUI()
            this.addChild(wheel);
            wheel.x = this.$stage.$stageWidth / 2;
            wheel.y = this.$stage.$stageHeight / 2 - 200;
            wheel.play(4000,false); 
            this.wheel = wheel;

            let group = new game.NeedleGroupUI();
            group.x = this.$stage.$stageWidth/2;
            group.y = this.$stage.$stageHeight;
            this.addChild(group);
        }
    }
}

