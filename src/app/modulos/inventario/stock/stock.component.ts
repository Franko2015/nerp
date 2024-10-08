import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockComponent {

}
