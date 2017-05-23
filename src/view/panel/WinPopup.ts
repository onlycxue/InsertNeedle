module game{

    export class WinPopup extends eui.Component{

        public constructor(){
            super();
            this.skinName = "src/skin/WinUISkin.exml"

            this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.createComplete,this);
        }

        public nextBtn:eui.Button;
        public shareBtn:eui.Button;

        public createComplete(event:eui.UIEvent):void{
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE,this.createComplete,this);
            ApplicationFacade.getInstance().registerMediator(new game.WinPopupMediator(this));
        }

        public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }


    }

    
}