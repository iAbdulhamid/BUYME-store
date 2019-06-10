import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'BUYME-Store';

  constructor (private authService: AuthService, 
               private route: ActivatedRoute, 
               private router: Router,
               private userService: UserService) {
 
    this.authService.user$.subscribe(user=>{
      if(user){
        this.userService.save(user);
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
            router.navigateByUrl(returnUrl);
      }
    })
  }

}
