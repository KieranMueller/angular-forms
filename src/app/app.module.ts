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
import { InputMaskComponent } from './input-mask/input-mask.component';
import { NgxMaskModule } from 'ngx-mask';
import { ObservablesComponent } from './observables/observables.component';
import { SubscribeComponent } from './observables/subscribe/subscribe.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { PipesComponent } from './pipes/pipes.component';
import { AsyncComponent } from './pipes/async/async.component';
import { DatePipeComponent } from './pipes/date-pipe/date-pipe.component';
import { AxiosComponent } from './axios/axios.component';
import { NgifelseComponent } from './ngifnav/ngifelse/ngifelse.component';
import { NgifnavComponent } from './ngifnav/ngifnav.component';
import { NgforComponent } from './ngifnav/ngfor/ngfor.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { Component1Component } from './behavior-subject/component1/component1.component';
import { Component2Component } from './behavior-subject/component2/component2.component';
import { Component3Component } from './behavior-subject/component3/component3.component';
import { NgswitchComponent } from './ngifnav/ngswitch/ngswitch.component';
import { InputComponent } from './input/input.component';
import { ChildComponent } from './input/child/child.component';
import { ParentComponent } from './input/parent/parent.component';
import { OutputComponent } from './output/output.component';
import { OutputParentComponent } from './output/output-parent/output-parent.component';
import { OutputChildComponent } from './output/output-child/output-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ViewChildComponent } from './view-child-nav/view-child/view-child.component';
import { ViewChildNavComponent } from './view-child-nav/view-child-nav.component';
import { ViewParentComponent } from './view-child-nav/view-parent/view-parent.component';
import { MoreViewParentComponent } from './view-child-nav/more-view-parent/more-view-parent.component';
import { MorengforComponent } from './ngifnav/ngfor/morengfor/morengfor.component';
import { MaterialsnavComponent } from './materialsnav/materialsnav.component';
import { MaterialsComponent } from './materialsnav/materials/materials.component';
import { SpinnerComponent } from './materialsnav/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ForkjoinComponent } from './observables/forkjoin/forkjoin.component';
import { ObservableComponent } from './observables/observable/observable.component';
import { AuthguardnavComponent } from './authguardnav/authguardnav.component';
import { AuthguardComponent } from './authguardnav/authguard/authguard.component';
import { SecretComponent } from './authguardnav/secret/secret.component';
import { RoutingnavComponent } from './routingnav/routingnav.component';
import { RouterlinkComponent } from './routingnav/routerlink/routerlink.component';
import { NotfoundComponent } from './routingnav/notfound/notfound.component';
import { FirstComponent } from './routingnav/first/first.component';
import { SecondComponent } from './routingnav/second/second.component';
import { SpecialComponent } from './routingnav/special/special.component';
import { AttributeDirectivesNavComponent } from './attribute-directives-nav/attribute-directives-nav.component';
import { AttributeDirectivesStylingComponent } from './attribute-directives-nav/attribute-directives-styling/attribute-directives-styling.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { OfPipeMapComponent } from './rxjs/of-pipe-map/of-pipe-map.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenFormValidationComponent,
    ReactiveFormComponent,
    ReactiveFormValidationComponent,
    FormsComponent,
    InputMaskComponent,
    ObservablesComponent,
    SubscribeComponent,
    PipesComponent,
    AsyncComponent,
    DatePipeComponent,
    AxiosComponent,
    NgifelseComponent,
    NgifnavComponent,
    NgforComponent,
    BehaviorSubjectComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    NgswitchComponent,
    InputComponent,
    ChildComponent,
    ParentComponent,
    OutputComponent,
    OutputParentComponent,
    OutputChildComponent,
    ViewChildComponent,
    ViewParentComponent,
    ViewChildNavComponent,
    MoreViewParentComponent,
    MorengforComponent,
    MaterialsnavComponent,
    MaterialsComponent,
    SpinnerComponent,
    ForkjoinComponent,
    ObservableComponent,
    AuthguardnavComponent,
    AuthguardComponent,
    SecretComponent,
    RoutingnavComponent,
    RouterlinkComponent,
    NotfoundComponent,
    FirstComponent,
    SecondComponent,
    SpecialComponent,
    AttributeDirectivesNavComponent,
    AttributeDirectivesStylingComponent,
    RxjsComponent,
    OfPipeMapComponent,
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
