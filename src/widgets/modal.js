import {inject, customElement} from 'aurelia-framework';
import $ from 'jquery';

@customElement('modal')
@inject(Element)
export class Modal {
  modal;

  constructor(element) {
    this.element = element;
  }

  created() {
    this.modal = $(this.element).find('.modal');
  }

  open() {
    this.modal.modal('show');
  }
}
