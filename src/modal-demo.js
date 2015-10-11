import {inject} from 'aurelia-framework';
import jQuery from 'jquery';

var dependencies = {jQuery: jQuery};

@inject(dependencies)
export class ModalDemo {
  constructor(dependencies) {
    this.jQuery = dependencies.jQuery;
  }

  openModal(modalId) {
    this.jQuery('#'+modalId+' .modal').modal('show');
  }
}
