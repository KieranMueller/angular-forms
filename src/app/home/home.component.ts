import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loading = false;
  theme = 'dark';
  hasName = false;
  name = '';
  search = '';
  searched: any = {
    cli: false,
    material: false,
    apollo: false,
    attDirectives: false,
    guard: false,
    axios: false,
    behaviorSubject: false,
    contentProj: false,
    dependencyInjection: false,
    forms: false,
    httpClient: false,
    input: false,
    inputMask: false,
    localStorage: false,
    observables: false,
    output: false,
    pipes: false,
    routing: false,
    rxjs: false,
    structDirectives: false,
    viewChild: false,
    resolve: false,
  };
  tags: any = {
    cli: [
      'cli',
      'cmd',
      'command line interface',
      'interface',
      'terminal',
      'prompt',
      'powershell',
      'bash',
      'ubuntu',
      'linux',
      'windows',
      'ng',
      'angular',
      'install',
      'generate',
    ],
    material: [
      'material',
      'angular material',
      'materials',
      'loading',
      'spinner',
      'mat',
      'mat-',
      'dropdown',
      'suggest',
      'suggestion',
      'auto',
      'autocomplete',
    ],
    apollo: [
      'apollo',
      'graph',
      'graphy',
      'ql',
      'sql',
      'graphql',
      'query',
      'term',
      'search',
      'http',
      'apollo-angular',
      'gql',
      'watchQuery',
      'apollomodule',
      'cache',
      'createapollo',
      'graphqlmodule',
    ],
    attDirectives: [
      'attribute',
      'directive',
      'directives',
      'style',
      'styles',
      'styling',
      'class',
      'classes',
      'condition',
      'ngclass',
      '[ngclass]',
      '[ng-class]',
      '[ngstyle]',
      '[ng-style]',
      'css',
      'ngclass',
      'ng-class',
      'ngstyle',
      'ngstyles',
      'ng-style',
    ],
    guard: [
      'authguard',
      'auth-guard',
      'canactivatefn',
      'canactivatefunction',
      'protection',
      'safety',
      'route',
      'guard',
      'service',
      'credentials',
      'authservice',
      'lock',
      'username',
      'password',
      'login',
      'logon',
      'authorization',
      'injectable',
      'secret',
      'authentication',
      'security',
      'secure',
      'enable',
    ],
    axios: [
      'axios',
      'request',
      'response',
      'http',
      'get',
      'post',
      'put',
      'patch',
      'delete',
      'crud',
      'headers',
    ],
    behaviorSubject: [
      'behavior',
      'subject',
      'service',
      'sharing',
      'data',
      'service',
      'injection',
      'behaviorsubject',
    ],
    contentProj: [
      'content',
      'projection',
      'ngcontent',
      'ng-content',
      'ngtemplate',
      'ng-template',
      'template',
      'ngcontainer',
      'ng-container',
      'container',
      'parent',
      'child',
      'render',
      'html',
    ],
    dependencyInjection: [
      'dependency',
      'injection',
      'dependency injection',
      'constructor',
      'private',
      'property',
      'fields',
    ],
    forms: [
      'forms',
      'template driven',
      'reactive driven',
      'validation',
      'submit',
      'controls',
      'form control',
      'validators',
    ],
    httpClient: [
      'request',
      'response',
      'httpclient',
      'http-client',
      'client',
      'http client',
      'get',
      'post',
      'put',
      'patch',
      'delete',
      'crud',
      'headers',
      'send',
      'recieve',
    ],
    input: [
      'input()',
      '@input()',
      'parent',
      'child',
      'relationship',
      'between',
      'components',
      'data',
      'sharing',
    ],
    inputMask: [
      'input masking',
      'masking',
      'ngx-mask@',
      '[mask]',
      'phone number',
      'fields',
    ],
    localStorage: [
      'local storage',
      'storage',
      'localstorage.setitem()',
      'setitem()',
      'getitem()',
      'removeitem()',
      'saving',
      'storing',
      'client',
      'server',
      'stash',
      'cache',
    ],
    observables: [
      'observables',
      'subscribe',
      'next',
      'complete',
      'ondestroy',
      'subscription',
    ],
    output: [
      'output',
      '@output()',
      'event emitter',
      'eventemitter()',
      'emit',
      'parent',
      'child',
      'sharing',
      'data',
    ],
    pipes: ['custom', 'pipes', 'async', 'json', 'dates', 'filter', 'html'],
    routing: [
      'routes',
      'routingmodule',
      'routing.module',
      'routerlink',
      'params',
      '404',
      'not found',
      'children',
    ],
    rxjs: [
      'rxjs',
      'reactive',
      'javascript',
      'library',
      'state',
      'of',
      'pipe',
      'map',
    ],
    structDirectives: [
      'structural directives',
      'directives',
      'ngif',
      'ngelse',
      'if',
      'else',
      'ngfor',
      'ngswitch',
      'ng-for',
      'ng-switch',
      'ng-if',
      '[ngfor]',
      '*ngif',
      'conditionally',
      'template',
      'html',
    ],
    viewChild: [
      'viewchild',
      '@viewchild()',
      'child',
      'parent',
      'textref',
      'elementref',
      'nativeelement',
    ],
    resolve: [
      'resolve',
      'guard',
      'loading',
      'wait',
      'page',
      'service',
      'canactivate',
      'route',
      'routing',
    ],
  };

  ngOnInit() {
    const name = localStorage.getItem('nickname');
    if (name) {
      this.name = name;
      this.hasName = true;
    }
    const theme = localStorage.getItem('theme');
    if (theme) this.theme = theme;
  }

  setName() {
    this.hasName = true;
    localStorage.setItem('nickname', this.name);
  }

  editName() {
    this.hasName = false;
  }

  setTheme() {
    if (this.theme === 'dark') this.theme = 'light';
    else if (this.theme === 'light') this.theme = 'dark';
    localStorage.setItem('theme', this.theme);
  }

  handleSearch() {
    const search = this.search.toLocaleLowerCase().trim();
    Object.keys(this.tags).forEach((tagArr) => {
      for (let tag of this.tags[tagArr]) {
        if (tag.startsWith(search) && search) {
          this.searched[tagArr] = true;
          return;
        } else this.searched[tagArr] = false;
      }
    });
  }
}
