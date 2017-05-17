module game {
    export class LoadingUI extends eui.Component{

        public constructor(){
            super();
            this.skinName = "src/skin/LoadingUISkin.exml";
        }

       public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }
    }

}