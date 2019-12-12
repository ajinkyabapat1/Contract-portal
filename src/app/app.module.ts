import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatCardModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSliderModule,
  MatChipsModule,
  MatAutocompleteModule
 
} from '@angular/material';
import { SidenavListComponentComponent } from './navigation/sidenav-list-component/sidenav-list-component.component';
import { HeaderComponentComponent } from './navigation/header-component/header-component.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './user/about/about.component';
import { SkillsComponent } from './user/skills/skills.component';
import { AvailabilityComponent } from './user/availability/availability.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavListComponentComponent,
    HeaderComponentComponent,
    UserComponent,
    AboutComponent,
    SkillsComponent,
    AvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatCardModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  MatChipsModule,
  MatAutocompleteModule,
FormsModule,
MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
