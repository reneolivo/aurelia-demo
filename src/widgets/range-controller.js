import {inject, customElement, bindable} from 'aurelia-framework';

@customElement('range-controller')
@inject(Element)
export class RangeController {
  @bindable width;
  @bindable height;

  constructor(element) {
    this.width = 100;
    this.height = 100;

    setTimeout(()=> this.width = 400, 5000);
  }
}
