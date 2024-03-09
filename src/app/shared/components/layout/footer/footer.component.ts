import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  
  openAccordion: string | null = null;

  toggleAccordion(accordion: string) {
    this.openAccordion = this.openAccordion === accordion ? null : accordion;
  }
}
