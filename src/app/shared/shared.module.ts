import { LanguageSelectorComponent } from './components/header/components/language-selector/language-selector.component';
import { ThemeComponent } from './components/header/components/theme/theme.component';
import { AngMaterialModule } from './modules/ang-material/ang-material.module';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';
import { TranslateModule } from '@ngx-translate/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

const allSharedComponents = [
  LanguageSelectorComponent,
  SkeletonComponent,
  HeaderComponent,
  ThemeComponent
]
const allSharedModule = [
  ReactiveFormsModule,
  ClickOutsideModule,
  AngMaterialModule,
  TranslateModule,
  PrimeNgModule,
  RouterModule,
  FormsModule,
  PaginatorModule,
  TooltipModule,
  DynamicDialogModule
]

@NgModule({
  declarations: [
    ...allSharedComponents,

  ],
  imports: [
    CommonModule,
    ...allSharedModule
  ],
  exports: [
    ...allSharedComponents,
    ...allSharedModule
  ],
  providers: [
    DialogService
 ],
})
export class SharedModule { }
