import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  animations: [
    trigger('dropdownAnimation', [
      state('closed', style({ height: '0', opacity: 0, overflow: 'hidden' })),
      state('open', style({ height: '*', opacity: 1 })),
      transition('closed <=> open', animate('250ms ease-in-out')),
    ])
  ]
})
export class Header {
  isMenuOpen = false;
  menuVisible = false;

  toggleMenu() {
    if (!this.isMenuOpen) {
      this.menuVisible = true;
      setTimeout(() => {
        this.isMenuOpen = true;
      }, 10);
    } else {
      this.isMenuOpen = false;
      setTimeout(() => {
        this.menuVisible = false;
      }, 100);
    }
  }
}
