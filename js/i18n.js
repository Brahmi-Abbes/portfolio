const translations = {
    en: {
        name: 'Brahmi Abbes',
        skipLink: 'Skip to content',
        'nav.work': 'Work',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.github': 'GitHub',
        'hero.meta': 'Based in Algeria, open to remote work',
        'hero.role1': 'Backend / Full-Stack Developer',
        'hero.pitch': 'I build complete web applications with PHP, Laravel, JavaScript and modern web technologies, with a strong focus on backend architecture, databases, authentication and real business rules.',
        'hero.ctaWork': 'View my work',
        'meta.title': 'Brahmi Abbes — Backend / Full-Stack Developer · PHP & Laravel',
        'meta.description': 'I build complete web applications with PHP, Laravel, JavaScript and modern web technologies, with a strong focus on backend architecture, databases, authentication and real business rules.',
        'work.kicker': 'Selected work',
        'pharmacera.type': 'Pharmacy management system',
        'pharmacera.summary': 'A Laravel application for managing pharmacy inventory, sales and reporting, with the business rules handled in the backend.',
        'pharmacera.whatItDoes': 'Pharmacera gives Admins, Pharmacists and Cashiers the tools to manage stock, sales and reporting with role-based access.',
        'pharmacera.builtAround': 'FIFO stock management, expiry tracking, barcode sales, audit logs, low-stock email alerts and Arabic RTL, French and English.',
        'pharmacera.engineering.title': 'Engineering decisions',
        'pharmacera.engineering.1': 'Batch-based inventory keeps stock quantities and expiry dates tied to individual medicine batches.',
        'pharmacera.engineering.2': 'FIFO sales prioritize older stock when processing sales.',
        'pharmacera.engineering.3': 'Role-based access separates what Admins, Pharmacists and Cashiers can do.',
        'project.openLarger': 'Open larger',
        'project.readMore': "How it's built",
        'project.stack.prev': 'Previous project',
        'project.stack.next': 'Next project',
        'project.whatItDoes': 'What it does',
        'project.builtAround': 'Key features',
        'project.stack': 'Stack',
        'project.liveDemo': 'Live demo',
        'devdz.type': 'Community platform',
        'devdz.summary': 'A community platform for Algerian developers to share projects, find jobs and ask questions.',
        'devdz.featuresLabel': 'Features',
        'devdz.features': 'Projects, jobs, questions, comments, voting, tags, city filtering and keyword search.',
        'devdz.makingItWorkLabel': 'Implementation',
        'devdz.makingItWork': 'Authentication uses sessions, CSRF protection and middleware, while Blade components and Tailwind CSS handle the interface.',
        'devdz.engineering.title': 'Engineering decisions',
        'devdz.engineering.1': 'Authentication and protected actions are handled through sessions, CSRF protection and middleware.',
        'devdz.engineering.2': 'Users can interact with content through comments and voting while access to protected actions is restricted to authenticated users.',
        'devdz.engineering.3': 'Projects, jobs and questions are separated into distinct content types with keyword search, tags and city filtering.',
        'sketchrush.type': 'Real-time multiplayer game',
        'sketchrush.summary': 'A real-time drawing and guessing game for friends, with an original clue system and scoring streaks—powered by Laravel, Reverb and Redis.',
        'sketchrush.whatItDoes': "Players join a room with a 6-character code, take turns drawing a secret word on a shared canvas, and race to guess it first. Clues, passive letter reveals and consecutive-guess streaks combine into a speed-based scoring system, ending in a final leaderboard.",
        'sketchrush.builtAround': 'Laravel Reverb WebSockets for real-time drawing sync and presence, Redis for all live game state, and server-authoritative round timers and word validation so no game-ending logic ever depends on a single browser staying open.',
        'sketchrush.engineering.title': 'Engineering decisions',
        'sketchrush.engineering.1': "The secret word never reaches the browser—not even the drawer's—word choices go out over private per-player channels, and correctness is validated entirely server-side.",
        'sketchrush.engineering.2': "Round timing runs on server-scheduled delayed jobs tagged with an incrementing token, so a stale job from an early-ended round can detect it's obsolete and safely do nothing.",
        'sketchrush.engineering.3': 'Redis and MySQL are split by lifetime: anything only needed while a game is live stays in Redis, and only final results are written to MySQL once, at game end.',
        'about.kicker': 'What I build',
        'about.heading': 'I build full-stack web applications with PHP and Laravel, with a strong focus on authentication, permissions, database relationships and business rules.',
        'about.p2': '',
        'skills.backend': 'BACKEND',
        'skills.database': 'DATABASE',
        'skills.frontend': 'FRONTEND',
        'skills.tools': 'TOOLS',
        'background.kicker': 'Learning by building',
        'background.experience': 'Experience',
        'background.internTitle': 'IT Department Intern',
        'background.internDetail': 'Worked within the IT department, gaining exposure to enterprise infrastructure, system administration and daily IT operations.',
        'background.education': 'Education',
        'background.degreeTitle': 'Bachelor in AI Engineering',
        'background.degreeDetail': 'Focused on engineering, programming and artificial intelligence.',
        'contact.kicker': 'Get in touch',
        'contact.heading': "Have a project that needs building? I'll build it.",

        'contact.copyEmail': 'Copy email',
        'contact.copied': 'Copied',
        'contact.downloadCV': 'Download CV',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.message': 'Message',
        'contact.form.send': 'Send message',
        'contact.form.sending': 'Sending…',
        'contact.form.success': "Thanks — I'll get back to you soon.",
        'contact.form.error': 'Something went wrong. Try emailing me directly instead.',
    },
    ar: {
        name: 'براهمي عباس',
        skipLink: 'الانتقال إلى المحتوى',
        'nav.work': 'الأعمال',
        'nav.about': 'نبذة',
        'nav.contact': 'تواصل',
        'nav.github': 'GitHub',
        'hero.meta': 'مقيم في الجزائر، متاح للعمل عن بُعد',
        'hero.role1': 'مطور باك-إند / فول-ستاك',
        'hero.pitch': 'أطوّر تطبيقات ويب متكاملة باستخدام PHP وLaravel وJavaScript وتقنيات الويب الحديثة، مع تركيز قوي على هندسة الباك-إند وقواعد البيانات والمصادقة وقواعد العمل الفعلية.',
        'hero.ctaWork': 'مشاهدة أعمالي',
        'meta.title': 'براهمي عباس — مطور باك-إند / فول-ستاك · PHP و Laravel',
        'meta.description': 'أطوّر تطبيقات ويب متكاملة باستخدام PHP وLaravel وJavaScript وتقنيات الويب الحديثة، مع تركيز قوي على هندسة الباك-إند وقواعد البيانات والمصادقة وقواعد العمل الفعلية.',
        'work.kicker': 'أعمال مختارة',
        'pharmacera.type': 'نظام إدارة صيدلية',
        'pharmacera.summary': 'تطبيق Laravel لإدارة مخزون الصيدلية والمبيعات والتقارير، مع تنفيذ قواعد العمل في جهة الباك-إند.',
        'pharmacera.whatItDoes': 'يمنح Pharmacera المدراء والصيادلة وأمناء الصندوق الأدوات اللازمة لإدارة المخزون والمبيعات والتقارير، مع صلاحيات وصول حسب الدور.',
        'pharmacera.builtAround': 'إدارة مخزون FIFO، تتبّع تواريخ الصلاحية، البيع بمسح الباركود، سجلّ تدقيق كامل، تنبيهات بريدية عند انخفاض المخزون، ودعم للعربية (RTL) والفرنسية والإنجليزية.',
        'pharmacera.engineering.title': 'قرارات هندسية',
        'pharmacera.engineering.1': 'المخزون معتمد على دفعات، مما يربط كميات المخزون وتواريخ الصلاحية بكل دفعة دواء على حدة.',
        'pharmacera.engineering.2': 'مبيعات FIFO تعطي أسبقية للأصناف الأقدم عند تسجيل البيع.',
        'pharmacera.engineering.3': 'صلاحيات حسب الأدوار تحدد ما يمكن للمديرين والصيادلة وأمناء الصندوق القيام به.',
        'project.openLarger': 'فتح بحجم أكبر',
        'project.readMore': 'كيف تم بناؤه',
        'project.stack.prev': 'المشروع السابق',
        'project.stack.next': 'المشروع التالي',
        'project.whatItDoes': 'ما الذي يقوم به',
        'project.builtAround': 'الميزات الرئيسية',
        'project.stack': 'التقنيات المستخدمة',
        'project.liveDemo': 'عرض مباشر',
        'devdz.type': 'منصّة مجتمعية',
        'devdz.summary': 'منصّة مجتمعية للمطوّرين الجزائريين لمشاركة المشاريع، والعثور على وظائف، وطرح الأسئلة.',
        'devdz.featuresLabel': 'الميزات',
        'devdz.features': 'مشاريع، فرص عمل، أسئلة، تعليقات، تصويت، وسوم، تصفية حسب المدينة، وبحث بالكلمات المفتاحية.',
        'devdz.makingItWorkLabel': 'التنفيذ',
        'devdz.makingItWork': 'يستخدم المصادقة عبر الجلسات، حماية CSRF ووسائط middleware، في حين تتولى مكوّنات Blade وTailwind CSS الواجهة.',
        'devdz.engineering.title': 'قرارات هندسية',
        'devdz.engineering.1': 'تتم إدارة المصادقة والإجراءات المحمية عبر الجلسات، وحماية CSRF ووسائط middleware.',
        'devdz.engineering.2': 'يمكن للمستخدمين التفاعل مع المحتوى عبر التعليقات والتصويت بينما تقتصر الإجراءات المحمية على المستخدمين المصادق عليهم.',
        'devdz.engineering.3': 'تم فصل المشاريع والوظائف والأسئلة إلى أنواع محتوى مستقلة، مع دعم البحث بالكلمات المفتاحية والوسوم والتصفية حسب المدينة.',
        'sketchrush.type': 'لعبة جماعية في الوقت الفعلي',
        'sketchrush.summary': 'لعبة رسم وتخمين جماعية في الوقت الفعلي بين الأصدقاء، بنظام تلميحات وتسلسل نقاط أصلي — مبنية على Laravel و Reverb و Redis.',
        'sketchrush.whatItDoes': 'ينضم اللاعبون إلى غرفة برمز مكوّن من 6 خانات، ويتناوبون على رسم كلمة سرية على لوحة مشتركة بينما يتسابق الباقون لتخمينها أولاً. تتجمّع التلميحات والكشف التلقائي للحروف وتسلسل التخمينات الصحيحة في نظام نقاط يعتمد على السرعة، لينتهي بلوحة صدارة نهائية.',
        'sketchrush.builtAround': 'قنوات Laravel Reverb للاتصال الفوري لمزامنة الرسم والحضور، و Redis لكل حالة اللعبة الحيّة، ومؤقتات جولات ومصادقة كلمات تُدار بالكامل من الخادم بحيث لا يعتمد أي منطق لإنهاء اللعبة على بقاء متصفح واحد مفتوحًا.',
        'sketchrush.engineering.title': 'قرارات هندسية',
        'sketchrush.engineering.1': 'الكلمة السرية لا تصل أبدًا إلى المتصفح — حتى متصفح الراسم نفسه — إذ تُرسل خيارات الكلمات عبر قنوات خاصة بكل لاعب، ويتم التحقق من صحة التخمين بالكامل من جهة الخادم.',
        'sketchrush.engineering.2': 'يعتمد توقيت الجولات على مهام مؤجلة مجدولة من الخادم ومُعلَّمة برمز يزداد مع كل دور، بحيث تكتشف أي مهمة قديمة من جولة انتهت مبكرًا أنها غير صالحة وتتوقف عن العمل بأمان.',
        'sketchrush.engineering.3': 'يتم تقسيم Redis و MySQL حسب مدة بقاء البيانات: كل ما يلزم فقط أثناء اللعبة الجارية يبقى في Redis، بينما تُكتب النتائج النهائية فقط في MySQL عند انتهاء اللعبة.',
        'about.kicker': 'ما أبنيه',
        'about.heading': 'أبني تطبيقات ويب متكاملة باستخدام PHP وLaravel، مع تركيز قوي على المصادقة والصلاحيات وعلاقات قواعد البيانات وقواعد العمل.',
        'about.p2': '',
        'skills.backend': 'BACKEND',
        'skills.database': 'DATABASE',
        'skills.frontend': 'FRONTEND',
        'skills.tools': 'TOOLS',
        'background.kicker': 'التعلّم بالممارسة',
        'background.experience': 'خبرة عملية',
        'background.internTitle': 'متدرّب في قسم تكنولوجيا المعلومات',
        'background.internDetail': 'عملت داخل قسم تكنولوجيا المعلومات، واكتسبت خبرة في البنية التحتية المؤسسية، إدارة الأنظمة والعمليات اليومية لتكنولوجيا المعلومات.',
        'background.education': 'تعليم',
        'background.degreeTitle': 'بكالوريوس في هندسة الذكاء الاصطناعي',
        'background.degreeDetail': 'مركّز على الهندسة والبرمجة والذكاء الاصطناعي.',
        'contact.kicker': 'تواصل معي',
        'contact.heading': 'لديك مشروع يحتاج إلى تطوير؟ سأطوّره لك.',

        'contact.copyEmail': 'نسخ البريد الإلكتروني',
        'contact.copied': 'تم النسخ',
        'contact.downloadCV': 'تحميل السيرة الذاتية',
        'contact.form.name': 'الاسم',
        'contact.form.email': 'البريد الإلكتروني',
        'contact.form.message': 'الرسالة',
        'contact.form.send': 'إرسال الرسالة',
        'contact.form.sending': 'جارٍ الإرسال…',
        'contact.form.success': 'شكرًا، سأرد عليك قريبًا.',
        'contact.form.error': 'حدث خطأ ما. جرّب مراسلتي مباشرة عبر البريد الإلكتروني.',
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

    // Update document title and meta descriptions from translations when available
    if (dict['meta.title']) {
        document.title = dict['meta.title'];
    }
    try {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && dict['meta.description']) metaDesc.setAttribute('content', dict['meta.description']);
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc && dict['meta.description']) ogDesc.setAttribute('content', dict['meta.description']);
        const twitterDesc = document.querySelector('meta[name="twitter:description"]');
        if (twitterDesc && dict['meta.description']) twitterDesc.setAttribute('content', dict['meta.description']);
    } catch (e) {
        /* ignore meta update errors */
    }

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