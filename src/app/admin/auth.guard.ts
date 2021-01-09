import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { RestDataSource } from "../model/rest.datasource";

@Injectable()
export class AuthGuard {
constructor(private router: Router,
                private data:RestDataSource) { }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.data.auth_token==null) {
            this.router.navigateByUrl("/admin/auth");
            return false;
        }
        return true;
    }
}
