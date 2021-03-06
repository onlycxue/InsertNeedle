module game{

    export class EndPopup extends eui.Component{

        public constructor(){
            super();
            this.skinName = "src/skin/EndUISkin.exml"

            this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.createComplete,this);
        }

        public restartBtn:eui.Button;
        public shareBtn:eui.Button;

        public createComplete(event:eui.UIEvent):void{
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE,this.createComplete,this);
            ApplicationFacade.getInstance().registerMediator(new game.EndPopupMediator(this));
        }

        public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }


    }

    
}