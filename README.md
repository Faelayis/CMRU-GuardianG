# ยินดีต้อนรับสู่แอป GuardianG

## เทคโนโลยีที่ใช้ 🛠️

- **Frontend**: React Native + Expo
- **Runtime**: Bun.js
- **Language**: TypeScript
- **Navigation**: Expo Router (File-based routing)
- **Styling**: Native styling with theme support

## ขั้นตอนการพัฒนา 🚀

### ข้อกำหนดเบื้องต้น

- [Bun](https://bun.sh/) - JavaScript runtime และ package manager
- [Node.js](https://nodejs.org/) (สำหรับ Expo CLI)

### การติดตั้งและเริ่มใช้งาน

1. **ติดตั้ง dependencies**

   ```bash
   bun install
   ```

2. **เริ่มต้นแอป**

   ```bash
   bun expo start
   ```

3. **เลือกแพลตฟอร์มที่ต้องการทดสอบ**

## โครงสร้างโปรเจกต์ 📁

```
CMRU-GuardianG/
├── app/                    # หน้าจอต่างๆ ของแอป
│   ├── (tabs)/            # หน้าจอที่มี Tab Navigation
│   │   ├── index.tsx      # หน้าแรก/แผนที่
│   │   ├── chat.tsx       # หน้าแชท
│   │   ├── explore.tsx    # หน้าสำรวจ
│   │   └── profile.tsx    # หน้าโปรไฟล์
│   ├── login.tsx          # หน้าล็อกอิน
│   ├── signup.tsx         # หน้าสมัครสมาชิก
│   ├── tracking.tsx       # หน้าติดตาม
│   ├── notifications.tsx  # หน้าการแจ้งเตือน
│   └── splash.tsx         # หน้า Splash Screen
├── components/            # คอมโพเนนต์ที่ใช้ร่วมกัน
│   ├── ui/               # คอมโพเนนต์ UI พื้นฐาน
│   └── ...               # คอมโพเนนต์อื่นๆ
├── constants/            # ค่าคงที่ (สี, ธีม)
├── hooks/               # Custom React Hooks
└── assets/              # รูปภาพ, ฟอนต์
```
