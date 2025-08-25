# Angular Button Components with Tailwind CSS

โปรเจ็กต์นี้เป็นการสร้างคอมโพเนนต์ปุ่มต่างๆ สำหรับ Angular โดยใช้ Tailwind CSS และ Lucide Icons ตามแนวทางการออกแบบที่ทันสมัย

## 🚀 คุณสมบัติ

- ✅ **Angular 18** - เฟรมเวิร์กล่าสุดพร้อม Standalone Components
- ✅ **Tailwind CSS** - CSS framework สำหรับการจัดแต่งที่รวดเร็ว
- ✅ **Lucide Angular** - ไอคอนสวยงามและทันสมัย
- ✅ **TypeScript** - ภาษาโปรแกรมมิ่งที่มี type safety
- ✅ **Responsive Design** - รองรับการแสดงผลในทุกอุปกรณ์
- ✅ **Hover Effects** - เอฟเฟกต์เมื่อเลื่อนเมาส์ผ่านปุ่ม

## 📦 การติดตั้งและการรัน

### ข้อกำหนดระบบ
- **Node.js**: เวอร์ชั่น 18.0 หรือใหม่กว่า
- **npm**: เวอร์ชั่น 8.0 หรือใหม่กว่า
- **Angular CLI**: เวอร์ชั่น 18.x (จะติดตั้งอัตโนมัติ)

### 1. เตรียมสภาพแวดล้อม

#### ตรวจสอบ Node.js
```bash
node --version
npm --version
```

#### ติดตั้ง Angular CLI (หากยังไม่มี)
```bash
npm install -g @angular/cli
```

### 2. ติดตั้งโปรเจ็กต์

#### Clone หรือ Download โปรเจ็กต์
```bash
# หรือ download และแตกไฟล์
cd "test button"
```

#### ติดตั้ง Dependencies
```bash
# ติดตั้งแพ็กเกจทั้งหมด
npm install

# ติดตั้งเฉพาะแพ็กเกจหลัก (หากต้องการ)
npm install @angular/core @angular/common
npm install tailwindcss
npm install lucide-angular
```

### 3. การกำหนดค่าเริ่มต้น

#### Tailwind CSS Setup
```bash
# สร้างไฟล์ config (หากยังไม่มี)
npx tailwindcss init
```

#### ตรวจสอบการกำหนดค่า
- ไฟล์ `tailwind.config.js` ต้องมีการกำหนด content paths
- ไฟล์ `src/styles.css` ต้องมี Tailwind directives

### 4. รันโปรเจ็กต์

#### Development Server
```bash
ng serve
```
- เปิดเบราว์เซอร์ไปที่ `http://localhost:4200/`
- Server จะ auto-reload เมื่อมีการเปลี่ยนแปลงไฟล์

#### Build สำหรับ Production
```bash
ng build --prod
```
- ไฟล์จะถูกสร้างในโฟลเดอร์ `dist/`

#### รันแบบ Production
```bash
ng serve --prod
```

## 🎨 การใช้งาน CSS สำหรับปุ่ม

### โครงสร้าง CSS Classes

#### 1. Base Button Structure
```html
<button class="px-6 py-2 [background] [border] [text-color] rounded-md [hover-effect] transition-colors duration-200 flex items-center gap-2">
  <lucide-icon [img]="IconName" class="w-4 h-4"></lucide-icon>
  ข้อความปุ่ม
</button>
```

#### 2. Button Types และ CSS Classes

##### **Filled Buttons** (ปุ่มแบบเต็มสี)
```css
/* Search Button - Blue Filled */
.btn-primary {
  @apply px-6 py-2 bg-blue-500 border border-transparent text-white rounded-md hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2;
}

/* Save Button - Green Filled */
.btn-success {
  @apply px-6 py-2 bg-green-500 border border-transparent text-white rounded-md hover:bg-green-600 transition-colors duration-200 flex items-center gap-2;
}

/* Export Button - Purple Filled */
.btn-purple {
  @apply px-6 py-2 bg-purple-500 border border-transparent text-white rounded-md hover:bg-purple-600 transition-colors duration-200 flex items-center gap-2;
}

/* Return Button - Yellow Filled */
.btn-warning {
  @apply px-6 py-2 bg-yellow-500 border border-transparent text-white rounded-md hover:bg-yellow-600 transition-colors duration-200 flex items-center gap-2;
}
```

