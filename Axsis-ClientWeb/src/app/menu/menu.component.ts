import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [NgbTabsetConfig]
})
export class MenuComponent implements OnInit {

  constructor(config: NgbTabsetConfig) {
    config.justify = 'center';
    config.type = 'pills';
  }

  ngOnInit() {
  }

}
