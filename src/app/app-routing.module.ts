import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { StoreFirstGuard } from './store/storeFirst.guard';

const routes: Routes = [
  {
    path: "store", component: StoreComponent,
    canActivate: [StoreFirstGuard]
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module")
      .then(m => m.AdminModule),
    canActivate: [StoreFirstGuard]
  },
  { path: "**", redirectTo: "/store" }
];



@NgModule({
  providers: [StoreFirstGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
