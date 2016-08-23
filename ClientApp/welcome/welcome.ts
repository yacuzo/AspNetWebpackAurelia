import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Welcome {
    private router = null;

    constructor(router: Router) {
        this.router = router;
    }

    getText() {
        return this.router.currentInstruction ? this.router.currentInstruction.config.title : '';
    }
}
