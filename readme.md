# NovaDesk

Telefon va kompyuterga o'rnatiladigan bepul ish stoli (PWA). 13 ta ilova: Hujjat, Jadval, Eslatmalar,
Vazifalar, Kod, Rasm, Chizma, Kalkulyator, Pomodoro, Parol, Matn (Lotin<->Kirill), Konvertor.
Serversiz: hamma narsa brauzerda ishlaydi, ma'lumot qurilmada (localStorage) saqlanadi.

## Vercel'ga chiqarish
1. Papkadagi fayllarni GitHub repo'ga yuklang.
2. vercel.com -> Add New Project -> repo'ni tanlang -> Deploy (sozlama shart emas).
3. Sayt HTTPS bilan ochiladi: Chrome/Edge'da manzil qatoridagi "O'rnatish" belgisi, Android'da
   "Bosh ekranga qo'shish", iPhone'da Safari -> Ulashish -> "Bosh ekranga qo'shish".

## Yangilash
sw.js ichidagi `V = 'novadesk-v1'` ni har yangilanishda oshiring (v2, v3...).

## Daromad (ixtiyoriy)
- index.html'ga AdSense kodini qo'shing yoki Patreon/Click/Payme "qo'llab-quvvatlash" tugmasini qo'ying.
- Asosiy ilovalarni bepul qoldirib, bulutga saqlash/sinxronlash kabi qo'shimchani pullik qilish mumkin.
