import { Component, OnInit, NgZone } from "@angular/core";


@Component({
  selector: "app-firma",
  standalone: false,
  templateUrl: "./firma.component.html",
  styleUrl: "./firma.component.scss",
})
export class FirmaComponent implements OnInit {
  texto: String = '';

 

  ngOnInit() {


    // const typed = new Typed({ callback: (text) => (this.texto = text) });

    // const line1 = "Hello, World!";
    // const line2 = "slow";
    // const line3 = "this is typed really fast, but errors are slow";
    // const line4 = "this line is fast forwarded. No errors will be made";

    // const type = async () => {
    //   typed
    //     .type(line1)
    //     .backspace(line1.length)
    //     .type(line2, { perLetterDelay: { min: 200, max: 400 } })
    //     .backspace(line2.length)
    //     .type(line3, {
    //       eraseDelay: { min: 40, max: 80 },
    //       perLetterDelay: { min: 200, max: 400 },
    //     })
    //     .backspace(line3.length);

    //   typed.fastForward();
    //   await typed.run();
    //   await typed.reset(true);
    //   typed.type(line4);
    //   await typed.run();
    //   typed.run();
    // };

    // type();..

    

    
  }


 



}