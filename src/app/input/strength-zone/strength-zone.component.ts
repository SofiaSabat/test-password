import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-strength-zone',
  templateUrl: './strength-zone.component.html',
  styleUrls: ['./strength-zone.component.css']
})
export class StrengthZoneComponent {
  @Input() passwordStrength!: string;  
}
