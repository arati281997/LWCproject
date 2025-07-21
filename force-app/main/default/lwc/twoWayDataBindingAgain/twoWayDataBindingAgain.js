import { LightningElement } from 'lwc';

export default class TwoWayDataBindingAgain extends LightningElement {
    handleChange(event){
    alert('Input Called: ' + event.target.value);
    }
}