##### **Outline Buttons** (ปุ่มแบบขอบสี)
```css
/* Add Data Button - Blue Outline */
.btn-outline-primary {
  @apply px-6 py-2 bg-white border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2;
}

/* Delete Data Button - Red Outline */
.btn-outline-danger {
  @apply px-6 py-2 bg-white border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors duration-200 flex items-center gap-2;
}

/* Not Approve Button - Red Outline */
.btn-outline-reject {
  @apply px-6 py-2 bg-red-50 border border-red-500 text-red-500 rounded-md hover:bg-red-100 transition-colors duration-200 flex items-center gap-2;
}
```

##### **Custom Buttons** (ปุ่มแบบกำหนดเอง)
```css
/* Back Button - Gray with Border */
.btn-back {
  @apply px-4 py-2 bg-gray-100 border border-gray-600 text-gray-700 rounded-md hover:bg-gray-600 hover:text-white transition-colors duration-200 flex items-center gap-2;
}

/* Cancel Button - Gray Border, Red Text */
.btn-cancel {
  @apply px-6 py-2 bg-white border border-gray-600 text-red-500 rounded-md hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2;
}
```

### 3. Tailwind CSS Utility Classes ที่ใช้

#### Spacing & Layout
```css
px-4, px-6    /* Horizontal padding */
py-2          /* Vertical padding */
gap-2         /* Space between icon and text */
flex          /* Flexbox layout */
items-center  /* Vertical center alignment */
```

#### Colors & Backgrounds
```css
/* Background Colors */
bg-blue-500, bg-green-500, bg-red-500, bg-yellow-500, bg-purple-500
bg-white, bg-gray-100, bg-gray-600

/* Border Colors */
border-blue-500, border-green-500, border-red-500
border-gray-600, border-transparent

/* Text Colors */
text-white, text-blue-500, text-red-500, text-gray-700
```

#### Hover Effects
```css
/* Filled Button Hovers */
hover:bg-blue-600, hover:bg-green-600, hover:bg-red-600

/* Outline Button Hovers */
hover:bg-blue-50, hover:bg-red-50, hover:bg-gray-50

/* Custom Hovers */
hover:text-white  /* For Back button */
```

#### Transitions & Borders
```css
transition-colors duration-200  /* Smooth color transitions */
rounded-md                     /* Rounded corners */
border                        /* Border width */
```

### 4. Custom CSS ใน Component

#### ไฟล์ `buttons.component.css`
```css
/* Custom Mail Button */
.mail-button {
  border-color: #7E55D3 !important;
  color: #7E55D3 !important;
}

.mail-button:hover {
  background-color: #f3f0ff !important;
}

/* Custom Button States */
.btn-hover-dark:hover {
  background-color: #374151;
  color: white;
}

/* Size Consistency */
.btn-consistent {
  border: 1px solid transparent; /* Ensures all buttons have same height */
}
```

### 5. Icon Styling

#### Lucide Icon Classes
```css
/* Standard Icon Size */
.w-4 .h-4 {
  width: 1rem;    /* 16px */
  height: 1rem;   /* 16px */
}

/* Icon in Button Context */
.flex .items-center .gap-2 lucide-icon {
  flex-shrink: 0;  /* Prevent icon shrinking */
}
```

### 6. Responsive Button Design

#### Mobile Responsive
```css
/* Small screens */
@media (max-width: 640px) {
  .btn-responsive {
    @apply px-4 py-2 text-sm;
  }
}

/* Medium screens */
@media (min-width: 641px) and (max-width: 1024px) {
  .btn-responsive {
    @apply px-5 py-2;
  }
}

/* Large screens */
@media (min-width: 1025px) {
  .btn-responsive {
    @apply px-6 py-2;
  }
}
```

### 7. การปรับแต่งสีเพิ่มเติม

#### เพิ่มสีใหม่ใน Tailwind Config
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-purple': '#7E55D3',
        'mail-hover': '#f3f0ff',
      }
    }
  }
}
```

#### ใช้สีกำหนดเองใน CSS
```css
.btn-custom-mail {
  border-color: theme('colors.custom-purple');
  color: theme('colors.custom-purple');
}

