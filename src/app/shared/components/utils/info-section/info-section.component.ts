import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css'],
})
export class InfoSectionComponent implements OnInit {
  @Input() title!: string;
  @Input() paragraphText?: string;
  @Input() links?: string[];
  @Input() imageUrl?: string;
  @Input() imageAlt?: string;
  constructor() {}

  ngOnInit(): void {}
}
