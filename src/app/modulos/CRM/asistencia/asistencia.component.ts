import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from "../../../admin/navigation/navigation.component";

@Component({
  selector: 'app-asistencia',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './asistencia.component.html',
  styleUrl: './asistencia.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsistenciaComponent {

}
