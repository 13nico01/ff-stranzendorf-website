import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
