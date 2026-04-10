/*
 * ============================================
 *  WEBSITE CONTENT — Nia Van Ham Counselling
 * ============================================
 *  Edit the text between the quote marks below
 *  to update what appears on the website.
 *
 *  To edit: use the Admin Editor page (admin.html)
 *  or carefully change the text in quotes here.
 * ============================================
 */

const SITE_CONTENT = {

  // ── HOME PAGE ──────────────────────────────
  home: {
    headline: "Welcome to Nia Van Ham Counselling",
    tagline: "A safe, supportive space where you can explore your thoughts and feelings. Together, we'll work towards positive change and personal growth.",
    ctaText: "Book an Appointment",

    card1Title: "Personalised Care",
    card1Text: "Every person is unique. Sessions are tailored to your individual needs and goals.",
    card2Title: "Safe Space",
    card2Text: "A warm, non-judgmental environment where you can feel heard and supported.",
    card3Title: "Evidence-Based",
    card3Text: "Drawing on proven therapeutic approaches to support meaningful, lasting change.",

    sectionHeading: "Compassionate Support for Your Journey",
    sectionText: "Whether you're navigating anxiety, relationship difficulties, grief, or simply feeling stuck, counselling can help you find clarity and move forward with confidence.",

    ctaHeading: "Ready to Take the First Step?",
    ctaSubtext: "Reaching out takes courage. I'm here to support you. Get in touch to book your initial consultation.",
  },

  // ── ABOUT PAGE ─────────────────────────────
  about: {
    heroTitle: "About Nia",
    name: "Nia Van Ham",
    qualifications: "Nia holds a Bachelor of Journalism, a Bachelor of Psychological Science from Griffith University, and a Master of Counselling from the Australian Institute of Professional Counsellors (AIPC). She is a registered member of the Australian Counselling Association.",
    bio1: "Nia is a warm, compassionate, and dedicated counsellor who is passionate about supporting people through life's challenges. She creates a safe, non-judgmental space where clients can explore their thoughts and feelings openly.",
    quote: "Counselling is about meeting you where you are — with compassion, without judgment — and walking alongside you as you find your own path forward.",
    bio2: "With experience across a range of settings, Nia has worked with individuals navigating anxiety, depression, relationship difficulties, grief and loss, trauma, life transitions, and issues of identity and self-esteem.",
    bio3: "Nia draws on evidence-based approaches including elements of Cognitive Behavioural Therapy (CBT), Acceptance and Commitment Therapy (ACT), and person-centred therapy, always tailoring her approach to the unique needs of each client.",
    bio4: "With a background in journalism, publishing, and editing, Nia developed a deep appreciation for the complexity of human experience and the importance of being truly heard. This foundation naturally evolved into a commitment to psychology and counselling, where she now supports clients in a more personal and meaningful way.",
    bio5: "Nia approaches therapy as a considered and collaborative process \u2014 a space to slow down, gain clarity, and thoughtfully explore what may feel overwhelming or difficult to articulate. Her work is grounded in presence, care, and respect, offering clients a calm and supportive environment in which deeper understanding and lasting change can emerge.",
  },

  // ── SERVICES PAGE ──────────────────────────
  services: {
    heroTitle: "Services",
    introHeading: "How I Can Help",
    introText: "I offer a range of counselling services to support you through life's challenges. Sessions are tailored to your individual needs using evidence-based approaches.",

    service1Title: "Anxiety",
    service1Text: "Support for generalised anxiety, social anxiety, panic, and persistent worry that interferes with daily life.",
    service2Title: "Depression",
    service2Text: "Helping you work through low mood, loss of motivation, and feelings of hopelessness to find your way forward.",
    service3Title: "Work & Life Stress",
    service3Text: "Managing the pressures of work, family, and everyday life. Building resilience and coping strategies.",
    service4Title: "Relationship Issues",
    service4Text: "Navigating difficulties in relationships, communication challenges, boundaries, and interpersonal patterns.",
    service5Title: "Grief & Loss",
    service5Text: "A compassionate space to process grief, loss, and bereavement at your own pace.",
    service6Title: "Trauma",
    service6Text: "Trauma-informed support including approaches for PTSD, complex trauma, and adverse life experiences.",
    service7Title: "Life Transitions",
    service7Text: "Support through major changes — career shifts, parenthood, separation, relocation, or retirement.",
    service8Title: "Self-Esteem & Identity",
    service8Text: "Exploring self-worth, personal identity, and building a stronger, more compassionate relationship with yourself.",

    approachHeading: "My Approach",
    approachText1: "I draw on a range of evidence-based therapeutic modalities, tailoring my approach to what works best for you. This may include elements of Cognitive Behavioural Therapy (CBT), Acceptance and Commitment Therapy (ACT), person-centred therapy, and trauma-informed practices.",
    approachText2: "Sessions are typically 50 minutes in duration. I offer both in-person and online appointments to suit your needs.",
    feeNote: "Please contact me for current fee information and availability.",
  },

  // ── CONTACT PAGE ───────────────────────────
  contact: {
    heroTitle: "Contact",
    heading: "Get in Touch",
    introText: "I'd love to hear from you. Whether you're ready to book your first session or simply have a question, please don't hesitate to reach out.",
    address: "6 Kinarra Street, Ashmore, QLD 4214",
    email: "hello@niavanham.com",
    phone: "+61 405 407 909",
    hours: "Monday\u2013Friday, 9am\u20135pm",
    formHeading: "Send a Message",
  },

  // ── FOOTER ─────────────────────────────────
  footer: {
    copyright: "© 2026 Nia Van Ham Counselling. All rights reserved.",
  }
};

// Make content available globally
if (typeof window !== 'undefined') {
  window.SITE_CONTENT = SITE_CONTENT;
}
