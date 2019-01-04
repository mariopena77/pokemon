import { Routes } from "@angular/router";
import { PokeListComponent } from "./containers/poke-list/poke-list.component";

export const routes: Routes = [
    {
        path: 'list',
        component: PokeListComponent
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    }
];