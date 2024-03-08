import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  accordionStates: { [key: string]: boolean } = {
    nosotros: false,
    atencionCliente: false,
    libroDeReclamaciones: false,
    sumaq: false,
  };

  toggleAccordion(accordionName: string) {
    const isOpen = this.accordionStates[accordionName];

    // Cierra todos los acordeones
    for (let key in this.accordionStates) {
      this.accordionStates[key] = false;
    }

    // Si el acordeón clickeado ya estaba abierto, lo dejamos cerrado.
    // Si no, lo abrimos.
    this.accordionStates[accordionName] = !isOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}
