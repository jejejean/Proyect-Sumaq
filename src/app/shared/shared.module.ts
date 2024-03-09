import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsComponent } from './components/utils/inputs/inputs.component';
import { MainComponent } from './components/layout/main/main.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ButtonsComponent } from './components/utils/buttons/buttons.component';
import { AccordionItemComponent } from './components/utils/accordion-item/accordion-item.component';
import { InfoSectionComponent } from './components/utils/info-section/info-section.component';



@NgModule({
  declarations: [
    InputsComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    ButtonsComponent,
    AccordionItemComponent,
    InfoSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    InputsComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    ButtonsComponent
  ]
})
export class SharedModule { }
