//游戏的主要逻辑
module game {

    export class GameScene extends eui.UILayer{

        
        protected createChildren():void{
            super.createChildren();

            this.initView();


            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegan,this);

        }   
        private wheel:game.WheelUI;
        private needle:game.NeedleUI;
        private initView():void{

            // var shp:egret.Sprite = new egret.Sprite()
            // shp.x = 100;
            // shp.y = 100;
            // shp.graphics.lineStyle(10,0x00ff00);
            // shp.graphics.beginFill(0xff0000,1);
            // // shp.graphics.drawCircle(0,0,50);
            // shp.graphics.drawRect(0,0,100,100);
            // shp.graphics.endFill();
            // shp.$setAnchorOffsetX(50);
            // shp.$setAnchorOffsetY(50);
            // this.addChild(shp);

            // this.shp = shp;

            // shp.x = this.$stage.$stageWidth / 2;
            // shp.y = this.$stage.$stageHeight / 2 - 200

            // var tw = egret.Tween.get(shp,{loop: true});
            // tw.to({rotation:360},1000)

            // var needle = new game.NeedleUI();
            // needle.x = this.$stage.$stageWidth/2;
            // needle.y = this.$stage.$stageHeight/2;
            // this.addChild(needle);
            // this.needle = needle;

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

        public onTouchBegan(evt:Event){

            console.log(">>>>>> onTouchBegan >>>>>> ");

            // var point = this.shp.globalToLocal(this.needle.x,this.needle.y);

            // this.removeChild(this.needle);
            // this.shp.addChild(this.needle);
            // this.needle.x = point.x;
            // this.needle.y = point.y;
            this.wheel.insertElement(this.needle);
        }
    }
}

