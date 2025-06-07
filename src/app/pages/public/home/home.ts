import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../../../shared/footer/footer';
import { Header } from '../../../shared/header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [CommonModule, Footer, Header]
})
export class Home implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.observeScrollAnimations();
  }

  private observeScrollAnimations(): void {
    const animatedElements: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll(
      '.animate-on-scroll, .animate-star-fall'
    );

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;

            if (el.classList.contains('animate-on-scroll')) {
              this.renderer.addClass(el, 'in-view');
            }

            if (el.classList.contains('animate-star-fall')) {
              this.renderer.setStyle(el, 'animation-play-state', 'running');
            }

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedElements.forEach(el => observer.observe(el));
  }
}