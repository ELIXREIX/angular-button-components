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

#### Clone โปรเจ็กต์
```bash
git clone https://github.com/ELIXREIX/angular-button-components.git
cd angular-button-components
```

#### ติดตั้ง Dependencies
```bash
npm install
```

### 3. รันโปรเจ็กต์

#### Development Server
```bash
ng serve
```
- เปิดเบราว์เซอร์ไปที่ `http://localhost:4200/`
- Server จะ auto-reload เมื่อมีการเปลี่ยนแปลงไฟล์

#### Build สำหรับ Production
```bash
ng build
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
1. เพิ่ม icon ใน `buttons.component.ts`:
```typescript
import { NewIcon } from 'lucide-angular';
// ...
readonly NewIcon = NewIcon;
```

2. เพิ่มปุ่มใน template:
```html
<button class="px-6 py-2 bg-color border border-transparent text-white rounded-md transition-colors duration-200 flex items-center gap-2">
  <lucide-icon [img]="NewIcon" class="w-4 h-4"></lucide-icon>
  Button Text
</button>
```

### การปรับแต่งสี
- ใช้ Tailwind utility classes
- หรือเพิ่ม custom CSS ใน `buttons.component.css`

## 📱 Responsive Design

ปุ่มทั้งหมดรองรับการแสดงผลในอุปกรณ์ต่างๆ:
- Mobile: ขนาดปุ่มและไอคอนเหมาะสม
- Tablet: แสดงผลได้อย่างสมบูรณ์
- Desktop: เอฟเฟกต์ hover ทำงานได้ดี

## 📄 Technologies Used

- **Angular**: 18.x
- **TypeScript**: 5.x
- **Tailwind CSS**: 3.x
- **Lucide Angular**: Latest
- **Node.js**: 18+

## 🔥 Demo

เข้าดูตัวอย่างการทำงานได้ที่: [Live Demo](https://github.com/ELIXREIX/angular-button-components)

## 📄 License

โปรเจ็กต์นี้ใช้สำหรับการเรียนรู้และพัฒนาทักษะ

---

## 🎉 สรุป

โปรเจ็กต์นี้เป็นตัวอย่างการสร้างระบบปุ่มที่สมบูรณ์ด้วย Angular และ Tailwind CSS พร้อมกับไอคอนที่สวยงามจาก Lucide ทุกปุ่มมีการออกแบบที่ใส่ใจในรายละเอียดและมีการจัดการสีที่เป็นระบบ

สำหรับการพัฒนาเพิ่มเติม สามารถขยายระบบปุ่มนี้ได้ง่ายดายโดยการเพิ่มไอคอนและปรับแต่งสีตามความต้องการ