import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router'; 
import { slideInAnimation } from './animations/custom_animation.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'example-angular-with-routing';
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
