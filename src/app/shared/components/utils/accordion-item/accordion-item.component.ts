import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
})
export class AccordionItemComponent {
  @Input() isOpen!: boolean;
  @Input() title!: string;
  @Input() isList: boolean = true;
  @Input() itemsList!: string[];
  @Input() itemsText!: string;
  @Input() toggleAccordion!: (title: string) => void;
}
