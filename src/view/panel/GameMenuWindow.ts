// TypeScript file

module game {

    export class GameMenuWindow extends eui.Component{

        public constructor(){
            super();
            this.skinName = "src/skin/GameMenuUISkin.exml"
            this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.createCompleteEvent,this);
        }    

        public createCompleteEvent(event:eui.UIEvent):void {
            console.log(">>>>>> game . createCompleteEvent ")
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE,this.createCompleteEvent,this);
            ApplicationFacade.getInstance().registerMediator(new game.GameMenuWinMediator(this));
        }

        public partAdded(partName: string,instance: any):void{
            super.partAdded(partName,instance);
        }

        public startBtn:eui.Button;
    }


}