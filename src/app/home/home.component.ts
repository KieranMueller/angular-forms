import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hasName = false;
  name = '';
  search = '';
  searched = {
    material: false,
    apollo: false,
    attDirectives: false,
    guard: false,
    axios: false,
    contentProj: false,
    behaviorSubject: false,
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
  };

  ngOnInit() {
    const name = localStorage.getItem('nickname');
    if (name) {
      this.name = name;
      this.hasName = true;
    }
  }

  setName() {
    this.hasName = true;
    localStorage.setItem('nickname', this.name);
  }

  editName() {
    this.hasName = false;
  }

  handleSearch() {
    const search = this.search.toLowerCase();
    const materialTags = [
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
    ];
    const apolloTags = [
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
    ];
    const attDirectivesTags = [
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
    ];
    const guardTags = [
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
    ];
    const axiosTags = [
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
    ];
    const behaviorSubjectTags = [
      'behavior',
      'subject',
      'service',
      'sharing',
      'data',
      'service',
      'injection',
      'behaviorsubject',
    ];
    const contentProjTags = [
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
    ];
    const dependencyInjectionTags = [
      'dependency',
      'injection',
      'dependency injection',
      'constructor',
      'private',
      'property',
      'fields',
    ];
    const formsTags = [
      'forms',
      'template driven',
      'reactive driven',
      'validation',
      'submit',
      'controls',
      'form control',
      'validators',
    ];
    const httpClientTags = [
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
    ];
    const inputTags = [
      'input()',
      '@input()',
      'parent',
      'child',
      'relationship',
      'between',
      'components',
      'data',
      'sharing',
    ];
    const inputMaskTags = [
      'input masking',
      'masking',
      'ngx-mask@',
      '[mask]',
      'phone number',
      'fields',
    ];
    const localStorageTags = [
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
    ];
    const observablesTags = [
      'observables',
      'subscribe',
      'next',
      'complete',
      'ondestroy',
      'subscription',
    ];
    const outputTags = [
      'output',
      '@output()',
      'event emitter',
      'eventemitter()',
      'emit',
      'parent',
      'child',
      'sharing',
      'data',
    ];
    const pipesTags = [
      'custom',
      'pipes',
      'async',
      'json',
      'dates',
      'filter',
      'html',
    ];
    const routingTags = [
      'routes',
      'routingmodule',
      'routing.module',
      'routerlink',
      'params',
      '404',
      'not found',
      'children',
    ];
    const rxjsTags = [
      'rxjs',
      'reactive',
      'javascript',
      'library',
      'state',
      'of',
      'pipe',
      'map',
    ];
    const structDirectivesTags = [
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
    ];
    const viewChildTags = [
      'viewchild',
      '@viewchild()',
      'child',
      'parent',
      'textref',
      'elementref',
      'nativeelement',
    ];
    for (let term of materialTags) {
      if (term.startsWith(search) && search) {
        this.searched.material = true;
        break;
      } else this.searched.material = false;
    }
    for (let term of apolloTags) {
      if (term.startsWith(search) && search) {
        this.searched.apollo = true;
        break;
      } else this.searched.apollo = false;
    }
    for (let term of attDirectivesTags) {
      if (term.startsWith(search) && search) {
        this.searched.attDirectives = true;
        break;
      } else this.searched.attDirectives = false;
    }
    for (let term of guardTags) {
      if (term.startsWith(search) && search) {
        this.searched.guard = true;
        break;
      } else this.searched.guard = false;
    }
    for (let term of axiosTags) {
      if (term.startsWith(search) && search) {
        this.searched.axios = true;
        break;
      } else this.searched.axios = false;
    }
    for (let term of behaviorSubjectTags) {
      if (term.startsWith(search) && search) {
        this.searched.behaviorSubject = true;
        break;
      } else this.searched.behaviorSubject = false;
    }
    for (let term of contentProjTags) {
      if (term.startsWith(search) && search) {
        this.searched.contentProj = true;
        break;
      } else this.searched.contentProj = false;
    }
    for (let term of dependencyInjectionTags) {
      if (term.startsWith(search) && search) {
        this.searched.dependencyInjection = true;
        break;
      } else this.searched.dependencyInjection = false;
    }
    for (let term of formsTags) {
      if (term.startsWith(search) && search) {
        this.searched.forms = true;
        break;
      } else this.searched.forms = false;
    }
    for (let term of httpClientTags) {
      if (term.startsWith(search) && search) {
        this.searched.httpClient = true;
        break;
      } else this.searched.httpClient = false;
    }
    for (let term of inputTags) {
      if (term.startsWith(search) && search) {
        this.searched.input = true;
        break;
      } else this.searched.input = false;
    }
    for (let term of inputMaskTags) {
      if (term.startsWith(search) && search) {
        this.searched.inputMask = true;
        break;
      } else this.searched.inputMask = false;
    }
    for (let term of localStorageTags) {
      if (term.startsWith(search) && search) {
        this.searched.localStorage = true;
        break;
      } else this.searched.localStorage = false;
    }
    for (let term of observablesTags) {
      if (term.startsWith(search) && search) {
        this.searched.observables = true;
        break;
      } else this.searched.observables = false;
    }
    for (let term of outputTags) {
      if (term.startsWith(search) && search) {
        this.searched.output = true;
        break;
      } else this.searched.output = false;
    }
    for (let term of pipesTags) {
      if (term.startsWith(search) && search) {
        this.searched.pipes = true;
        break;
      } else this.searched.pipes = false;
    }
    for (let term of routingTags) {
      if (term.startsWith(search) && search) {
        this.searched.routing = true;
        break;
      } else this.searched.routing = false;
    }
    for (let term of rxjsTags) {
      if (term.startsWith(search) && search) {
        this.searched.rxjs = true;
        break;
      } else this.searched.rxjs = false;
    }
    for (let term of structDirectivesTags) {
      if (term.startsWith(search) && search) {
        this.searched.structDirectives = true;
        break;
      } else this.searched.structDirectives = false;
    }
    for (let term of viewChildTags) {
      if (term.startsWith(search) && search) {
        this.searched.viewChild = true;
        break;
      } else this.searched.viewChild = false;
    }
  }
}
