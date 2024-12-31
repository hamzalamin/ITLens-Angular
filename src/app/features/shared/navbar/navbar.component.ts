import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgIf
  ],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
