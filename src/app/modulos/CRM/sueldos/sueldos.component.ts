import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from "../../../admin/navigation/navigation.component";

@Component({
  selector: 'app-sueldos',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './sueldos.component.html',
  styleUrl: './sueldos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SueldosComponent {

}
