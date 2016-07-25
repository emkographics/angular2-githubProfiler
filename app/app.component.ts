import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilerComponent } from "./components/pages/profiler.component";
import { GithubService } from "./components/services/github.services";

@Component({
    selector: 'my-app',
    template: `
      <navbar></navbar>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    `,
    directives: [ROUTER_DIRECTIVES, NavbarComponent, ProfilerComponent],
    providers: [GithubService, HTTP_PROVIDERS]
})

export class AppComponent {

}
