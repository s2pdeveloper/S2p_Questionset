import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  template: `
    <div *ngIf="isVisible" class="loading-box"></div>
  `,
  styles: [`
    .loading-box {
      width: 50px;
      height: 50px;
      background-color: #4caf50;
      margin: 100px auto;
      animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `]
})
export class LoadingComponent {
  isVisible = false;

  showSpinner() {
    this.isVisible = true;
  }

  hideSpinner() {
    this.isVisible = false;
  }
}
