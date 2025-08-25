import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { TablerIconService } from '../services/tabler-icon.service';

@Component({
  selector: 'tabler-icon',
  standalone: true,
  template: `<span [innerHTML]="iconHtml" [class]="class" class="inline-flex items-center"></span>`,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    :host ::ng-deep svg {
      width: 1rem;
      height: 1rem;
      flex-shrink: 0;
    }
    :host.w-4 ::ng-deep svg {
      width: 1rem;
      height: 1rem;
    }
    :host.h-4 ::ng-deep svg {
      width: 1rem;
      height: 1rem;
    }
  `]
})
export class TablerIconComponent implements OnInit {
  @Input() name!: string;
  @Input() class: string = '';
  
  iconHtml: SafeHtml = '';

  constructor(private tablerIconService: TablerIconService) {}

  ngOnInit() {
    this.iconHtml = this.tablerIconService.getIcon(this.name);
  }
}
