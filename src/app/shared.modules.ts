import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

const modules_arr = [
  BrowserModule,
  MatProgressBarModule,
  BrowserAnimationsModule,
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatSelectModule,
  MatIconModule,
  MatChipsModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  RouterModule,
];

@NgModule({
  declarations: [],
  imports: [...modules_arr],
  exports: [...modules_arr],
})
export class SharedModules {}
