import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../auth/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService) { }

  ngOnInit(): void {

  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  getUsername(): string {
    return this.userService.getUsername();
  }

  logout(): void {
    this.userService.logout();
  }

  changeColour(): void {
    const body = document.querySelector('body');
    const curr = body.classList.contains('core-light');
    if (curr) {
      body.className = '';
      body.classList.add('core-dark');
    } else {
      body.className = '';
      body.classList.add('core-light');
    }
  }

  requestFullscreen(): void {
    const e: any = document.body;
    const d: any = document;
    if (e.requestFullscreen) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        e.requestFullscreen();
      }
    } else if (e.webkitRequestFullscreen) {
      if (document.webkitFullscreenElement) {
        document.webkitExitFullscreen();
      } else {
        e.webkitRequestFullscreen();
      }
    } else if (e.mozRequestFullScreen) {
      if (d.mozFullScreenElement) {
        d.mozCancelFullScreen();
      } else {
        e.mozRequestFullScreen();
      }
    }
  }
}