.btn-custom-mail:hover {
  background-color: theme('colors.mail-hover');
}
```

## 🎯 ปุ่มที่มีอยู่ในระบบ

### Default State
1. **Back** - กลับไปหน้าก่อนหน้า (สีเทา พร้อมขอบ)
2. **Search** - ค้นหาข้อมูล (สีน้ำเงิน filled)
3. **Clear All** - ล้างข้อมูลทั้งหมด (สีน้ำเงิน outline)
4. **Add Data** - เพิ่มข้อมูล (สีน้ำเงิน outline)
5. **Delete Data** - ลบข้อมูล (สีแดง outline)
6. **Save Data** - บันทึกข้อมูล (สีเขียว filled)
7. **Cancel** - ยกเลิก (ขอบเทา ข้อความแดง)
8. **Return** - ส่งคืน (สีเหลือง filled)
9. **Approve** - อนุมัติ (สีเขียว filled)
10. **Not Approve** - ไม่อนุมัติ (สีแดง outline)
11. **Export** - ส่งออกข้อมูล (สีม่วง filled)
12. **ส่งจดหมาย** - ส่งอีเมล (สีม่วงกำหนดเอง #7E55D3)
13. **Request** - ขอข้อมูล (สีน้ำเงิน outline)

### Hover State
ทุกปุ่มมีเอฟเฟกต์ hover ที่แตกต่างกัน:
- ปุ่ม filled จะเปลี่ยนเป็นสีเข้มขึ้น
- ปุ่ม outline จะมี background สีอ่อน
- ปุ่ม Back จะเปลี่ยนเป็น filled สีเทาเข้ม

## 🎯 Icons ที่ใช้ (Lucide Icons)

| ปุ่ม | Icon | คำอธิบาย |
|------|------|----------|
| Back | `ArrowLeft` | ลูกศรชิ้งซ้าย |
| Search | `Search` | แว่นขยาย |
| Clear All | `Eraser` | ยางลบ |
| Add Data | `Plus` | เครื่องหมายบวก |
| Delete Data | `Trash2` | ถังขยะ |
| Save Data | `Save` | ฟล็อปปี้ดิสก์ |
| Cancel | `X` | เครื่องหมายกากบาท |
| Return | `Redo2` | ลูกศรวน |
| Approve | `CircleCheckBig` | เช็คมาร์คในวงกลมใหญ่ |
| Not Approve | `X` | เครื่องหมายกากบาท |
| Export | `FileDown` | ไฟล์ดาวน์โหลด |
| ส่งจดหมาย | `Mail` | ซองจดหมาย |
| Request | `FileText` | เอกสาร |

## 🎨 Color Scheme

### Primary Colors
- **Blue**: `bg-blue-500`, `border-blue-500`, `text-blue-500`
- **Green**: `bg-green-500`, `border-green-500`, `text-green-500`
- **Red**: `bg-red-500`, `border-red-500`, `text-red-500`
- **Yellow**: `bg-yellow-500`, `border-yellow-500`, `text-yellow-500`
- **Purple**: `bg-purple-500`, `border-purple-500`, `text-purple-500`
- **Gray**: `bg-gray-600`, `border-gray-600`, `text-gray-600`

### Custom Colors
- **Mail Button**: `#7E55D3` (สีม่วงพิเศษ)

## 📁 โครงสร้างโปรเจ็กต์

```
src/
├── app/
│   ├── buttons/
│   │   ├── buttons.component.html    # Template ของปุ่ม
│   │   ├── buttons.component.css     # Styles เพิ่มเติม
│   │   └── buttons.component.ts      # Logic และ imports
│   ├── app.component.ts              # Root component
│   └── app.component.html            # Root template
├── styles.css                       # Global styles + Tailwind
└── main.ts                          # Bootstrap application
```

## 🔧 การกำหนดค่า

### Tailwind CSS
ไฟล์ `tailwind.config.js` ได้รับการกำหนดค่าให้รองรับไฟล์ Angular:

```javascript
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Custom CSS
ใน `buttons.component.css` มีการกำหนดสีพิเศษสำหรับปุ่ม Mail:

```css
.mail-button {
  border-color: #7E55D3 !important;
  color: #7E55D3 !important;
}

