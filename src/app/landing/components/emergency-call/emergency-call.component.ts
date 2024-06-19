import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-emergency-call',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './emergency-call.component.html',
  styleUrl: './emergency-call.component.css'
})
export class EmergencyCallComponent {

}
