import {inject, customElement, bindable} from 'aurelia-framework';
import noUiSlider from 'leongersen/noUiSlider/nouislider';
import {ObserverLocator} from 'aurelia-binding';

@customElement('range-controller')
@inject(Element, noUiSlider, ObserverLocator)
export class RangeController {
  @bindable width;
  @bindable height;

  constructor(element, noUiSlider, ObserverLocator) {
    this.width = 100;
    this.height = 100;

    setTimeout(()=> this.width = 400, 5000);

    this.element = element;
    this.noUiSlider = noUiSlider;
    this.ObserverLocator = ObserverLocator;
  }

  created() {
    var widthRange = this.element.querySelector('.width');
    var heightRange = this.element.querySelector('.height');

    this.createRange(widthRange, 'width');
    this.createRange(heightRange, 'height');
  }

  createRange(element, propName) {
    this.noUiSlider.create(element, {
      start: this[propName],
      step: 5,
      range: {
        min: 0,
        max: 500
      }
    });

    element.noUiSlider.on('slide', (value) => {
      this[propName] = parseInt(value);
    });

    this.ObserverLocator
      .getObserver(this, propName)
      .subscribe(value => element.noUiSlider.set(value));
  }
}
