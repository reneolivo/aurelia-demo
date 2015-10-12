import {inject, customElement} from 'aurelia-framework';
import $ from 'jquery';

@customElement('modal')
@inject(Element)
export class Modal {
  modal;
  footer = null;
  hasFooter = false;

  constructor(element) {
    this.element = element;
  }

  created() {
    this.modal = $(this.element).find('.modal');
  }

  open() {
    this.hasFooter = this.footer.children.length > 0;

    this.modal.modal('show');
  }

  close() {
    this.modal.modal('hide');
  }
}
