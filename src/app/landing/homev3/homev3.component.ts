import { AfterViewInit, Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any;

import AOS from "aos";

@Component({
  selector: 'app-homev3',
  templateUrl: './homev3.component.html',
  styleUrl: './homev3.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class Homev3Component implements AfterViewInit, OnInit{

  navbarToggler: HTMLElement | null = null;

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      clave: ['', [Validators.required]]
    });
  }

  get email() {
    return this.myForm.get('email');
  }
  get clave() {
    return this.myForm.get('clave');
  }

  // Método para mostrar si el control es válido o no después del blur
  showValidation() {
    this.email?.markAsTouched();
  }

  mostrarClave: boolean = false;
 

  toggleMostrarContrasena() {
    this.mostrarClave = !this.mostrarClave;
  
  }

  onInput() {
    if (this.email?.value) {
      this.email?.markAsTouched();
    }
  }


  showValidationClave() {
    this.clave?.markAsTouched();
  }

  onInputclave() {
    if (this.clave?.value) {
      this.clave?.markAsTouched();
    }
  }

  
  ngOnInit(): void {
    this.navbarShrink();
    this.activateScrollSpy();
    this.collapseNavbarOnClick();

   
    AOS.init({
      duration: 750,
      delay: 150,
    })
    
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }

  navbarShrink() {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
      console.log('remove navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
      console.log('navbar-shrink')
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event:any) {
    this.navbarShrink();
  }

  activateScrollSpy() {
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
      });
    }
  }

  collapseNavbarOnClick() {
    this.navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
    responsiveNavItems.forEach(responsiveNavItem => {
      responsiveNavItem.addEventListener('click', () => {
        if (this.navbarToggler && window.getComputedStyle(this.navbarToggler).display !== 'none') {
          this.navbarToggler.click();
        }
      });
    });
  }
}
