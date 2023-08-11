import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenFormValidationComponent } from './forms/template-driven-form-validation/template-driven-form-validation.component';
import { ReactiveFormValidationComponent } from './forms/reactive-form-validation/reactive-form-validation.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenFormValidationComponent,
    ReactiveFormComponent,
    ReactiveFormValidationComponent,
    FormsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