.mail-button:hover {
  background-color: #f3f0ff !important;
}
```

## 🎯 Design System

### Button States
1. **Default**: สถานะปกติของปุ่ม
2. **Hover**: เมื่อเลื่อนเมาส์ผ่าน (มีการเปลี่ยนสีหรือ background)

### Button Types
1. **Filled**: ปุ่มที่มี background สี
2. **Outline**: ปุ่มที่มีเฉพาะขอบสี background ขาว
3. **Custom**: ปุ่มที่ใช้สีพิเศษ (เช่น Mail button)

### Size Consistency
- ทุกปุ่มมี `border` (transparent หรือมีสี) เพื่อให้ความสูงเท่ากัน
- Padding: `px-4` หรือ `px-6` และ `py-2`
- Border radius: `rounded-md`

## 🛠️ การพัฒนาเพิ่มเติม

### เพิ่มปุ่มใหม่

#### 1. เพิ่ม Icon ใน TypeScript Component
```typescript
// buttons.component.ts
import { NewIcon } from 'lucide-angular';

export class ButtonsComponent {
  // ... existing icons
  readonly NewIcon = NewIcon;
}
```

#### 2. เพิ่มปุ่มใน HTML Template
```html
<!-- Filled Button Example -->
<button class="px-6 py-2 bg-blue-500 border border-transparent text-white rounded-md hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2">
  <lucide-icon [img]="NewIcon" class="w-4 h-4"></lucide-icon>
  New Button
</button>

<!-- Outline Button Example -->
<button class="px-6 py-2 bg-white border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2">
  <lucide-icon [img]="NewIcon" class="w-4 h-4"></lucide-icon>
  New Outline Button
</button>
```

#### 3. สร้าง CSS Class แบบ Reusable
```css
/* ใน buttons.component.css */
.btn-new-style {
  @apply px-6 py-2 bg-indigo-500 border border-transparent text-white rounded-md hover:bg-indigo-600 transition-colors duration-200 flex items-center gap-2;
}

/* ใช้ใน HTML */
<button class="btn-new-style">
  <lucide-icon [img]="NewIcon" class="w-4 h-4"></lucide-icon>
  Custom Style Button
</button>
```

### การปรับแต่งสีและสไตล์

#### 1. ใช้ Tailwind Utility Classes
```html
<!-- เปลี่ยนสีพื้นหลัง -->
<button class="px-6 py-2 bg-teal-500 hover:bg-teal-600 ...">

<!-- เปลี่ยนสีขอบ -->
<button class="px-6 py-2 border border-orange-500 text-orange-500 hover:bg-orange-50 ...">

<!-- เปลี่ยนขนาด -->
<button class="px-8 py-3 text-lg ...">  <!-- Large -->
<button class="px-4 py-1 text-sm ...">  <!-- Small -->
```

#### 2. Custom CSS สำหรับสีพิเศษ
```css
/* สร้างสีใหม่ */
.btn-gradient {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
}

