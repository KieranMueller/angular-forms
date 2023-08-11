import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormValidationComponent } from './forms/reactive-form-validation/reactive-form-validation.component';
import { TemplateDrivenFormValidationComponent } from './forms/template-driven-form-validation/template-driven-form-validation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  {
    path: 'template-driven-form-validation',
    component: TemplateDrivenFormValidationComponent,
  },
  { path: 'reactive-form', component: ReactiveFormComponent },
  {
    path: 'reactive-form-validation',
    component: ReactiveFormValidationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
