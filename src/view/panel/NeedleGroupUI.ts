module game{
    export class NeedleGroupUI extends eui.Group {

       public constructor(){
            super();
            // this.initByNum(6);
            ApplicationFacade.getInstance().registerMediator(new game.NeedleGroupUIMediator(this));
        }
        private static showNum:number = 5;
        public initViewByLevel(level:number)
        {
            let data = RES.getRes("LevelConfigData_json")
            let num = data[level].reqNum;

            for (let i = num; i >= 1; i--){
                let item = new game.NeedleUI(i.toString());
                item.y = (num - i * (30 + 10));
                this.addChild(item);
            }
            if (num > NeedleGroupUI.showNum){
                this.y = this.y + (num - NeedleGroupUI.showNum)*(30 + 10)
            } 
        }
        //向前移动一下
        public move() {
            egret.Tween.get(this,{loop:false}).to({y:this.y - (30 + 10)},200)
        }
        
    }


}