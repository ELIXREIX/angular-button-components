# Angular Button Components with Tabler Icons

A comprehensive collection of reusable button components built with Angular 18, Tailwind CSS, and Tabler Icons. This branch demonstrates the same button functionality using Tabler Icons instead of Lucide Icons.

## 🌟 Features

- **Angular 18**: Modern Angular with Standalone Components
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Tabler Icons**: Beautiful, customizable SVG icons
- **TypeScript**: Full type safety and better developer experience
- **Responsive Design**: Works perfectly on all device sizes
- **Hover Effects**: Smooth transitions and interactive states
- **Custom Styling**: Mail button with custom purple color (#7E55D3)
- **Border Customization**: 2px border thickness with 8px rounded corners

## 🎨 Icon Library Comparison

### Tabler Icons Branch (Current)
- **Library**: @tabler/icons 
- **Style**: Clean, consistent outline icons
- **Size**: Optimized 16px (1rem) icons
- **Rendering**: Custom Angular service with SVG injection
- **Performance**: Lightweight SVG rendering
- **Customization**: Full control over icon styling

### Main Branch (Lucide Icons)
- **Library**: lucide-angular
- **Style**: Modern outline icons
- **Integration**: Direct Angular component integration
- **Performance**: Component-based rendering

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- Angular CLI (v18)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ELIXREIX/angular-button-components.git
   cd angular-button-components
   ```

2. **Switch to Tabler Icons branch**
   ```bash
   git checkout tabler-icons
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   ng serve
   ```

5. **Open in browser**
   Navigate to `http://localhost:4200`

## 📦 Dependencies

### Core Dependencies
- `@angular/core`: ^18.0.0
- `@angular/common`: ^18.0.0
- `@angular/platform-browser`: ^18.0.0
- `@tabler/icons`: ^3.34.1
- `tailwindcss`: ^3.4.17

### Development Dependencies
- `@angular/cli`: ^18.0.0
- `typescript`: ~5.4.0

## 🎯 Button Types

The component showcase includes 12 different button types with both Default and Hover states:

### Available Buttons

1. **Back Button** - Navigation with arrow-left icon
2. **Search Button** - Primary action with search icon  
3. **Clear All Button** - Secondary action with eraser icon
4. **Add Data Button** - Creation action with plus icon
5. **Delete Data Button** - Destructive action with trash icon
6. **Save Data Button** - Success action with device-floppy icon
7. **Cancel Button** - Secondary action with x icon
8. **Return Button** - Warning action with arrow-back-up icon
9. **Approve Button** - Success action with circle-check icon
10. **Not Approve Button** - Destructive action with x icon
11. **Export Button** - Primary action with download icon
12. **Send Email Button** - Custom purple with mail icon

## 🔧 Technical Implementation

### Tabler Icon Service
```typescript
@Injectable({
  providedIn: 'root'
})
export class TablerIconService {
  private iconMap: { [key: string]: string } = {
    'arrow-left': '<svg>...</svg>',
    // ... other icons
  };

  getIcon(name: string): SafeHtml {
    const iconSvg = this.iconMap[name];
    return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
  }
}
```

### Tabler Icon Component
```typescript
@Component({
  selector: 'tabler-icon',
  standalone: true,
  template: `<span [innerHTML]="iconHtml" [class]="class"></span>`,
  styles: [`
    :host ::ng-deep svg {
      width: 1rem;
      height: 1rem;
      flex-shrink: 0;
    }
  `]
})
export class TablerIconComponent { }
```

### Usage Example
```html
<button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2">
  <tabler-icon name="search" class="w-4 h-4"></tabler-icon>
  Search
</button>
```

## 🎨 Styling

### Global Button Styles
```css
button {
  border-width: 2px !important;
  border-radius: 8px !important;
}

button .gap-2 {
  gap: 0.5rem !important;
}

button tabler-icon {
  flex-shrink: 0;
}
```

### Custom Mail Button
```css
.mail-button {
  border-color: #7E55D3 !important;
  color: #7E55D3 !important;
}

.mail-button:hover {
  background-color: #f3f0ff !important;
}
```

### Color Palette
- **Primary Blue**: #3B82F6 (bg-blue-500)
- **Success Green**: #10B981 (bg-green-500)  
- **Warning Yellow**: #F59E0B (bg-yellow-500)
- **Danger Red**: #EF4444 (bg-red-500)
- **Custom Purple**: #7E55D3 (mail button)
- **Neutral Gray**: #6B7280 (bg-gray-600)

## 🔄 Branch Comparison

### Switch Between Icon Libraries

**To Lucide Icons (main branch):**
```bash
git checkout main
npm install
ng serve
```

**To Tabler Icons (current branch):**
```bash
git checkout tabler-icons
npm install  
ng serve
```

## 📱 Responsive Design

All buttons are fully responsive and work across:
- Desktop screens (1024px+)
- Tablet screens (768px - 1023px)
- Mobile screens (320px - 767px)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── buttons/
│   │   ├── buttons.component.html    # Button templates
│   │   ├── buttons.component.ts      # Component logic
│   │   └── buttons.component.css     # Custom styles
│   ├── components/
│   │   └── tabler-icon.component.ts  # Tabler Icon component
│   ├── services/
│   │   └── tabler-icon.service.ts    # Icon service
│   ├── app.component.html            # Main app template
│   ├── app.component.ts              # Root component
│   └── app.config.ts                 # App configuration
├── styles.css                        # Global styles
└── main.ts                           # Application bootstrap
```

## 🔧 Customization

### Adding New Icons

1. **Add SVG to service**
   ```typescript
   private iconMap: { [key: string]: string } = {
     'new-icon': '<svg>...</svg>',
     // ... existing icons
   };
   ```

2. **Use in template**
   ```html
   <tabler-icon name="new-icon" class="w-4 h-4"></tabler-icon>
   ```

### Adding New Button Types

```html
<button class="px-6 py-2 bg-indigo-500 border border-transparent text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200 flex items-center gap-2">
  <tabler-icon name="your-icon" class="w-4 h-4"></tabler-icon>
  Your Action
</button>
```

### Icon Size Customization

```css
/* Custom icon sizes */
.icon-small tabler-icon svg {
  width: 0.75rem;
  height: 0.75rem;
}

.icon-large tabler-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}
```

## 🧪 Testing

### Run Tests
```bash
# Unit tests
ng test

# E2E tests  
ng e2e

# Build for production
ng build --prod
```

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow Angular style guide
- Use TypeScript strict mode
- Write meaningful commit messages
- Add tests for new features
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tabler Icons](https://tabler.io/icons) - Beautiful SVG icons
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework  
- [Angular](https://angular.io) - Modern web framework

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Branch**: `tabler-icons` | **Version**: 2.0.0 | **Updated**: August 26, 2025
