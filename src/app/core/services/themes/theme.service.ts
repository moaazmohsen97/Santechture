import { PublicService } from './../../../shared/services/public.service';
import { keys } from './../../../shared/configs/localstorage-key';
import { Theme, light, dark } from './theme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(
    private publicService: PublicService
  ) { }

  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
    localStorage.setItem(keys?.theme, 'light');
    this.publicService?.theme?.next('light');
  }
  setDarkTheme(): void {
    this.setActiveTheme(dark);
    localStorage.setItem(keys?.theme, 'dark');
    this.publicService?.theme?.next('dark');
  }

  setColorTheme(color: any): void {
    Object.keys(this.active.properties).forEach((property) => {
      if (property == '--text-main-color' || property == '--bg-main-color') {
        this.active.properties[property] = color;
      }
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
    localStorage.setItem(keys?.theme, 'light');
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;
    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
