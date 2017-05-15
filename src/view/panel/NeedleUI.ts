module game{
    export class NeedleUI extends egret.DisplayObjectContainer{

        
        public constructor(text:string){
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
            this.text = text;
         }
         //数字number
         private numLabel:egret.TextField;
         private $radius:number = 20
         private text:string = ""

         public set radius(val:number){
             this.$radius = val;
         }
         
         private onAddToStage(event:egret.Event){

             var shp:egret.Shape = new egret.Shape();
            //  shp.graphics.lineStyle(2,0x00ff00);
             shp.graphics.beginFill(0x000000,1);
             shp.graphics.drawCircle(0,0,this.$radius);
             shp.graphics.endFill();

             this.addChild(shp);

             this.numLabel = new egret.TextField();
             this.numLabel.text = this.text
             this.numLabel.x = -this.numLabel.width/2;
             this.numLabel.y = -this.numLabel.height/2;
             this.addChild(this.numLabel);
         }
    }
}