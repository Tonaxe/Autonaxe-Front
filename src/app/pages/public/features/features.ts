import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../../shared/header/header';
import { Footer } from '../../../shared/footer/footer';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './features.html',
  styleUrls: ['./features.scss']
})
export class Features implements AfterViewInit {
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
