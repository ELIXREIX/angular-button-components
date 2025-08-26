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

### Angular 18 (Current)
- `@angular/core`: ^18.0.0
- `@angular/common`: ^18.0.0
- `@angular/platform-browser`: ^18.0.0
- `@tabler/icons`: ^3.34.1
- `tailwindcss`: ^3.4.17
- `typescript`: ~5.4.0

### Angular 16 Compatibility

#### ⚠️ Potential Issues with Angular 16:

1. **Standalone Components**: 
   - Angular 16 supports standalone components, but some features may differ
   - May need to use `NgModule` approach instead

2. **TypeScript Version**:
   - Angular 16 uses TypeScript ~4.9.0
   - Current project uses TypeScript ~5.4.0
   - **Action Required**: Downgrade TypeScript version

3. **Dependency Versions**:
   - Need to downgrade Angular dependencies to v16.x
   - Tailwind CSS 3.4.17 should work fine
   - @tabler/icons is version-agnostic

#### 🔧 Angular 16 Migration Steps:

1. **Update package.json for Angular 16:**
   ```json
   {
     "dependencies": {
       "@angular/core": "^16.0.0",
       "@angular/common": "^16.0.0", 
       "@angular/platform-browser": "^16.0.0",
       "@tabler/icons": "^3.34.1",
       "tailwindcss": "^3.4.17"
     },
     "devDependencies": {
       "@angular/cli": "^16.0.0",
       "typescript": "~4.9.0"
     }
   }
   ```

2. **Component Modifications (if needed):**
   ```typescript
   // Angular 16 - Alternative NgModule approach
   @NgModule({
     declarations: [ButtonsComponent, TablerIconComponent],
     imports: [CommonModule],
     exports: [ButtonsComponent]
   })
   export class ButtonsModule { }
   ```

3. **Service Compatibility:**
   - TablerIconService should work without changes
   - DomSanitizer API is consistent across versions

#### ✅ What Works in Angular 16:
- ✅ Tailwind CSS integration
- ✅ Custom icon service with SVG injection
- ✅ All button styling and hover effects
- ✅ TypeScript interfaces and types
- ✅ Responsive design features

#### ❌ What Might Need Changes:
- ❌ Standalone component syntax (use NgModule instead)
- ❌ TypeScript 5.4 features (downgrade to 4.9)
- ❌ Latest Angular 18 APIs (use Angular 16 equivalents)

#### 🚀 Quick Angular 16 Setup:

```bash
# 1. Create new Angular 16 project
ng new angular-16-buttons --version=16
cd angular-16-buttons

# 2. Copy source files (except package.json)
# Copy: src/app/, src/styles.css, tailwind.config.js

# 3. Install dependencies
npm install @tabler/icons tailwindcss

# 4. Update angular.json for Tailwind
# 5. Run the project
ng serve
```

### Development Dependencies
- `@angular/cli`: ^18.0.0
- `typescript`: ~5.4.0

## 🎯 Button Types & Color Mapping

The component showcase includes 12 different button types with both Default and Hover states, using custom colors that match Thai color guide:

### Available Buttons with Custom Colors

