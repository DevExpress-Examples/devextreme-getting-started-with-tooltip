import { Component } from '@angular/core';

import { DxButtonModule } from 'devextreme-angular/ui/button';

@Component({
    selector: 'app-root',
    imports: [DxButtonModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular';
}
