import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, Header, Footer, RouterModule],
  templateUrl: './terms.html',
  styleUrls: ['./terms.scss']
})
export class Terms implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.observeScrollAnimations();
    this.insertWebPageSchema();
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

  private insertWebPageSchema(): void {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = `
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Términos y condiciones de Autonaxe",
      "description": "Consulta los términos y condiciones de uso de Autonaxe. Revisa las normas de uso de la plataforma y la información legal sobre nuestros servicios.",
      "url": "https://www.autonaxe.com/terminos",
      "about": {
        "@type": "Thing",
        "name": "Autonaxe - Plataforma de gestión para autónomos",
        "description": "Autonaxe es una plataforma online gratuita para autónomos en España que permite gestionar facturación, modelos fiscales, gastos y clientes."
      },
      "publisher": {
        "@type": "Organization",
        "name": "Autonaxe",
        "url": "https://www.autonaxe.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.autonaxe.com/assets/logoTexto.png"
        }
      }
    }
    `;
    this.renderer.appendChild(document.head, script);
  }
}