1. **Back Button** - Navigation (Gray) with arrow-left icon
2. **Search Button** - สีน้ำเงิน (#046DE0) with search icon - Primary working color
3. **Clear All Button** - สีน้ำเงิน outline (#046DE0) with eraser icon - Confirm action
4. **Add Data Button** - สีน้ำเงิน outline (#046DE0) with plus icon - Add data action
5. **Delete Data Button** - สีแดง outline (#F45B69) with trash icon - Destructive action
6. **Save Data Button** - สีเขียว (#30BE82) with device-floppy icon - Success action
7. **Cancel Button** - สีแดง outline (#F45B69) with x icon - Cancel/reject action
8. **Return Button** - สีเหลือง (#FEB85B) with arrow-back-up icon - Pending status
9. **Approve Button** - สีเขียว (#30BE82) with circle-check icon - Success confirmation
10. **Not Approve Button** - สีแดง outline (#F45B69) with x icon - Rejection action
11. **Export Button** - สีม่วง (#7E55D3) with download icon - Processing action
12. **Send Email Button** - สีม่วง outline (#7E55D3) with mail icon - Special feature

### Color Usage Guidelines

| Color | Hex Code | Usage | Button Examples |
|-------|----------|-------|-----------------|
| สีน้ำเงิน | #046DE0 | Main working actions | Search, Clear All, Add Data |
| สีเขียว | #30BE82 | Success/approval actions | Save Data, Approve |
| สีแดง | #F45B69 | Destructive/rejection actions | Delete, Cancel, Not Approve |
| สีเหลือง | #FEB85B | Pending/waiting actions | Return |
| สีม่วง | #7E55D3 | Processing/special actions | Export, Send Email |
| สีเทา | #6B7280 | Navigation/secondary actions | Back |

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

### Usage Examples with Custom Colors

**Primary Action Button (สีน้ำเงิน):**
```html
<button class="px-6 py-2 text-white rounded-lg transition-colors duration-200 flex items-center gap-2 btn-blue-custom">
  <tabler-icon name="search" class="w-4 h-4"></tabler-icon>
  Search
</button>
```

**Success Action Button (สีเขียว):**
```html
<button class="px-6 py-2 text-white rounded-lg transition-colors duration-200 flex items-center gap-2 btn-green-custom">
  <tabler-icon name="device-floppy" class="w-4 h-4"></tabler-icon>
  Save Data
</button>
```

**Destructive Action Button (สีแดง outline):**
```html
<button class="px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 btn-red-outline">
  <tabler-icon name="trash" class="w-4 h-4"></tabler-icon>
  Delete Data
</button>
```

**Processing Action Button (สีม่วง):**
```html
<button class="px-6 py-2 text-white rounded-lg transition-colors duration-200 flex items-center gap-2 btn-purple-custom">
  <tabler-icon name="download" class="w-4 h-4"></tabler-icon>
  Export
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

### Custom Color Palette (Updated)

The buttons now use custom colors that match the Thai color guide descriptions:

- **สีน้ำเงิน (Primary Blue)**: #046DE0 - Main working color for "confirm" and "add data"
- **สีเขียว (Success Green)**: #30BE82 - Success status for "confirm" or "successful" actions  
- **สีแดง (Danger Red)**: #F45B69 - Destructive actions like "cancel", "reject", "delete"
- **สีเหลือง (Warning Yellow)**: #FEB85B - Pending status like "waiting for approval"
- **สีม่วง (Custom Purple)**: #7E55D3 - Processing actions and special features
- **สีเทา (Neutral Gray)**: #6B7280 - Secondary actions and navigation

### Custom CSS Classes

```css
/* Primary action buttons */
.btn-blue-custom {
  background-color: #046DE0 !important;
  border-color: #046DE0 !important;
}

.btn-green-custom {
  background-color: #30BE82 !important;
  border-color: #30BE82 !important;
}

.btn-red-custom {
  background-color: #F45B69 !important;
  border-color: #F45B69 !important;
}

.btn-yellow-custom {
  background-color: #FEB85B !important;
  border-color: #FEB85B !important;
}

.btn-purple-custom {
  background-color: #7E55D3 !important;
  border-color: #7E55D3 !important;
}

/* Outline variants */
.btn-blue-outline {
  background-color: white !important;
  border-color: #046DE0 !important;
  color: #046DE0 !important;
}

.btn-red-outline {
  background-color: white !important;
  border-color: #F45B69 !important;
  color: #F45B69 !important;
}
```

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

## 🔄 Angular Version Compatibility

### ✅ Fully Compatible
- **Angular 18.x**: Current version, fully tested
- **Angular 17.x**: Should work with minimal changes
- **Angular 16.x**: Compatible with modifications (see Dependencies section)

### ⚠️ Requires Modifications
- **Angular 15.x**: Need to replace standalone components with NgModule
- **Angular 14.x**: Major changes required for component structure
- **Angular 13.x and below**: Significant refactoring needed

### 📋 Compatibility Summary

| Angular Version | Tabler Icons | Standalone Components | TypeScript | Status |
|-----------------|--------------|----------------------|------------|--------|
| 18.x | ✅ Full | ✅ Yes | 5.4+ | ✅ Supported |
| 17.x | ✅ Full | ✅ Yes | 5.2+ | ✅ Supported |
| 16.x | ✅ Full | ⚠️ Partial | 4.9+ | ⚠️ Needs Changes |
| 15.x | ✅ Full | ❌ No | 4.8+ | ❌ Major Changes |
| 14.x | ✅ Full | ❌ No | 4.7+ | ❌ Refactoring |
| 13.x | ✅ Full | ❌ No | 4.4+ | ❌ Significant Work |

**Recommendation**: Use Angular 16+ for best compatibility with minimal changes.

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
