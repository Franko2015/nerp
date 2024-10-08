import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { ChatComponent } from "../chat/chat.component";
import { ChartComponent } from '../chart/chart.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavigationComponent, ChatComponent, ChartComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {  
}
