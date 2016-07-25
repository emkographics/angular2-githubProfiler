import { provideRouter, RouterConfig } from '@angular/router';
import {ProfilerComponent} from "./components/pages/profiler.component";

const routes: RouterConfig = [
    {path: '', component: ProfilerComponent},
];

export const appRouterProviders = [
    provideRouter(routes)
];