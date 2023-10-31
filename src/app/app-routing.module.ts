import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ReactiveFormValidationComponent } from './forms/reactive-form-validation/reactive-form-validation.component';
import { TemplateDrivenFormValidationComponent } from './forms/template-driven-form-validation/template-driven-form-validation.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { SubscribeComponent } from './observables/subscribe/subscribe.component';
import { AsyncComponent } from './pipes/async/async.component';
import { DatePipeComponent } from './pipes/date-pipe/date-pipe.component';
import { AxiosComponent } from './axios/axios.component';
import { NgifelseComponent } from './ngifnav/ngifelse/ngifelse.component';
import { NgforComponent } from './ngifnav/ngfor/ngfor.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { NgswitchComponent } from './ngifnav/ngswitch/ngswitch.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { ViewParentComponent } from './view-child-nav/view-parent/view-parent.component';
import { MoreViewParentComponent } from './view-child-nav/more-view-parent/more-view-parent.component';
import { MorengforComponent } from './ngifnav/ngfor/morengfor/morengfor.component';
import { MaterialsComponent } from './materialsnav/materials/materials.component';
import { SpinnerComponent } from './materialsnav/spinner/spinner.component';
import { ForkjoinComponent } from './observables/forkjoin/forkjoin.component';
import { ObservableComponent } from './observables/observable/observable.component';
import { AuthguardComponent } from './authguardnav/authguard/authguard.component';
import { SecretComponent } from './authguardnav/secret/secret.component';
import { authGuard } from './authguardnav/auth.guard';
import { routeGuard } from './route-guard-nav/my-account/route.guard';
import { RouterlinkComponent } from './routingnav/routerlink/routerlink.component';
import { NotfoundComponent } from './routingnav/notfound/notfound.component';
import { FirstComponent } from './routingnav/first/first.component';
import { SecondComponent } from './routingnav/second/second.component';
import { SpecialComponent } from './routingnav/special/special.component';
import { AttributeDirectivesStylingComponent } from './attribute-directives-nav/attribute-directives-styling/attribute-directives-styling.component';
import { OfPipeMapComponent } from './rxjs/of-pipe-map/of-pipe-map.component';
import { RxjsFirstComponent } from './rxjs/rxjs-first/rxjs-first.component';
import { SubSinkComponent } from './rxjs/sub-sink/sub-sink.component';
import { BasicUnitTestComponent } from './unit-testing-nav/basic-unit-test/basic-unit-test.component';
import { GraphqlComponent } from './graphqlnav/graphql/graphql.component';
import { NgContentParentComponent } from './content-projection-nav/ng-content/ng-content-parent/ng-content-parent.component';
import { NgTemplateComponent } from './content-projection-nav/ng-template/ng-template.component';
import { NgContainerComponent } from './content-projection-nav/ng-container/ng-container.component';
import { RouteParamsComponent } from './routingnav/route-params/route-params.component';
import { TestParamComponent } from './routingnav/test-param/test-param.component';
import { ConstructorInjectionComponent } from './di-nav/constructor-injection/constructor-injection.component';
import { GetComponent } from './httpclient/get/get.component';
import { PostComponent } from './httpclient/post/post.component';
import { LocalSetComponent } from './local-storage-nav/local-set/local-set.component';
import { LocalGetComponent } from './local-storage-nav/local-get/local-get.component';
import { LocalDeleteComponent } from './local-storage-nav/local-delete/local-delete.component';
import { ResolveComponent } from './resolve-guard-nav/resolve/resolve.component';
import { ResolveGuard } from './resolve-guard-nav/resolve/resolve.guard';
import { NoresolveComponent } from './resolve-guard-nav/noresolve/noresolve.component';
import { CliComponent } from './cli-nav/cli/cli.component';
import { CliCommandsComponent } from './cli-nav/cli-commands/cli-commands.component';
import { MyAccountComponent } from './route-guard-nav/my-account/my-account.component';
import { EditProfileComponent } from './route-guard-nav/edit-profile/edit-profile.component';
import { MemoryLeakComponent } from './observables/memory-leak/memory-leak.component';
import { ScssComponent } from './scss/scss.component';
import { SassComponent } from './scss/sass/sass.component';
import { DragAndDropComponent } from './materialsnav/drag-and-drop/drag-and-drop.component';
import { BadgeComponent } from './materialsnav/badge/badge.component';
import { SignalsComponent } from './signals/signals.component';

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
    path: 'observable',
    component: ObservableComponent,
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
    path: 'ng-for1',
    component: MorengforComponent,
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
  {
    path: 'view-child',
    component: ViewParentComponent,
  },
  {
    path: 'more-view-child',
    component: MoreViewParentComponent,
  },
  {
    path: 'autocomplete',
    component: MaterialsComponent,
  },
  {
    path: 'spinner',
    component: SpinnerComponent,
  },
  {
    path: 'fork-join',
    component: ForkjoinComponent,
  },
  {
    path: 'authguard',
    component: AuthguardComponent,
  },
  {
    path: 'secret',
    component: SecretComponent,
    canActivate: [authGuard],
  },
  {
    path: 'routerlink',
    component: RouterlinkComponent,
    children: [
      {
        path: 'special-route',
        component: SpecialComponent,
      },
    ],
  },
  {
    path: 'first-route',
    component: FirstComponent,
  },
  {
    path: 'second-route',
    component: SecondComponent,
  },
  {
    path: 'styling',
    component: AttributeDirectivesStylingComponent,
  },
  {
    path: 'of-pipe-map',
    component: OfPipeMapComponent,
  },
  {
    path: 'rxjs-first',
    component: RxjsFirstComponent,
  },
  {
    path: 'rxjs-subsink',
    component: SubSinkComponent,
  },
  {
    path: 'basic-unit-test',
    component: BasicUnitTestComponent,
  },
  {
    path: 'graphql',
    component: GraphqlComponent,
  },
  {
    path: 'ng-content',
    component: NgContentParentComponent,
  },
  {
    path: 'ng-template',
    component: NgTemplateComponent,
  },
  {
    path: 'ng-container',
    component: NgContainerComponent,
  },
  {
    path: 'route-params',
    component: RouteParamsComponent,
  },
  {
    path: 'test-param/:id',
    component: TestParamComponent,
  },
  {
    path: 'constructor-injection',
    component: ConstructorInjectionComponent,
  },
  {
    path: 'http-get',
    component: GetComponent,
  },
  {
    path: 'http-post',
    component: PostComponent,
  },
  {
    path: 'local-storage',
    children: [
      { path: 'set', component: LocalSetComponent },
      { path: 'get', component: LocalGetComponent },
      { path: 'remove', component: LocalDeleteComponent },
    ],
  },
  {
    path: 'resolve',
    component: ResolveComponent,
    resolve: {
      data: ResolveGuard,
    },
  },
  {
    path: 'no-resolve',
    component: NoresolveComponent,
  },
  {
    path: 'cli',
    component: CliComponent,
  },
  {
    path: 'commands',
    component: CliCommandsComponent,
  },
  {
    path: 'can-activate',
    component: MyAccountComponent,
    canActivate: [routeGuard],
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canDeactivate: [
      (component: EditProfileComponent) => {
        if (component.saved) return true;
        else return confirm('You have unsaved changes, leave anyway?');
      },
    ],
  },
  {
    path: 'memory-leak',
    component: MemoryLeakComponent,
  },
  {
    path: 'scss',
    component: ScssComponent,
  },
  {
    path: 'sass',
    component: SassComponent,
  },
  {
    path: 'draganddrop',
    component: DragAndDropComponent,
  },
  {
    path: 'badge',
    component: BadgeComponent,
  },
  {
    path: 'signals',
    component: SignalsComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
