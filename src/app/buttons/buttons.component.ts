import { Component } from '@angular/core';
import { LucideAngularModule, ArrowLeft, Search, Eraser, Plus, Save, X, Redo2, Check, FileDown, FileText, Mail, CircleCheckBig, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  readonly ArrowLeft = ArrowLeft;
  readonly Search = Search;
  readonly Eraser = Eraser;
  readonly Plus = Plus;
  readonly Save = Save;
  readonly X = X;
  readonly Redo2 = Redo2;
  readonly Check = Check;
  readonly FileDown = FileDown;
  readonly FileText = FileText;
  readonly Mail = Mail;
  readonly CircleCheckBig = CircleCheckBig;
  readonly Trash2 = Trash2;
}