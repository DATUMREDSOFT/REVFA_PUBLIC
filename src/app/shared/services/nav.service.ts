import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, fromEvent, Subject } from "rxjs";
import { takeUntil, debounceTime } from "rxjs/operators";

export interface Menu {
  headTitle1?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}
@Injectable({
  providedIn: "root",
})
export class NavService {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );
  private url = new BehaviorSubject("default message");
  currentUrl = this.url.asObservable();

  fullScreen: any;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  // public fullScreen: boolean = false;

  // Search Box
  public search: boolean = false;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize")
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          // this.megaMenu = false;
          // this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          // this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        // this.megaMenu = false;
        // this.levelMenu = false;
      });
    }
  }

  changeUrl(val: string): void {
    this.url.next(val);
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }
  MENUITEMS: Menu[] = [
    {
      headTitle1: "Páginas",
      headTitle2: "Contenido",
    },
    {
      title: "Inicio",
      icon: "home",
      type: "sub",
      badgeType: "success",
      badgeValue: "2",
      active: true,
      children: [
        {
          path: "/inicio/principal",
          title: "Principal",
          bookmark: true,
          type: "link",
        },      
        {
          path: "/inicio/partidasNac",
          title: "Partidas Nacimiento",
          bookmark: true,
          type: "link",
        },  
      ],
    },

    {
      title: "Demo",
      icon: "book",
      type: "sub",
      badgeType: "success",
      badgeValue: "2",
      active: false,
      children: [
        {
          path: "/sample-page/sample-page1",
          title: "Formulario#1",
          bookmark: true,
          type: "link",
        },
        {
          path: "/sample-page/sample-page2",
          title: "Formulario#2",
          type: "link",
        },
      ],
    },


   



  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);



  private _collapseSidebar: boolean = false;
  private _collapseSidebarSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._collapseSidebar);

  // Getter para obtener el estado de collapseSidebar
  get getCollapseSidebar(): boolean {
    return this._collapseSidebar;
  }

  // Setter para actualizar el estado de collapseSidebar
  nuevoCollapseSidebar(value: boolean): void {
    this._collapseSidebar = value;
    this._collapseSidebarSubject.next(value);
  }

  // Observable para que los componentes escuchen los cambios
  obtenerEstadoNavbarObservable() {
    return this._collapseSidebarSubject.asObservable();
  }



}
