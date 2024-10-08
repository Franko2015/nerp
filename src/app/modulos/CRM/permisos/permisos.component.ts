import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from "../../../admin/navigation/navigation.component";

@Component({
  selector: 'app-permisos',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './permisos.component.html',
  styleUrl: './permisos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PermisosComponent {

}
