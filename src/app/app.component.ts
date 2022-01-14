import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './share/animations/route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent implements OnInit {
  title = '{ IE }';
  uf:any;
  dolarO:any;
  dolar:any;
  dailyIndicators: any;
  indicators: any;

  constructor(
    public router: Router
  ) {}

  ngOnInit(): void {

    
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['animationState'];
   }
  
}
