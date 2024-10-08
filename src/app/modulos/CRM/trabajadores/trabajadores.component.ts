import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from "../../../admin/navigation/navigation.component";

@Component({
  selector: 'app-trabajadores',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './trabajadores.component.html',
  styleUrl: './trabajadores.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrabajadoresComponent {

}
