import { Component } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.css',
})
export class PortofolioComponent {
  images: string[] = [
    '../../assets/poert1 (1).png',
    '../../assets/port2 (1).png',
    '../../assets/port3.png',
    '../../assets/poert1 (1).png',
    '../../assets/port2 (1).png',
    '../../assets/port3.png',
  ];
  layerOpen: boolean = false;
  selectedImage: string | null = '';
  openLayer(image: string): void {
    this.selectedImage = image;
    this.layerOpen = true;
  }
  closeLayer(): void {
    this.layerOpen = false;
    this.selectedImage = null;
  }
}
