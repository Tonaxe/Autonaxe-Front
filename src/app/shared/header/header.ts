import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})

export class Header {
  isMenuOpen = false;
  menuVisible = false;
  isHomePage: boolean;

  constructor(private router: Router) {
    this.isHomePage = this.router.url === '/';
  }

  toggleMenu() {
    if (!this.isMenuOpen) {
      this.menuVisible = true;
      setTimeout(() => this.isMenuOpen = true, 10);
    } else {
      this.isMenuOpen = false;
      setTimeout(() => this.menuVisible = false, 100);
    }
  }
}