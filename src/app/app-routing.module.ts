import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormValidationComponent } from './forms/reactive-form-validation/reactive-form-validation.component';
import { TemplateDrivenFormValidationComponent } from './forms/template-driven-form-validation/template-driven-form-validation.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { ObservablesComponent } from './observables/observables.component';
import { SubscribeComponent } from './observables/subscribe/subscribe.component';
import { PipesComponent } from './pipes/pipes.component';
import { AsyncComponent } from './pipes/async/async.component';
import { DatePipeComponent } from './pipes/date-pipe/date-pipe.component';
import { AxiosComponent } from './axios/axios.component';
import { NgifelseComponent } from './ngifnav/ngifelse/ngifelse.component';
import { NgifnavComponent } from './ngifnav/ngifnav.component';
import { NgforComponent } from './ngifnav/ngfor/ngfor.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { NgswitchComponent } from './ngifnav/ngswitch/ngswitch.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
  {
    path: 'input-mask',
    component: InputMaskComponent,
  },
  {
    path: 'subscribe',
    component: SubscribeComponent,
  },
  {
    path: 'async-pipe',
    component: AsyncComponent,
  },
  {
    path: 'date-pipe',
    component: DatePipeComponent,
  },
  {
    path: 'axios',
    component: AxiosComponent,
  },
  {
    path: 'ng-if-else',
    component: NgifelseComponent,
  },
  {
    path: 'ng-for',
    component: NgforComponent,
  },
  {
    path: 'ng-switch',
    component: NgswitchComponent,
  },
  {
    path: 'behavior-subject',
    component: BehaviorSubjectComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'output',
    component: OutputComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
