import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'castle-ui-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private logger: NGXLogger) {}
  title = 'castle-ui-demo';
  ngOnInit(): void {
    this.logger.trace('**** DS - button view');
  }

  onClick(value: any) {
    this.logger.trace('$$$ BUTTON CLICKED $$$'), value;
  }
}
