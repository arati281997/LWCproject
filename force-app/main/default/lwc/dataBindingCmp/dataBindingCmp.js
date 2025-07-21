import { LightningElement } from 'lwc';

export default class DataBindingCmp extends LightningElement {
    name='Arati';
    clickHandler(){
        alert('Click Handler was called');
        //this.name = 'Thube';
        alert('Button Tag: ' + this.template.querySelector('[data-arati="aratiSecondCusAttr"]').label);
        alert('Button Tag: ' + this.template.querySelector('[data-arati="aratiCusAttr"]').label);
    }
}