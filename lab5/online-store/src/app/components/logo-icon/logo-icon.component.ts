import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-icon',
  standalone: true,
  template: `
    <svg width="32" height="32" viewBox="0 0 32 32">
        file:///Users/admin/Downloads/%D0%BA%D0%B0%D1%81%D0%BF%D0%B8%20%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0.svg
      <circle cx="16" cy="16" r="14" fill="#F44336"/>
      <path d="M10 12 L14 12 L14 22 L10 22 Z" fill="white"/>
      <path d="M18 12 L22 12 L22 22 L18 22 Z" fill="white"/>
      <circle cx="16" cy="16" r="4" fill="white"/>
    </svg>
  `
})
export class LogoIconComponent {}