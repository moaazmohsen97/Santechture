import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from "@angular/core";

const materialModules = [
  MatSnackBarModule
];

@NgModule({
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
})
export class AngMaterialModule { }
