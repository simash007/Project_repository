import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-NarBarComponent',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './NavBarCustomer.component.html',
  styleUrl: './NavBarCustomer.component.css'
})
export class NarBarComponent {


}
