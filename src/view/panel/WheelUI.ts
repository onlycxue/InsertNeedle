//旋转的轮子

module game{
    export class WheelUI extends egret.Sprite{

        constructor(){
            super();
            this.init();
        }
        //创建圆盘
        public init(){
            this.$graphics.lineStyle(10,0x00ff00);
            this.$graphics.beginFill(0xff00000,1);
            this.$graphics.drawCircle(0,0,this.$radius);
            // this.$graphics.drawRect(0,0,this.$radius,this.$radius);
            this.$graphics.endFill();
            // this.$setAnchorOffsetX(this.$radius/2);
            // this.$setAnchorOffsetY(this.$radius/2);
        }
        private $radius:number = 100;
        private $maxRadius:number = 200;
        private twAction:egret.Tween;
        // public set radius(val:number){
        //     this.$radius = val;
        // }
        // public get radius(){
        //     return this.$radius;
        // }

        // public set maxRadius(maxR:number){
        //     this.$maxRadius = maxR;
        // }
        // public get maxRadius(){
        //     return this.$maxRadius;
        // }

        public addElementByAngles(angles:number){
            let element = new game.NeedleUI();
            element.x = this.$maxRadius * Math.cos(angles);
            element.y = this.$maxRadius * Math.sin(angles);
            this.addChild(element);
        }
        //插入
        public insertElement(view:game.NeedleUI){

            // var globalPoint = view.localToGlobal(view.x,view.y)
            var point = this.globalToLocal(view.x,view.y);
            // var point = this.globalToLocal(globalPoint.x,globalPoint.y);
            let parent = view.$parent;
            if (parent){
                parent.removeChild(view);
            }
            this.addChild(view);
            view.x = point.x;
            view.y = point.y;
        }

        //开始旋转
        public play(time,isReverse){
         this.twAction = egret.Tween.get(this,{loop:true});

         if (isReverse) {
             this.twAction.to({rotation:-360},time);
         }else{
             this.twAction.to({rotation:360},time);
         }

        }

        //停止旋转
        public stop(){
            this.twAction.pause()
        }
    }
}