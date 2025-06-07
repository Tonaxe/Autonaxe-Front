import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../../shared/header/header';
import { Footer } from '../../../shared/footer/footer';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './faq.html',
  styleUrls: ['./faq.scss']
})
export class Faq implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.observeScrollAnimations();
    this.insertFaqSchema();
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

  private insertFaqSchema(): void {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = `
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Autonaxe es realmente gratis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, Autonaxe es 100% gratuito en su versión básica. Puedes crear facturas, registrar gastos y consultar tu dashboard financiero sin coste. Algunas funcionalidades avanzadas serán opcionales en el futuro."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo presentar modelos fiscales con Autonaxe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Por supuesto. Autonaxe genera automáticamente modelos como el 303, 130 o 390 listos para presentar en Hacienda. Este proceso es completamente automatizado."
          }
        },
        {
          "@type": "Question",
          "name": "¿Mis datos están seguros en Autonaxe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutamente. En Autonaxe aplicamos medidas de seguridad avanzadas: cifrado de datos, copias de seguridad automáticas y cumplimiento del RGPD para garantizar tu privacidad."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo usar Autonaxe desde el móvil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Autonaxe es una plataforma 100% online y responsive. Puedes gestionar tu actividad desde cualquier dispositivo: ordenador, tablet o móvil."
          }
        },
        {
          "@type": "Question",
          "name": "¿Necesito tener conocimientos contables para usar Autonaxe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Autonaxe está pensado para que cualquier autónomo pueda gestionar su facturación y sus impuestos de forma automática y sin necesidad de conocimientos contables."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo subir tickets y facturas de gastos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. La subida de tickets y facturas de gasto está disponible. Puedes hacerlo desde tu móvil o tu ordenador, para mantener un registro digital completo en Autonaxe."
          }
        },
        {
          "@type": "Question",
          "name": "¿Autonaxe calcula automáticamente mis impuestos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Autonaxe calcula automáticamente el IVA e IRPF en cada factura y en tu resumen fiscal. Así sabrás en todo momento cuánto debes declarar y pagar a Hacienda."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo usar Autonaxe si trabajo con clientes internacionales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Puedes facturar en diferentes monedas y configurar tus facturas para clientes internacionales. Autonaxe soporta facturación sin IVA para clientes intracomunitarios y extracomunitarios."
          }
        },
        {
          "@type": "Question",
          "name": "¿Autonaxe se actualiza automáticamente?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. No tienes que instalar nada ni actualizar manualmente. Autonaxe se actualiza automáticamente en la nube, siempre tendrás acceso a la versión más reciente con las últimas mejoras."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué soporte ofrece Autonaxe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El sistema está diseñado para que todo funcione de forma automática. Sin embargo, dispones de un centro de ayuda y próximamente contaremos con soporte por chat en la plataforma para dudas específicas."
          }
        }
      ]
    }
    `;
    this.renderer.appendChild(document.head, script);
  }
}