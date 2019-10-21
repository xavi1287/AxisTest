import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../core/services/loader.service';

export class NgbdCollapseBasic {
  public isCollapsed = false;
}
@Component({
  selector: 'app-home-layout',
  template: `
    <router-outlet>

    </router-outlet>

  `,
  styles: []
})
export class HomeLayoutComponent {
  isOpen = false;
  constructor(private load: LoaderService) {

  }

  ngOnInit() {

  }
}
