import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Gallery {
  images = [];

  constructor(http) {
    this.http = http;

    this.fetchImages();
  }

  fetchImages() {
    this.http.get('/data/images.json').then(response => {
      this.images = response.content;
    });
  }
}
