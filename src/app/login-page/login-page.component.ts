import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NewCustomerRegistrationComponent } from '../new-customer-registration/new-customer-registration.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NewCustomerRegistrationComponent,RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
