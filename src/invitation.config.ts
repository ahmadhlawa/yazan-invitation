export type EventIcon = 'henna' | 'men' | 'rings';

export interface InvitationEvent {
  id: string;
  icon: EventIcon;
  weekday: string;
  date: string;
  title: string;
  place: string;
  details: string[];
  primary?: boolean;
}

const EVENT_DATE = '2026-10-02';
const CALENDAR_TIME = '17:30';
const couple = 'يزن واستبرق';

export const INVITATION = {
  pageTitle: `دعوة إشهار خطوبة | ${couple}`,
  pageDescription: `نتشرف بدعوتكم لمشاركتنا فرحة إشهار خطوبة ${couple}`,
  groomName: 'يزن', brideName: 'استبرق', conjunction: '&',
  blessing: 'بارك الله لهما وبارك عليهما وجمع بينهما بالخير',
  hero: {
    invitation: 'في يوم مبارك وحدث مبارك نتشرف بدعوتكم لمشاركتنا فرحتنا بإشهار خطوبة',
    names: 'يزن & استبرق', groomFamily: 'أهل العريس: آل أبو الحلاوة', brideFamily: 'أهل العروس: آل الطيطي',
  },
  gate: { hint: 'اضغط لفتح الدعوة', lockLabel: 'فتح دعوة يزن واستبرق' },
  invitationLine: 'بكل المحبة نتشرف بدعوتكم لمشاركتنا فرحتنا',
  eventsHeading: 'تفاصيل المناسبة',
  events: [{
    id: 'engagement', icon: 'rings', weekday: 'الجمعة', date: '2 / 10 / 2026', title: 'إشهار خطوبة يزن واستبرق',
    place: 'وادي الهريّة – دخلة مصنع الأمل – منزل والد العروس', details: ['الساعة الخامسة والنصف مساءاً (5:30 PM)'], primary: true,
  }] satisfies InvitationEvent[] as InvitationEvent[],
  calendar: {
    year: 2026, month: 10, monthName: 'أكتوبر', monthLabel: 'أكتوبر 2026', softHighlight: [], mainDay: 2,
    weekdayNames: ['س', 'ح', 'ن', 'ث', 'ر', 'خ', 'ج'], buttonLabel: 'إضافة المناسبة إلى التقويم',
  },
  wedding: { date: EVENT_DATE, start: CALENDAR_TIME, end: '21:00', dateTime: `${EVENT_DATE}T${CALENDAR_TIME}:00+03:00`, timeZone: 'Asia/Hebron' },
  countdown: { heading: 'باقي على فرحتنا', labels: { days: 'يوم', hours: 'ساعة', minutes: 'دقيقة', seconds: 'ثانية' }, doneMessage: 'تمت الفرحة بحمد الله' },
  venue: {
    heading: 'موقع المناسبة', name: 'وادي الهريّة – دخلة مصنع الأمل – منزل والد العروس', latitude: '', longitude: '',
    mapsUrl: 'https://maps.app.goo.gl/edQx9KWGZemjYT4P7', buttonLabel: 'فتح الموقع على الخريطة',
  },
  closing: { primary: 'بارك الله لهما وبارك عليهما', secondary: 'حضوركم يسعدنا ويكمل فرحتنا' },
  audio: { src: '/audio/wedding-music.mp3', playLabel: 'تشغيل الصوت', pauseLabel: 'إيقاف الصوت', targetVolume: 0.75 },
  share: { buttonLabel: 'مشاركة الدعوة', whatsappLabel: 'المشاركة عبر واتساب', copyLabel: 'نسخ الرابط', message: `نتشرف بدعوتكم لمشاركتنا فرحة إشهار خطوبة ${couple}` },
  icsTitle: `إشهار خطوبة ${couple}`,
  toasts: { calendarOk: 'تم إنشاء ملف الموعد', calendarFail: 'تعذر إنشاء ملف الموعد', copyOk: 'تم نسخ رابط الدعوة', copyFail: 'انسخ الرابط من شريط المتصفح', audioFail: 'تعذر تشغيل الصوت' },
} as const;

export const coupleTitle = INVITATION.hero.names;
