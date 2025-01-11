import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent {
  @Input() items: any[] = [];
  @Input() autoSlide: boolean = false;
  @Input() slideInterval: number = 10000; // Intervalo em milissegundos
  currentIndex: number = 0;
  progress: number = 0;
  private autoSlideInterval: any;
  private progressInterval: any;
  private readonly MAX_VISIBLE_INDICATORS = 5;

  @ViewChild('indicatorsContainer', { static: false }) indicatorsContainer!: ElementRef;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.resetProgress();
    this.scrollToActiveIndicator();
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.resetProgress();
    this.scrollToActiveIndicator();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.resetProgress();
    this.scrollToActiveIndicator();
  }

  toggleAutoSlide(): void {
    if (this.autoSlide == false) {
      this.autoSlide = true
    }else{
      this.autoSlide = false
    }
    console.log(this.autoSlide)
    if (this.autoSlide == true) {
      this.startAutoSlide();
    } else {
      this.stopAutoSlide();
    }
  }

  private startAutoSlide(): void {
    this.stopAutoSlide(); // Para evitar múltiplos intervalos
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, this.slideInterval);
    this.startProgress();
  }

  private stopAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
    this.stopProgress();
  }

  private startProgress(): void {
    this.progress = 0;
    const intervalTime = this.slideInterval / 100;
    this.progressInterval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 1;
      } else {
        this.progress = 0;
      }
    }, intervalTime);
  }

  private stopProgress(): void {
    clearInterval(this.progressInterval);
    this.progress = 0;
  }

  private resetProgress(): void {
    this.stopProgress();
    if (this.autoSlide) {
      this.startProgress();
    }
  }

  private scrollToActiveIndicator(): void {
    if (this.indicatorsContainer) {
      const indicators = this.indicatorsContainer.nativeElement;
      const activeIndicator = indicators.children[this.currentIndex];
      if (activeIndicator) {
        const containerWidth = indicators.offsetWidth;
        const indicatorOffset = activeIndicator.offsetLeft;
        const indicatorWidth = activeIndicator.offsetWidth;

        const scrollPosition = indicatorOffset - (containerWidth / 2) + (indicatorWidth / 2);
        indicators.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      } else {
        console.warn('Active indicator is undefined.');
      }
    } else {
      console.warn('Indicators container is undefined.');
    }
  }

  get visibleIndicators(): number[] {
    const totalItems = this.items.length;
    if (totalItems <= this.MAX_VISIBLE_INDICATORS) {
      return Array.from({ length: totalItems }, (_, i) => i);
    }

    const half = Math.floor(this.MAX_VISIBLE_INDICATORS / 2);
    let start = Math.max(this.currentIndex - half, 0);
    let end = start + this.MAX_VISIBLE_INDICATORS;

    if (end > totalItems) {
      end = totalItems;
      start = end - this.MAX_VISIBLE_INDICATORS;
    }

    return Array.from({ length: end - start }, (_, i) => start + i);
  }
}
