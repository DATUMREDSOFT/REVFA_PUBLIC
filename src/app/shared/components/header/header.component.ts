import { Component, HostListener, OnInit } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  open = false;

  collapseSidebar: boolean = true;
  constructor(private navServices: NavService) {
    
   }

  sidebarToggle() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }

  openMenu(){
    this.open = !this.open
  }
  
  ngOnInit(): void {
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    // Aquí puedes manejar el evento de cambio de tamaño de pantalla
    console.log('Ancho de la pantalla:', event.target.innerWidth);
    
    // Puedes ejecutar cualquier lógica adicional aquí según sea necesario
    if (event.target.innerWidth <= 1400) {
      this.navServices.collapseSidebar = true;
    } else {
      // Lógica para pantallas más grandes
    }
  }



}
