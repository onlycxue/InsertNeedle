//旋转的轮子

module game{
    export class WheelUI extends egret.Sprite{

        constructor(){
            super();
            this.init();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStageComplete,this);
        }

        public addToStageComplete(){
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addToStageComplete,this);
            ApplicationFacade.getInstance().registerMediator(new game.WheelUIMediator(this));
        }
        //创建圆盘
        public init(){
            // this.$graphics.lineStyle(10,0x00ff00);
            this.$graphics.beginFill(0x000000,1);
            this.$graphics.drawCircle(0,0,this.$radius);
            this.$graphics.endFill();

        }
        private $radius:number = 100;
        private $maxRadius:number = 250;
        private twAction:egret.Tween;
        private needles:Array<game.NeedleUI> = [];

        public initViewByLevel(level:number){
            
            let anglesList = RES.getRes("LevelConfigData_json")[level].init;
            for (let angles of anglesList){
                this.addElementByAngles(angles);
            }
        }
        public addElementByAngles(angles:number){
            let element = new game.NeedleUI("");
            element.x = this.$maxRadius * Math.cos( 2* Math.PI/360 * angles);
            element.y = this.$maxRadius * Math.sin( 2* Math.PI/360 * angles);
            this.addChild(element);
            this.drawLine(0,0,element.x,element.y);
            this.needles.push(element);
        }
        //插入
        public insertElement(view:game.NeedleUI){

            var point = this.globalToLocal(view.x,view.y);
            let parent = view.$parent;
            if (parent){
                parent.removeChild(view);
            }
            view.setText("");
            this.addChild(view);
            view.x = point.x;
            view.y = point.y;
            this.drawLine(0,0,point.x,point.y);
            this.needles.push(view);
        }

        public drawLine(x,y,toX,toY){
            let line:egret.Shape = new egret.Shape();
            line.graphics.lineStyle(4,0x000000) ;
            line.graphics.moveTo(x,y);
            line.graphics.lineTo(toX,toY);          
            line.graphics.endFill();
            this.addChild(line);
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
            this.twAction.setPaused(true);
            this.twAction.pause()
        }

        public insertPos():number{
            return this.y + this.$maxRadius;
        }

        public get needleList():Array<game.NeedleUI>{
            return this.needles;
        }

    }
}