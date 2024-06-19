import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from "../components/footer/footer.component";
import { DonateToUsComponent } from '../components/donate-to-us/donate-to-us.component';
import { EmergencyCallComponent } from "../components/emergency-call/emergency-call.component";

@Component({
    selector: 'landing-page',
    templateUrl: './page.component.html',
    styleUrl: './page.component.css',
    standalone: true,
    imports: [
        DonateToUsComponent,
        EmergencyCallComponent,
        FooterComponent,
        HeaderComponent,
    ]
})
export class PageComponent {

}
