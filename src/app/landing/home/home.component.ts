import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isNavbarScrolled = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Lógica para cambiar el color del navbar cuando se desplaza el scroll
    if (window.scrollY > 50) {
      this.isNavbarScrolled = true;

      console.log("true")
    } else {
      this.isNavbarScrolled = false;
      console.log("false")
    }
  }

}
