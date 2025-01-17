import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  
  public config = {
    settings: { 
      layout: '',
      layout_type: 'ltr',
      layout_version: 'light-only',
      sidebar_type: 'compact-wrapper',
    },
    color: {
      primary_color: '#050e5b', 
      secondary_color: '#2112c9'
    }
  }

  constructor() {
    if(this.config.settings.layout_type == 'box-layout') {
    document.body.classList.add('box-layout')
   }
    document.getElementsByTagName('html')[0].setAttribute('dir', this.config.settings.layout_type);
    document.documentElement.style.setProperty('--theme-default', this.config.color.primary_color);
    document.documentElement.style.setProperty('--theme-secondary', this.config.color.secondary_color);
  }

}
