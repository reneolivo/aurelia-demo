export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','home'],  name: 'home',      moduleId: 'welcome',      nav: true, title:'Home' },
      { route: 'modal', name: 'modal', moduleId: 'modal-demo', nav: true, title: 'Modal'},
      { route: 'gallery',         name: 'gallery',        moduleId: 'gallery',        nav: true, title:'Gallery' }
    ]);

    this.router = router;
  }
}
