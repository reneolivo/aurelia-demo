import {inject, customElement, bindable} from 'aurelia-framework';
import noUiSlider from 'leongersen/noUiSlider/nouislider';
import {ObserverLocator} from 'aurelia-binding';

@customElement('range-controller')
@inject(Element, noUiSlider, ObserverLocator)
export class RangeController {
  @bindable width;
  @bindable height;
  @bindable red;
  @bindable green;
  @bindable blue;

  constructor(element, noUiSlider, ObserverLocator) {
    this.width = 100;
    this.height = 100;
    this.red = 125;
    this.green = 125;
    this.blue = 125;

    setTimeout(()=> this.width = 400, 5000);

    this.element = element;
    this.noUiSlider = noUiSlider;
    this.ObserverLocator = ObserverLocator;
  }

  created() {
    var widthRange = this.element.querySelector('.range.width');
    var heightRange = this.element.querySelector('.range.height');

    var redRange = this.element.querySelector('.range.red');
    var greenRange = this.element.querySelector('.range.green');
    var blueRange = this.element.querySelector('.range.blue');

    this.createRange(widthRange, 'width');
    this.createRange(heightRange, 'height');

    var colorRangeConfig = {orientation: 'vertical', range: {min: 0, max: 255}};

    this.createRange(redRange, 'red', colorRangeConfig);
    this.createRange(greenRange, 'green', colorRangeConfig);
    this.createRange(blueRange, 'blue', colorRangeConfig);
  }

  createRange(element, propName, config = {}) {
    var defaultConfig = {
      start: this[propName],
      step: 5,
      range: {
        min: 0,
        max: 500
      }
    };

    config = Object.assign(defaultConfig, config);

    this.noUiSlider.create(element, config);

    element.noUiSlider.on('slide', (value) => {
      this[propName] = parseInt(value);
    });

    this.ObserverLocator
      .getObserver(this, propName)
      .subscribe(value => element.noUiSlider.set(value));
  }
}
