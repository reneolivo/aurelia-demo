import {inject, customElement, useShadowDOM, bindable} from 'aurelia-framework';
import {randomColor} from '../helpers/random'

@inject(Element)
@customElement('square')
@useShadowDOM()
export class Square {
  @bindable width;
  @bindable height;

  style;

  constructor(element) {
    var rc = randomColor();

    this.style = {
      width: '100px',
      height: '100px',
      border: `3px solid RGB(${rc.red}, ${rc.green}, ${rc.blue})`
    };
  }

  widthChanged(value) {
    this.style.width = value + 'px';
  }

  heightChanged(value) {
    this.style.height = value + 'px';
  }

  styleChanged(value) {
    console.log('style changed');
  }

  onClick() {

    this.style.width = '400px';
  }
}
