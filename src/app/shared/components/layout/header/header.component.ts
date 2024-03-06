import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  dropdowns: { [key: string]: boolean } = {
    men: false,
    women: false,
    boys: false,
    unisex: false,
    basic: false
  };

  activeButton: string | null = null;

  toggleButton(button: string) {
    this.activeButton = this.activeButton === button ? null : button;
  }
  
  isActive(button: string) {
    return this.activeButton === button;
  }
  
  // MENU PARA PANTALLAS XM Y MD
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    // Si el menú se está cerrando, también cierra todos los dropdowns
    if (!this.menuOpen) {
      for (let key in this.dropdowns) {
        this.dropdowns[key] = false;
      }
    }
  }

  // SUBMENU PARA PANTALLAS XM Y MD
  toggleSubmenu(event: Event, dropdown: string) {
    event.preventDefault();
    this.dropdowns[dropdown] = !this.dropdowns[dropdown];
  }

  goBack(event: Event) {
    event.preventDefault();
    this.menuOpen = true; // Abre el menú
    // También debes cerrar todos los dropdowns
    for (let key in this.dropdowns) {
      this.dropdowns[key] = false;
    }
  }
  ngOnInit(): void {
    initFlowbite();
  }

  
}
