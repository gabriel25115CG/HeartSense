import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { TitleComponent } from '../../components/title/title.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SeparatorComponent } from '../../components/separator/separator.component';



@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CardsComponent, TitleComponent, FooterComponent, SeparatorComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
