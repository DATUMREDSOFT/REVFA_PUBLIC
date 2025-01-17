import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.scss'
})
export class BusquedaComponent {

  
  @ViewChild("busquedaInvalidaDUI") private busquedaInvalidaDUI: SwalComponent;


  @Input() tipoBusquedaTitulo: string = 'Sin definir';

  @Input() esMadre: boolean = false;

  @Output() clicEnHijo = new EventEmitter<void>();



  onclick(): void {
    this.clicEnHijo.emit();
    console.log("Hijo emit")
  }


  constructor(private messageService: MessageService,){}

  opcionSeleccionada:String;

  selectedCar: number;
  

  duiInput: string = ''; 
  mostrarfoto: boolean = false;

  clickBuscar(){
    console.log(this.duiInput.length )


    


    if(this.duiInput.length != 9){
      //this.busquedaInvalidaDUI.fire();


      this.messageService.add({
        key: "tc",
        severity: "info",
        summary: "Información",
        detail: "No se ha logrado identificar el dato ingresado",
      });


    }
    else{

      this.onclick()

      console.log("Hijo")

      this.mostrarfoto = true;
      this.messageService.add({
        key: "tc",
        severity: "success",
        summary: "Información",
        detail: "Se ha logrado encontrar un registro",
      });
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


    if(this.selectedCard == cardId){
      this.selectedCard ='n/a'
      return;
    }

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
