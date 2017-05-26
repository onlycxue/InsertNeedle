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

                let item = ObjectPool.getPool("game.NeedleUI").borrowObject();
                this.addChild(item);
                item.setText(i.toString());
                item.y = (num - i * (30 + 10));
                item.x = 0;

            }
            if (num > NeedleGroupUI.showNum){
                this.y = this.y + (num - NeedleGroupUI.showNum)*(30 + 10)
            } 
            console.log(this.numElements);
            // console.log(this.y);
            this.y = 1736;
        }
        //向前移动一下
        public move() {
            egret.Tween.get(this,{loop:false}).to({y:this.y - (30 + 10)},200)
        }

        public clearObjects():void{
            var needle:game.NeedleUI;
            var num:number = this.numChildren;
            for (var i: number = num - 1; i >=0 ; i--){
                needle = <game.NeedleUI>this.removeChildAt(i);
                ObjectPool.getPool("game.NeedleUI").returnObject(needle);
            }
        }    
    }


}