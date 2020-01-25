
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatSelectModule, MatDialogModule, MatButtonModule, MatSnackBarModule,
  MatInputModule, MatCheckboxModule, MatTooltipModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatSelectModule, MatDialogModule, MatButtonModule, MatSnackBarModule,
  MatInputModule, MatCheckboxModule, MatTooltipModule
];

import { COMPONENTS, ENTRY_COMPONENTS } from './components';
import { PIPES } from './pipes';
import { DIRECTIVES } from './directives';
import { VALIDATORS } from './validators';

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES,
    ...VALIDATORS
  ],
  imports: [
    CommonModule, // TODO investigate usage and where to import
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES,
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES,
    ...VALIDATORS
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ]
})
export class SharedModule { }
