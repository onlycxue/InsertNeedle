//游戏的主要逻辑
module game {

    export class GameScene extends eui.UILayer{

        
        protected createChildren():void{
            super.createChildren();

            this.initView();
            ApplicationFacade.getInstance().registerMediator(new game.GameSceneMediator(this));
        }   
        public wheel:game.WheelUI;
        public needleGroup:game.NeedleGroupUI;

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
            this.needleGroup = group;
            this.addChild(group);
        }
        //发射针
        public shotNeedle(callback:(any) => any){

            let needle = this.needleGroup.getElementAt(0);
            let globalPos =  needle.parent.localToGlobal(needle.x,needle.y);
            this.needleGroup.removeChild(needle);
            this.addChild(needle);
            needle.x = globalPos.x;
            needle.y = globalPos.y;
            egret.Tween.get(needle,{loop:false}).to({y:this.wheel.insertPos()},200).call(function () {callback(needle)});

        }
    }
}

