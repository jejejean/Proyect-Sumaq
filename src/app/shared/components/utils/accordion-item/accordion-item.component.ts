import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
})
export class AccordionItemComponent implements OnInit {
  @Input() isOpen!: boolean;
  @Input() title!: string;
  @Input() accordionState!: boolean;
  @Input() isList: boolean = true;
  @Input() itemsList!: string[];
  @Input() itemsText!: string;
  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}

  ngOnInit(): void {}
}
