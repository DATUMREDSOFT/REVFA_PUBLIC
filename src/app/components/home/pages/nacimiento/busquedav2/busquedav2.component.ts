import { Component, Input, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-busquedav2',
  templateUrl: './busquedav2.component.html',
  styleUrl: './busquedav2.component.scss'
})
export class Busquedav2Component {

  
  @ViewChild("busquedaInvalidaDUI") private busquedaInvalidaDUI: SwalComponent;


  @Input() tipoBusquedaTitulo: string = 'Sin definir';

  @Input() esMadre: boolean = false;


  opcionSeleccionada:String;

  selectedCar: number;
  

  duiInput: string = ''; 
  mostrarfoto: boolean = false;

  clickBuscar(){
    console.log(this.duiInput.length )

    if(this.duiInput.length != 9){
      this.busquedaInvalidaDUI.fire();
    }
    else{
      this.mostrarfoto = true;
    }
    
  }


  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  
  selectedCard: string | null = null;

  selectCard(cardId: string): void {
    this.selectedCard = cardId;
  }

 
  seleccionarTipo(tipo:string){
    console.log(tipo)
  }

  activeTab: string = 'paso1';

  changeTab(tabName: string): void {

    
    if( tabName == this.activeTab ){
      tabName = 'paso1';
    }

    this.activeTab = tabName;    

    switch (tabName) {
      case 'paso2':
        this.opcionSeleccionada = "DUI";
        break;
      case 'paso3':
      this.opcionSeleccionada = "NUI";
        break;
      case 'paso4':
      this.opcionSeleccionada = "Nombre";
        break;
      
      case 'paso4':
      this.opcionSeleccionada = "Nombre";
        break;
    
      default:
        break;
    }
  }


}
