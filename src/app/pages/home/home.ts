import { Component } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [CommonModule, Footer]
})
export class Home {}