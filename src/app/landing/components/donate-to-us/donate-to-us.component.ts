import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-donate-to-us',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './donate-to-us.component.html',
  styleUrl: './donate-to-us.component.css'
})
export class DonateToUsComponent {

}
