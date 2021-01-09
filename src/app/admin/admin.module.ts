import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { AuthGuard } from './auth.guard';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';

let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent },
  {
    path: "main", component: AdminComponent,//canActivate: [AuthGuard],
    children: [
      { path: "products/:mode/:id", component: ProductEditorComponent },
      { path: "products/:mode", component: ProductEditorComponent },
      { path: "products", component: ProductTableComponent },
      { path: "**", redirectTo: "products" }
    ]
  },
  { path: "**", redirectTo: "auth" }
]);
@NgModule({
  declarations: [
    AuthComponent, 
    AdminComponent, 
    ProductTableComponent, 
    ProductEditorComponent],
 // providers: [AuthGuard],
  imports: [CommonModule, FormsModule, routing],
})
export class AdminModule { }
