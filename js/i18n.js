const translations = {
    en: {
        name: 'Brahmi Abbes',
        skipLink: 'Skip to content',
        'nav.work': 'Work',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.github': 'GitHub',
        'hero.meta1': 'Based in Algeria',
        'hero.meta2': 'Available for new projects and opportunities',
        'hero.role1': 'Web Developer',
        'hero.role2': 'Laravel Backend',
        'hero.pitch': 'I build backend systems and full-stack applications that are reliable, well-tested, and built to scale — from database design to the interface.',
        'hero.ctaWork': 'View my work',
        'work.kicker': 'Selected work',
        'work.count': '02 projects',
        'pharmacera.type': 'Pharmacy management system',
        'pharmacera.summary': 'Inventory, sales and reporting in one Laravel application—built to handle the practical rules behind a pharmacy.',
        'pharmacera.whatItDoes': 'Pharmacera gives Admins, Pharmacists and Cashiers the tools to manage stock, sales and reporting with role-based access.',
        'pharmacera.builtAround': 'FIFO stock management, expiry tracking, barcode sales, audit logs, low-stock email alerts and Arabic RTL, French and English.',
        'project.openLarger': 'Open larger',
        'project.whatItDoes': 'What it does',
        'project.builtAround': 'Built around',
        'project.stack': 'Stack',
        'project.liveDemo': 'Live demo',
        'devdz.type': 'Community platform',
        'devdz.summary': 'A place for Algerian developers to share projects, find jobs and ask useful questions.',
        'devdz.featuresLabel': 'Features',
        'devdz.features': 'Projects, jobs, questions, comments, voting, tags, city filtering and keyword search.',
        'devdz.makingItWorkLabel': 'Making it work',
        'devdz.makingItWork': 'Custom authentication with sessions, CSRF and middleware; Blade components styled with Tailwind CSS.',
        'about.kicker': 'About',
        'about.kicker2': 'What I work with',
        'about.heading': 'I engineer production-ready applications, built to scale and hold up under real use.',
        'about.p1': 'I work primarily with PHP and Laravel, focused on the parts that make software dependable in production: clean business logic, secure authentication, sound data modeling and automated test coverage.',
        'about.p2': 'I work across the full stack — from database design to the interface — and continue deepening my frontend and JavaScript engineering alongside backend work.',
        'skills.backend': 'Backend',
        'skills.database': 'Database',
        'skills.frontend': 'Frontend',
        'skills.tools': 'Tools',
        'background.kicker': 'Experience &amp; education',
        'background.kicker2': 'Learning by building',
        'background.experience': 'Experience',
        'background.internTitle': 'IT Department Intern',
        'background.internDetail': 'Gained exposure to enterprise IT infrastructure, day-to-day operational workflows and system administration practices.',
        'background.education': 'Education',
        'background.degreeTitle': 'Bachelor in AI Engineering',
        'background.degreeDetail': 'Building a foundation in engineering, problem-solving and applied technology.',
        'contact.kicker': 'Get in touch',
        'contact.heading': "Building something that needs a dependable backend? Let's talk.",
        'contact.copyEmail': 'Copy email',
        'contact.copied': 'Copied',
        'contact.downloadCV': 'Download CV',
    },
    ar: {
        name: 'براهمي عباس',
        skipLink: 'الانتقال إلى المحتوى',
        'nav.work': 'الأعمال',
        'nav.about': 'نبذة',
        'nav.contact': 'تواصل',
        'nav.github': 'GitHub',
        'hero.meta1': 'مقيم في الجزائر',
        'hero.meta2': 'متاح لمشاريع وفرص عمل جديدة',
        'hero.role1': 'مطوّر ويب',
        'hero.role2': 'باك-إند Laravel',
        'hero.pitch': 'أبني أنظمة باك-إند وتطبيقات ويب متكاملة، موثوقة ومختبرة جيدًا وقابلة للتوسّع — من تصميم قاعدة البيانات إلى الواجهة.',
        'hero.ctaWork': 'مشاهدة أعمالي',
        'work.kicker': 'أعمال مختارة',
        'work.count': '02 مشروع',
        'pharmacera.type': 'نظام إدارة صيدلية',
        'pharmacera.summary': 'إدارة المخزون والمبيعات والتقارير في تطبيق Laravel واحد — مُصمَّم للتعامل مع القواعد العملية لصيدلية حقيقية.',
        'pharmacera.whatItDoes': 'يمنح Pharmacera المدراء والصيادلة وأمناء الصندوق الأدوات اللازمة لإدارة المخزون والمبيعات والتقارير، مع صلاحيات وصول حسب الدور.',
        'pharmacera.builtAround': 'إدارة مخزون FIFO، تتبّع تواريخ الصلاحية، البيع بمسح الباركود، سجلّ تدقيق كامل، تنبيهات بريدية عند انخفاض المخزون، ودعم للعربية (RTL) والفرنسية والإنجليزية.',
        'project.openLarger': 'فتح بحجم أكبر',
        'project.whatItDoes': 'ما الذي يقوم به',
        'project.builtAround': 'مبني حول',
        'project.stack': 'التقنيات المستخدمة',
        'project.liveDemo': 'عرض مباشر',
        'devdz.type': 'منصّة مجتمعية',
        'devdz.summary': 'مساحة للمطوّرين الجزائريين لمشاركة مشاريعهم، والبحث عن فرص عمل، وطرح أسئلة مفيدة.',
        'devdz.featuresLabel': 'الميزات',
        'devdz.features': 'مشاريع، فرص عمل، أسئلة، تعليقات، تصويت، وسوم، تصفية حسب المدينة، وبحث بالكلمات المفتاحية.',
        'devdz.makingItWorkLabel': 'كيف يعمل',
        'devdz.makingItWork': 'نظام مصادقة مخصّص باستخدام الجلسات وحماية CSRF ووسائط middleware، مع مكوّنات Blade مصمَّمة بواسطة Tailwind CSS.',
        'about.kicker': 'نبذة',
        'about.kicker2': 'ما أعمل به',
        'about.heading': 'أبني تطبيقات جاهزة للإنتاج، مصمَّمة لتتوسّع وتصمد أمام الاستخدام الحقيقي.',
        'about.p1': 'أعمل بشكل أساسي بلغة PHP وإطار Laravel، مع تركيز على الجوانب التي تجعل البرمجيات موثوقة في بيئة الإنتاج: منطق أعمال واضح، مصادقة آمنة، نمذجة بيانات سليمة، وتغطية اختبارات آلية.',
        'about.p2': 'أعمل عبر المكدّس التقني بالكامل — من تصميم قاعدة البيانات إلى الواجهة — وأواصل تعميق مهاراتي في الواجهة الأمامية وJavaScript إلى جانب عملي في الباك-إند.',
        'skills.backend': 'الواجهة الخلفية',
        'skills.database': 'قواعد البيانات',
        'skills.frontend': 'الواجهة الأمامية',
        'skills.tools': 'أدوات',
        'background.kicker': 'الخبرة والتعليم',
        'background.kicker2': 'التعلّم بالممارسة',
        'background.experience': 'خبرة عملية',
        'background.internTitle': 'متدرّب في قسم تكنولوجيا المعلومات',
        'background.internDetail': 'اكتسبت خبرة في البنية التحتية لتكنولوجيا المعلومات المؤسسية، وسير العمل التشغيلي اليومي، وممارسات إدارة الأنظمة.',
        'background.education': 'تعليم',
        'background.degreeTitle': 'بكالوريوس في هندسة الذكاء الاصطناعي',
        'background.degreeDetail': 'بناء أساس متين في الهندسة وحل المشكلات والتقنيات التطبيقية.',
        'contact.kicker': 'تواصل معي',
        'contact.heading': 'هل تعمل على مشروع يحتاج باك-إند يُعتمد عليه؟ لنتحدث.',
        'contact.copyEmail': 'نسخ البريد الإلكتروني',
        'contact.copied': 'تم النسخ',
        'contact.downloadCV': 'تحميل السيرة الذاتية',
    },
};

