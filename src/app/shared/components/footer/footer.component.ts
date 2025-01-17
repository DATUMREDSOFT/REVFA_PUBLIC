import { Component, OnInit } from "@angular/core";
import { NavService } from "../../services/nav.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  public footerFix = false;
  public footerLight = false;
  public footerDark = false;

  currentYear: number = new Date().getFullYear();


  collapseSidebar: boolean = false;


  constructor(private navServices: NavService) {
    
  }

  ngOnInit(): void {
    this.navServices.obtenerEstadoNavbarObservable().subscribe(collapse => {
      this.collapseSidebar = collapse;
      console.log(collapse)
    });
  }

  




  ngDoCheck() {
    if (window.location.pathname == "/page-layout/footer-dark") {
      this.footerDark = true;
      this.footerLight = false;
      this.footerFix = false;
    } else if (window.location.pathname == "/page-layout/footer-light") {
      this.footerLight = true;
      this.footerDark = false;
      this.footerFix = false;
    } else if (window.location.pathname == "/page-layout/footer-fixed") {
      this.footerFix = true;
      this.footerLight = false;
      this.footerDark = false;
    }
  }

  



  


}
