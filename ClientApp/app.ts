import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration, activationStrategy} from 'aurelia-router';
import './appcss.css';

export class App {
    router: Router;

    determineActivationStrategy() {
        return activationStrategy.invokeLifecycle;
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome/welcome', nav: true, title: 'Welcome' }
        ]);

        this.router = router;
    }
}

