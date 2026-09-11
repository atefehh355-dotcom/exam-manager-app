/**
 * این فایل با esbuild باندل می‌شود و خروجی‌اش (www/native-auth-bridge.js)
 * از داخل index.html با یک تگ <script> ساده لود می‌شود؛ به این ترتیب بدون
 * نیاز به تبدیل کل اپ به یک پروژه‌ی React/Vue، فقط بخش ورود بومی با گوگل
 * باندل و در دسترس window.NativeGoogleAuth قرار می‌گیرد.
 *
 * ساخت خروجی: npm run build-native-auth
 */
import { FirebaseAuthentication } from "@capacitor-firebase/authentication";

window.NativeGoogleAuth = {
  /**
   * ورود بومی با گوگل (از طریق حساب‌های گوگلِ ثبت‌شده روی گوشی).
   * خروجی شامل credential.idToken است که در index.html برای ورود به
   * Firebase JS SDK (signInWithCredential) استفاده می‌شود.
   */
  async signIn() {
    const result = await FirebaseAuthentication.signInWithGoogle();
    return result;
  },

  async signOut() {
    try {
      await FirebaseAuthentication.signOut();
    } catch (e) {
      // اگر کاربر قبلاً به‌صورت بومی وارد نشده بود، خطا را نادیده بگیر
    }
  },
};
