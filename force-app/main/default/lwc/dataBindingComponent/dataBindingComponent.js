import { LightningElement } from 'lwc';

export default class DataBindingComponent extends LightningElement {
    
    changeHandler(evt){
        console.log('Change Handler Was Called');
        console.log(evt.target.value);
        this.GreetingMsg= evt.target.value;
    }
    GreetingMsg = 'World';
} 