const LANG_KEY = 'portfolio-lang';

function getStoredLang() {
    try {
        return localStorage.getItem(LANG_KEY);
    } catch {
        return null;
    }
}

function storeLang(lang) {
    try {
        localStorage.setItem(LANG_KEY, lang);
    } catch {
        /* ignore storage errors (private browsing, etc.) */
    }
}

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.documentElement.lang = lang;
    document.documentElement.dir = dir;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    document.querySelectorAll('.lang-toggle').forEach((toggle) => {
        toggle.querySelectorAll('.lang-toggle-option').forEach((opt) => {
            opt.classList.toggle('is-active', opt.getAttribute('data-lang-option') === lang);
        });
    });

    const copyBtn = document.getElementById('copy-email');
    if (copyBtn && !copyBtn.dataset.justCopied) {
        copyBtn.textContent = dict['contact.copyEmail'];
    }

    storeLang(lang);
}

function initLanguage() {
    const stored = getStoredLang();
    const initial = stored === 'ar' || stored === 'en' ? stored : 'en';
    applyLanguage(initial);

    document.querySelectorAll('.lang-toggle').forEach((toggle) => {
        toggle.addEventListener('click', () => {
            const current = document.documentElement.lang === 'ar' ? 'ar' : 'en';
            applyLanguage(current === 'ar' ? 'en' : 'ar');
        });
    });
}

document.addEventListener('DOMContentLoaded', initLanguage);

window.__i18n = { translations, applyLanguage };