.btn-gradient:hover {
  background: linear-gradient(45deg, #5a6fd8 0%, #6a4190 100%);
}

/* ใช้ CSS Variables */
.btn-custom {
  --btn-color: #ff6b6b;
  --btn-hover: #ff5252;
  
  background-color: var(--btn-color);
  border-color: var(--btn-color);
}

.btn-custom:hover {
  background-color: var(--btn-hover);
  border-color: var(--btn-hover);
}
```

#### 3. Dark Mode Support
```css
/* Dark mode variants */
.dark .btn-dark-mode {
  @apply bg-gray-700 border-gray-600 text-gray-100 hover:bg-gray-600;
}

.dark .btn-outline-dark {
  @apply bg-transparent border-gray-400 text-gray-300 hover:bg-gray-700;
}
```

### การสร้าง Button Component แบบ Reusable

#### 1. สร้าง Generic Button Component
```typescript
// shared-button.component.ts
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-shared-button',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <button 
      [class]="buttonClasses" 
      [disabled]="disabled"
      (click)="onClick()">
      <lucide-icon 
        *ngIf="icon" 
        [img]="icon" 
        class="w-4 h-4">
      </lucide-icon>
      <ng-content></ng-content>
    </button>
  `
})
export class SharedButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() icon?: any;
  @Input() disabled = false;
  @Input() onClick = () => {};

  get buttonClasses(): string {
    const baseClasses = 'rounded-md transition-colors duration-200 flex items-center gap-2';
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    
    return `${baseClasses} ${variantClasses} ${sizeClasses}`;
  }

  private getVariantClasses(): string {
    const variants = {
      primary: 'bg-blue-500 border border-transparent text-white hover:bg-blue-600',
      secondary: 'bg-white border border-gray-500 text-gray-500 hover:bg-gray-50',
      danger: 'bg-red-500 border border-transparent text-white hover:bg-red-600',
      success: 'bg-green-500 border border-transparent text-white hover:bg-green-600'
    };
    return variants[this.variant];
  }

  private getSizeClasses(): string {
    const sizes = {
      sm: 'px-4 py-1 text-sm',
      md: 'px-6 py-2',
      lg: 'px-8 py-3 text-lg'
    };
    return sizes[this.size];
  }
}
```

#### 2. ใช้ Generic Button Component
```html
<!-- Basic usage -->
<app-shared-button variant="primary" [icon]="Search">
  Search Data
</app-shared-button>

<!-- Different variants -->
<app-shared-button variant="danger" [icon]="Trash2" size="sm">
  Delete
</app-shared-button>

<app-shared-button variant="secondary" [icon]="Plus" size="lg">
  Add New Item
</app-shared-button>
```

### การ Debug และ Troubleshooting

#### 1. CSS ไม่แสดงผลถูกต้อง
```bash
# ตรวจสอบ Tailwind CSS compilation
npx tailwindcss -i ./src/styles.css -o ./dist/output.css --watch

# ลบ node_modules และติดตั้งใหม่
rm -rf node_modules package-lock.json
npm install
```

#### 2. Icons ไม่แสดง
```typescript
// ตรวจสอบ imports
import { LucideAngularModule, Search, Plus } from 'lucide-angular';

// ตรวจสอบใน component
readonly Search = Search;
readonly Plus = Plus;
```

#### 3. Hover Effects ไม่ทำงาน
```css
/* ใส่ transition classes */
.transition-colors .duration-200

/* ตรวจสอบ specificity */
.btn-custom:hover {
  background-color: #new-color !important;
}
```

## 📱 Responsive Design

ปุ่มทั้งหมดรองรับการแสดงผลในอุปกรณ์ต่างๆ:
- Mobile: ขนาดปุ่มและไอคอนเหมาะสม
- Tablet: แสดงผลได้อย่างสมบูรณ์
- Desktop: เอฟเฟกต์ hover ทำงานได้ดี

## 🔍 คุณสมบัติเด่น

### Consistency Design
- ทุกปุ่มมีความสูงเท่ากันด้วยการใช้ `border` (transparent สำหรับปุ่ม filled)
- การใช้สีที่สอดคล้องกันตาม design system
- Icon และ text ที่จัดเรียงอย่างสวยงาม

### Accessibility
- สีที่มี contrast ratio ที่เหมาะสม
- ขนาด icon ที่อ่านง่าย (16x16px)
- Hover effects ที่ชัดเจน

### Performance
- ใช้ Standalone Components ลดขนาด bundle
- CSS transitions ที่เรียบร้อย
- Icon loading ที่มีประสิทธิภาพ

## 📄 Technologies Used

- **Angular**: 18.x
- **TypeScript**: 5.x
- **Tailwind CSS**: 3.x
- **Lucide Angular**: Latest
- **Node.js**: 18+

## 📄 License

โปรเจ็กต์นี้ใช้สำหรับการเรียนรู้และพัฒนาทักษะ

---

## � สรุป

โปรเจ็กต์นี้เป็นตัวอย่างการสร้างระบบปุ่มที่สมบูรณ์ด้วย Angular และ Tailwind CSS พร้อมกับไอคอนที่สวยงามจาก Lucide ทุกปุ่มมีการออกแบบที่ใส่ใจในรายละเอียดและมีการจัดการสีที่เป็นระบบ

สำหรับการพัฒนาเพิ่มเติม สามารถขยายระบบปุ่มนี้ได้ง่ายดายโดยการเพิ่มไอคอนและปรับแต่งสีตามความต้องการ
