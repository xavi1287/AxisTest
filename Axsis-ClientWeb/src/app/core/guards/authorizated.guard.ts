import {Injectable} from '@angular/core'
import {Router, CanActivate} from '@angular/router';
import {StorageService} from '../services/storage.service'

@Injectable()
export class AuthorizatedGuard implements CanActivate {
  constructor(private router: Router,
              private storageService: StorageService) { }

  canActivate() {
    if (this.storageService.isAuthenticated()) {
      // logged in so return true
      console.log(this.storageService.isAuthenticated());
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}

