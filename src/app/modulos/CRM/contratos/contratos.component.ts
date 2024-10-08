import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from "../../../admin/navigation/navigation.component";

@Component({
  selector: 'app-contratos',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './contratos.component.html',
  styleUrl: './contratos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContratosComponent {

}
