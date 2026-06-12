import { Component, ChangeDetectionStrategy } from '@angular/core';

import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxTooltipModule } from 'devextreme-angular/ui/tooltip';

@Component({
    selector: 'app-root',
    imports: [DxButtonModule, DxTooltipModule],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular';
}
