import { Session } from '../models/session.model';
import { Router } from '@angular/router';
import { Usuario } from '../models/user.model';
export class StorageService {
  private localStorageService: Storage;
  private currentSession: Session = null;
  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }
  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
  }
  loadSessionData(): Session {
    const sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? JSON.parse(sessionStr) as Session : null;
  }
  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
  }
  getCurrentUser(): Usuario {
    const session: Session = this.getCurrentSession();
    return (session && session.usuario) ? session.usuario : null;
  }
  isAuthenticated(): boolean {
    return (this.getCurrentUser() != null) ? true : false;
  }
  logout(): void {
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }
}
