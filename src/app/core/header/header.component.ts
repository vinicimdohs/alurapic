import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../user/user";
import { UserService } from "../user/user.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    user$: Observable<User>;


    constructor(private userService : UserService, private router: Router){
      this.user$ = this.userService.getUser();

    }

    logout(){
      this.userService.logout();
      this.router.navigate(['']);
    }
}
