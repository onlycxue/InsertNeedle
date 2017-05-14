module game{
    export class NeedleUI extends egret.DisplayObjectContainer{

        
        public constructor(){
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
         }
         //数字number
         private numLabel:egret.TextField;
         private $radius:number = 20

         public set radius(val:number){
             this.$radius = val;
         }
         public set Num(val:string){
             this.numLabel.text = val;
         }
         
         private onAddToStage(event:egret.Event){

             var shp:egret.Shape = new egret.Shape();
             shp.graphics.lineStyle(2,0x00ff00);
             shp.graphics.beginFill(0xff0000,1);
             shp.graphics.drawCircle(0,0,this.$radius);
             shp.graphics.endFill();
             shp.$setAnchorOffsetX(this.$radius/2);
             shp.$setAnchorOffsetY(this.$radius/2);

             this.addChild(shp);

             this.numLabel = new egret.TextField();
             this.numLabel.text = "10";
             this.numLabel.x = -26;
             this.numLabel.y = -25;
             this.addChild(this.numLabel);
         }
    }
}