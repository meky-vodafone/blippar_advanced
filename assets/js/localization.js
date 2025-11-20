const lang = new URLSearchParams(window.location.search).get("lang") || "en";
const ENGLISH_LOCALIZATION = {
  splash: {
    title: "Find the 5G characters!",
    loading: "Game Loading ...",
  },
  error: {
    title: "Error",
    message: "An error occurred while loading the game.",
  },
  cameraAccess: {
    title: "Camera Access Required",
    message: "Please allow camera access to use this feature.",
    grantAccess: "Grant Access",
  },
  motionSensors: {
    title: "Motion Sensors Required",
    message: "Please enable motion sensors to use this feature.",
    motionSensorsNotAvailable:
      "Sorry, Your device doesn't have a problem with motion sensors or doesn't have motion sensors.",
  },
  cameraErrors: {
    ios: "Camera access denied.<br>Please enable camera permission for <b>Ana Vodafone</b> from iOS Settings , Privacy , Camera, then reopen the app.",
    android:
      "Camera access denied.<br>Please enable camera permission for <b>Ana Vodafone</b> from Android Settings , Apps , Ana Vodafone , Permissions , Camera, then reopen the app.",
    noCameraDetected:
      "No camera detected.<br> Please Make sure camera is working well.",
    cameraUsedByAnotherApp:
      "Camera is in use by another application.<br> Please close other applications and reload.",
    continueWithoutMotion: "Continue Without Motion Sensors?",
    generic: "Something went wrong.<br> Please try again.",
  },
  errorButtons: {
    ok: "OK",
    back: "Back",
    retry: "Retry",
  },
  headerTitle: "Time Remaining",
};
const ARABIC_LOCALIZATION = {
  splash: {
    title: "دورعلى شخصيات ال5G!",
    loading: "جارٍ التحميل...",
  },
  error: {
    title: "خطأ",
    message: "حدث خطأ أثناء تحميل اللعبة.",
  },
  cameraAccess: {
    title: "الوصول إلى الكاميرا مطلوب",
    message: "يرجى السماح بالوصول إلى الكاميرا لاستخدام هذه الميزة.",
    grantAccess: "السماح بالوصول",
  },
  motionSensors: {
    title: "مستشعرات الحركة مطلوبة",
    message: "يرجى تمكين مستشعرات الحركة لاستخدام هذه الميزة.",
    motionSensorsNotAvailable:
      "عذراً ، جهازك به مشكلة في مستشعرات الحركة أو لا يحتوي على مستشعرات حركة.",
  },
  cameraErrors: {
    ios: "تم رفض الوصول إلى الكاميرا.<br>يرجى تمكين إذن الكاميرا لـ <b>Ana Vodafone</b> من إعدادات iOS ، الخصوصية ، الكاميرا ، ثم إعادة فتح التطبيق.",
    android:
      "تم رفض الوصول إلى الكاميرا.<br>يرجى تمكين إذن الكاميرا لـ <b>Ana Vodafone</b> من إعدادات Android ، التطبيقات ، Ana Vodafone ، الأذونات ، الكاميرا ، ثم إعادة فتح التطبيق.",
    noCameraDetected:
      "لم يتم اكتشاف كاميرا.<br> يرجى التأكد من أن الكاميرا تعمل بشكل جيد.",
    cameraUsedByAnotherApp:
      "تستخدم الكاميرا من قبل تطبيق آخر.<br> يرجى إغلاق التطبيقات الأخرى وإعادة التحميل.",
    continueWithoutMotion: "متابعة بدون مستشعرات الحركة؟",
    generic: "حدث خطأ ما.<br> يرجى المحاولة مرة أخرى.",
  },
  errorButtons: {
    ok: "موافق",
    back: "رجوع",
    retry: "إعادة المحاولة",
  },
  headerTitle: "الوقت المتبقي",
};
const localization = lang === "ar" ? ARABIC_LOCALIZATION : ENGLISH_LOCALIZATION;

function setElementText(elementId, text) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerText = text;
  }
}

// Loading splash screen
setElementText("loadingScreen_title", localization.splash.title);
setElementText("splashProgressText", localization.splash.loading);

// Camera access
setElementText("cameraAccessRequired", localization.cameraAccess.title);
setElementText("cameraAccessMessage", localization.cameraAccess.message);
setElementText("cambutton", localization.cameraAccess.grantAccess);
// Motion sensors
setElementText("motionSensorsRequired", localization.motionSensors.title);
setElementText("motionSensorsMessage", localization.motionSensors.message);
setElementText("gyrobutton", localization.cameraAccess.grantAccess);
// Error handling
setElementText("errorPopupMessage", localization.error.message);
setElementText("errorPopupButton", localization.error.title);
