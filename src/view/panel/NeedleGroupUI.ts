module game{
    export class NeedleGroupUI extends eui.Group {

       public constructor(){
            super();
            this.initByNum(6);
        }

        public initByNum(num:number){
            
            this.setContentSize(30,num*(30+10));

            for(let i = num; i >=1; i --){

                let needle = new game.NeedleUI(i.toString());
                needle.y = (num - i * (30+10));
                this.addChild(needle);
            }   
        }
    }


}