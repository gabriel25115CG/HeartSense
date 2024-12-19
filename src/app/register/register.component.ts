import { Component } from '@angular/core';
import { RegisterformComponent } from "../../components/registerform/registerform.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-register',
  imports: [RegisterformComponent, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
