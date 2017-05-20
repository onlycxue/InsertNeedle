module game{

    export class EndPopup extends eui.Component{

        public constructor(){
            super();
            this.skinName = "src/skin/EndUISkin.exml"

            ApplicationFacade.getInstance().registerMediator(new game.EndPopupMediator(this));
        }

        public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }

        public restartBtn:eui.Button;
        public shareBtn:eui.Button;
    }

    
}