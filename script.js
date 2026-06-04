const books = [
  {
    title: "A Wonderful Journey",
    type: "english",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/003-A-Wonderful-Journey.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6Ijc5MjQiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
  },
  {
    title: "Love Beyond Time",
    type: "english",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/004-Love-Beyond-Time.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6Ijc5MjQiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
  },
  {
    title: "Love Of Rebirth",
    type: "english",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/005-Love-Of-Rebirth.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6Ijc5MjQiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
  },
  {
    title: "Love that Melts the Soul",
    type: "english",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/006-Love-that-Melts-the-Soul.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6Ijc5MjQiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
  },
  {
    title: "Melody of the Soul",
    type: "english",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/007-Melody-of-the-Soul.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "My Life In You",
    type: "english",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/008-My-Life-In-You.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "Peaks Of Shiva",
    type: "english",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/009-Peaks-Of-Shiva.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "The Endless Path Of Love",
    type: "english",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/010-The-Endless-Path-Of-Love.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "Time As Death",
    type: "english",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/011-Time-As-Death.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "அந்தமில்லா காதல் பாதை",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/012-%E0%AE%85%E0%AE%A8%E0%AF%8D%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B2%E0%AF%8D%E0%AE%B2%E0%AE%BE-%E0%AE%95%E0%AE%BE%E0%AE%A4%E0%AE%B2%E0%AF%8D-%E0%AE%AA%E0%AE%BE%E0%AE%A4%E0%AF%88.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "அழியாத உறவே",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/013-%E0%AE%85%E0%AE%B4%E0%AE%BF%E0%AE%AF%E0%AE%BE%E0%AE%A4-%E0%AE%89%E0%AE%B1%E0%AE%B5%E0%AF%87.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "அறிவின் அசைவுகள் பெண்மையின் புகழ்",
    type: "tamil",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/014-%E0%AE%85%E0%AE%B1%E0%AE%BF%E0%AE%B5%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%85%E0%AE%9A%E0%AF%88%E0%AE%B5%E0%AF%81%E0%AE%95%E0%AE%B3%E0%AF%8D-%E0%AE%AA%E0%AF%86%E0%AE%A3%E0%AF%8D%E0%AE%AE%E0%AF%88%E0%AE%AF%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%AA%E0%AF%81%E0%AE%95%E0%AE%B4%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "உன்னிடம் என் உயிர்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/015-%E0%AE%89%E0%AE%A9%E0%AF%8D%E0%AE%A9%E0%AE%BF%E0%AE%9F%E0%AE%AE%E0%AF%8D-%E0%AE%8E%E0%AE%A9%E0%AF%8D-%E0%AE%89%E0%AE%AF%E0%AE%BF%E0%AE%B0%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "என் காதலின் காவியம்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/016-%E0%AE%8E%E0%AE%A9%E0%AF%8D-%E0%AE%95%E0%AE%BE%E0%AE%A4%E0%AE%B2%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%95%E0%AE%BE%E0%AE%B5%E0%AE%BF%E0%AE%AF%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "காதல் கலைவாணர்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/017-%E0%AE%95%E0%AE%BE%E0%AE%A4%E0%AE%B2%E0%AF%8D-%E0%AE%95%E0%AE%B2%E0%AF%88%E0%AE%B5%E0%AE%BE%E0%AE%A3%E0%AE%B0%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "காலமும் உயிரும்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/018-%E0%AE%95%E0%AE%BE%E0%AE%B2%E0%AE%AE%E0%AF%81%E0%AE%AE%E0%AF%8D-%E0%AE%89%E0%AE%AF%E0%AE%BF%E0%AE%B0%E0%AF%81%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "சிவத்தின் சிகரங்கள்",
    type: "tamil",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/019-%E0%AE%9A%E0%AE%BF%E0%AE%B5%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%9A%E0%AE%BF%E0%AE%95%E0%AE%B0%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%B3%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "தமிழில் என் மனம்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/020-%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AE%BF%E0%AE%B2%E0%AF%8D-%E0%AE%8E%E0%AE%A9%E0%AF%8D-%E0%AE%AE%E0%AE%A9%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "தமிழ் உணர்வுகளின் பாசம்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/021-%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D-%E0%AE%89%E0%AE%A3%E0%AE%B0%E0%AF%8D%E0%AE%B5%E0%AF%81%E0%AE%95%E0%AE%B3%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%AA%E0%AE%BE%E0%AE%9A%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "தமிழ் மொழியின் காதல் பரிசு",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/022-%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D-%E0%AE%AE%E0%AF%8A%E0%AE%B4%E0%AE%BF%E0%AE%AF%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%95%E0%AE%BE%E0%AE%A4%E0%AE%B2%E0%AF%8D-%E0%AE%AA%E0%AE%B0%E0%AE%BF%E0%AE%9A%E0%AF%81.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "நேரத்தின் கவி",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/023-%E0%AE%A8%E0%AF%87%E0%AE%B0%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%95%E0%AE%B5%E0%AE%BF.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "பரியந்த பயணம்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/024-%E0%AE%AA%E0%AE%B0%E0%AE%BF%E0%AE%AF%E0%AE%A8%E0%AF%8D%E0%AE%A4-%E0%AE%AA%E0%AE%AF%E0%AE%A3%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "மறக்க முடியாத மௌனம்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/025-%E0%AE%AE%E0%AE%B1%E0%AE%95%E0%AF%8D%E0%AE%95-%E0%AE%AE%E0%AF%81%E0%AE%9F%E0%AE%BF%E0%AE%AF%E0%AE%BE%E0%AE%A4-%E0%AE%AE%E0%AF%8C%E0%AE%A9%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "வாழ்க்கையின் விழிகள்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/026-%E0%AE%B5%E0%AE%BE%E0%AE%B4%E0%AF%8D%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%88%E0%AE%AF%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%B5%E0%AE%BF%E0%AE%B4%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "விடியலின் எதிர்பார்ப்பு",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/027-%E0%AE%B5%E0%AE%BF%E0%AE%9F%E0%AE%BF%E0%AE%AF%E0%AE%B2%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%8E%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AF%8D%E0%AE%AA%E0%AE%BE%E0%AE%B0%E0%AF%8D%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AF%81.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "என் கனவுகளின் பிரபஞ்சம்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/028-%E0%AE%8E%E0%AE%A9%E0%AF%8D-%E0%AE%95%E0%AE%A9%E0%AE%B5%E0%AF%81%E0%AE%95%E0%AE%B3%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%AA%E0%AE%BF%E0%AE%B0%E0%AE%AA%E0%AE%9E%E0%AF%8D%E0%AE%9A%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "வெற்றிக்கான வழிகள்",
    type: "tamil",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/029-%E0%AE%B5%E0%AF%86%E0%AE%B1%E0%AF%8D%E0%AE%B1%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%BE%E0%AE%A9-%E0%AE%B5%E0%AE%B4%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "உடலும் உள்ளமும்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/030-%E0%AE%89%E0%AE%9F%E0%AE%B2%E0%AF%81%E0%AE%AE%E0%AF%8D-%E0%AE%89%E0%AE%B3%E0%AF%8D%E0%AE%B3%E0%AE%AE%E0%AF%81%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "துணிந்து செல்",
    type: "tamil",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/031-%E0%AE%A4%E0%AF%81%E0%AE%A3%E0%AE%BF%E0%AE%A8%E0%AF%8D%E0%AE%A4%E0%AF%81-%E0%AE%9A%E0%AF%86%E0%AE%B2%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "போராடும் மனம்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/032-%E0%AE%AA%E0%AF%8B%E0%AE%B0%E0%AE%BE%E0%AE%9F%E0%AF%81%E0%AE%AE%E0%AF%8D-%E0%AE%AE%E0%AE%A9%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "நம்பிக்கை நெறிகள்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/033-%E0%AE%A8%E0%AE%AE%E0%AF%8D%E0%AE%AA%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%88-%E0%AE%A8%E0%AF%86%E0%AE%B1%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "அறிவியலும் உயிரியலும்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/034-%E0%AE%85%E0%AE%B1%E0%AE%BF%E0%AE%B5%E0%AE%BF%E0%AE%AF%E0%AE%B2%E0%AF%81%E0%AE%AE%E0%AF%8D-%E0%AE%89%E0%AE%AF%E0%AE%BF%E0%AE%B0%E0%AE%BF%E0%AE%AF%E0%AE%B2%E0%AF%81%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "என்னால் முடியும்",
    type: "tamil",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/035-%E0%AE%8E%E0%AE%A9%E0%AF%8D%E0%AE%A9%E0%AE%BE%E0%AE%B2%E0%AF%8D-%E0%AE%AE%E0%AF%81%E0%AE%9F%E0%AE%BF%E0%AE%AF%E0%AF%81%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "நீ இல்லாமல்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/036-%E0%AE%A8%E0%AF%80-%E0%AE%87%E0%AE%B2%E0%AF%8D%E0%AE%B2%E0%AE%BE%E0%AE%AE%E0%AE%B2%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "மெய்பொருள் ஆன்மிகம்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/037-%E0%AE%AE%E0%AF%86%E0%AE%AF%E0%AF%8D%E0%AE%AA%E0%AF%8A%E0%AE%B0%E0%AF%81%E0%AE%B3%E0%AF%8D-%E0%AE%86%E0%AE%A9%E0%AF%8D%E0%AE%AE%E0%AE%BF%E0%AE%95%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "அகன் அனுபவங்கள்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/038-%E0%AE%85%E0%AE%95%E0%AE%A9%E0%AF%8D-%E0%AE%85%E0%AE%A9%E0%AF%81%E0%AE%AA%E0%AE%B5%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%B3%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "ஆயிரம் இரவுகள் கடந்தாலும்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/039-%E0%AE%86%E0%AE%AF%E0%AE%BF%E0%AE%B0%E0%AE%AE%E0%AF%8D-%E0%AE%87%E0%AE%B0%E0%AE%B5%E0%AF%81%E0%AE%95%E0%AE%B3%E0%AF%8D-%E0%AE%95%E0%AE%9F%E0%AE%A8%E0%AF%8D%E0%AE%A4%E0%AE%BE%E0%AE%B2%E0%AF%81%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "மானுட நேயம்",
    type: "tamil",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/040-%E0%AE%AE%E0%AE%BE%E0%AE%A9%E0%AF%81%E0%AE%9F-%E0%AE%A8%E0%AF%87%E0%AE%AF%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "வாழ்வின் படிப்பறை",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/041-%E0%AE%B5%E0%AE%BE%E0%AE%B4%E0%AF%8D%E0%AE%B5%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%AA%E0%AE%9F%E0%AE%BF%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%B1%E0%AF%88.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "அன்பு கவிகள்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/042-%E0%AE%85%E0%AE%A9%E0%AF%8D%E0%AE%AA%E0%AF%81-%E0%AE%95%E0%AE%B5%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "தாயின் மடியில் வாழ்க்கையின் வேர்கள்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/043-%E0%AE%A4%E0%AE%BE%E0%AE%AF%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%AE%E0%AE%9F%E0%AE%BF%E0%AE%AF%E0%AE%BF%E0%AE%B2%E0%AF%8D-%E0%AE%B5%E0%AE%BE%E0%AE%B4%E0%AF%8D%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%88%E0%AE%AF%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%B5%E0%AF%87%E0%AE%B0%E0%AF%8D%E0%AE%95%E0%AE%B3%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "இதயம் துடிக்கும் நேரம்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/044-%E0%AE%87%E0%AE%A4%E0%AE%AF%E0%AE%AE%E0%AF%8D-%E0%AE%A4%E0%AF%81%E0%AE%9F%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%81%E0%AE%AE%E0%AF%8D-%E0%AE%A8%E0%AF%87%E0%AE%B0%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "அப்பா என்ற அழியாத ஒளி",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/045-%E0%AE%85%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%BE-%E0%AE%8E%E0%AE%A9%E0%AF%8D%E0%AE%B1-%E0%AE%85%E0%AE%B4%E0%AE%BF%E0%AE%AF%E0%AE%BE%E0%AE%A4-%E0%AE%92%E0%AE%B3%E0%AE%BF.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "ஒழுக்கமே வாழ்க்கையின் ஒளி",
    type: "tamil",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/046-%E0%AE%92%E0%AE%B4%E0%AF%81%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%AE%E0%AF%87-%E0%AE%B5%E0%AE%BE%E0%AE%B4%E0%AF%8D%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%88%E0%AE%AF%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%92%E0%AE%B3%E0%AE%BF.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "மன அமைதிக்கான முத்திரைகள்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/047-%E0%AE%AE%E0%AE%A9-%E0%AE%85%E0%AE%AE%E0%AF%88%E0%AE%A4%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%BE%E0%AE%A9-%E0%AE%AE%E0%AF%81%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AF%88%E0%AE%95%E0%AE%B3%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "Roads Of Hope",
    type: "english",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/048-Roads-Of-Hope.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "In Search of a Kiss",
    type: "english",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/049-In-Search-of-a-Kiss.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "Crossing a Thousand Nights",
    type: "english",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/050-Crossing-a-Thousand-Nights.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "Empowering Others A Ripple Effect",
    type: "english",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/051-Empowering-Others-A-Ripple-Effect.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "Nurturing Soul(Mother's Care)",
    type: "english",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/052-Nurturing-SoulMothers-Care.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "Triumph of the Human Spirit",
    type: "english",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/053-Triumph-of-the-Human-Spirit.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "The Gift of Gratitude",
    type: "english",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/054-The-Gift-of-Gratitude.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "Eternal Horizon (Nature's Infinite Love)",
    type: "english",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/055-Eternal-Horizon-Natures-Infinite-Love.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "Human Virtues",
    type: "english",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/056-Human-Virtues.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "The Path To Success",
    type: "english",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/057-The-Path-To-Success.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "நம் சொற்கள் நம் பாதை",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/058-%E0%AE%A8%E0%AE%AE%E0%AF%8D-%E0%AE%9A%E0%AF%8A%E0%AE%B1%E0%AF%8D%E0%AE%95%E0%AE%B3%E0%AF%8D-%E0%AE%A8%E0%AE%AE%E0%AF%8D-%E0%AE%AA%E0%AE%BE%E0%AE%A4%E0%AF%88.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "கடமைக்குரிய பனி",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/059-%E0%AE%95%E0%AE%9F%E0%AE%AE%E0%AF%88%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%81%E0%AE%B0%E0%AE%BF%E0%AE%AF-%E0%AE%AA%E0%AE%A9%E0%AE%BF.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "தியாகத்தின் துளி",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/060-%E0%AE%A4%E0%AE%BF%E0%AE%AF%E0%AE%BE%E0%AE%95%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%A4%E0%AF%81%E0%AE%B3%E0%AE%BF.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "சிந்தனை செல்வம்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/061-%E0%AE%9A%E0%AE%BF%E0%AE%A8%E0%AF%8D%E0%AE%A4%E0%AE%A9%E0%AF%88-%E0%AE%9A%E0%AF%86%E0%AE%B2%E0%AF%8D%E0%AE%B5%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "உறுதியின் உச்சி",
    type: "tamil",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/062-%E0%AE%89%E0%AE%B1%E0%AF%81%E0%AE%A4%E0%AE%BF%E0%AE%AF%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%89%E0%AE%9A%E0%AF%8D%E0%AE%9A%E0%AE%BF.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "தோழமையின் தீப்பொறி",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/063-%E0%AE%A4%E0%AF%8B%E0%AE%B4%E0%AE%AE%E0%AF%88%E0%AE%AF%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%A4%E0%AF%80%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AF%8A%E0%AE%B1%E0%AE%BF.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "சின்னத் தொட்டில்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/064-%E0%AE%9A%E0%AE%BF%E0%AE%A9%E0%AF%8D%E0%AE%A9%E0%AE%A4%E0%AF%8D-%E0%AE%A4%E0%AF%8A%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%BF%E0%AE%B2%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "சமய நெருப்பு",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/065-%E0%AE%9A%E0%AE%AE%E0%AE%AF-%E0%AE%A8%E0%AF%86%E0%AE%B0%E0%AF%81%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AF%81.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "சமச்சீர்மையின் சந்தோஷம்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/066-%E0%AE%9A%E0%AE%AE%E0%AE%9A%E0%AF%8D%E0%AE%9A%E0%AF%80%E0%AE%B0%E0%AF%8D%E0%AE%AE%E0%AF%88%E0%AE%AF%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%9A%E0%AE%A8%E0%AF%8D%E0%AE%A4%E0%AF%8B%E0%AE%B7%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "உழைப்பின் உயர்வு",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/067-%E0%AE%89%E0%AE%B4%E0%AF%88%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%89%E0%AE%AF%E0%AE%B0%E0%AF%8D%E0%AE%B5%E0%AF%81.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "சுதந்திரத்தின் சுவாசம்",
    type: "tamil",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/068-%E0%AE%9A%E0%AF%81%E0%AE%A4%E0%AE%A8%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%9A%E0%AF%81%E0%AE%B5%E0%AE%BE%E0%AE%9A%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "உணர்வின் உவமை",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/069-%E0%AE%89%E0%AE%A3%E0%AE%B0%E0%AF%8D%E0%AE%B5%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%89%E0%AE%B5%E0%AE%AE%E0%AF%88.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "மௌனத்தின் மந்திரம்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/070-%E0%AE%AE%E0%AF%8C%E0%AE%A9%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%AE%E0%AE%A8%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "சிறகு விரித்த நிலா",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/071-%E0%AE%9A%E0%AE%BF%E0%AE%B1%E0%AE%95%E0%AF%81-%E0%AE%B5%E0%AE%BF%E0%AE%B0%E0%AE%BF%E0%AE%A4%E0%AF%8D%E0%AE%A4-%E0%AE%A8%E0%AE%BF%E0%AE%B2%E0%AE%BE.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "பகுத்தறிவின் புரட்சி",
    type: "tamil",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/072-%E0%AE%AA%E0%AE%95%E0%AF%81%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%B1%E0%AE%BF%E0%AE%B5%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%AA%E0%AF%81%E0%AE%B0%E0%AE%9F%E0%AF%8D%E0%AE%9A%E0%AE%BF.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "ஒழுக்கத்தின் ஒளியகம்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/073-%E0%AE%92%E0%AE%B4%E0%AF%81%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%92%E0%AE%B3%E0%AE%BF%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "புரட்சியின் புயல்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/074-%E0%AE%AA%E0%AF%81%E0%AE%B0%E0%AE%9F%E0%AF%8D%E0%AE%9A%E0%AE%BF%E0%AE%AF%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%AA%E0%AF%81%E0%AE%AF%E0%AE%B2%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "சாகா சக்தி",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/075-%E0%AE%9A%E0%AE%BE%E0%AE%95%E0%AE%BE-%E0%AE%9A%E0%AE%95%E0%AF%8D%E0%AE%A4%E0%AE%BF.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "குழப்பத்தை களை",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/076-%E0%AE%95%E0%AF%81%E0%AE%B4%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AF%88-%E0%AE%95%E0%AE%B3%E0%AF%88.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "அழிவை அழிக்கும் அறிவு",
    type: "tamil",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/077-%E0%AE%85%E0%AE%B4%E0%AE%BF%E0%AE%B5%E0%AF%88-%E0%AE%85%E0%AE%B4%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%81%E0%AE%AE%E0%AF%8D-%E0%AE%85%E0%AE%B1%E0%AE%BF%E0%AE%B5%E0%AF%81.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "மனித மாயவியல்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/078-%E0%AE%AE%E0%AE%A9%E0%AE%BF%E0%AE%A4-%E0%AE%AE%E0%AE%BE%E0%AE%AF%E0%AE%B5%E0%AE%BF%E0%AE%AF%E0%AE%B2%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "தலைமுறையின் தவறுகள்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/079-%E0%AE%A4%E0%AE%B2%E0%AF%88%E0%AE%AE%E0%AF%81%E0%AE%B1%E0%AF%88%E0%AE%AF%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%A4%E0%AE%B5%E0%AE%B1%E0%AF%81%E0%AE%95%E0%AE%B3%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "இதயம் துடிக்கும் நேரம்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/080-%E0%AE%85%E0%AE%A9%E0%AF%8D%E0%AE%AA%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%85%E0%AE%AA%E0%AE%BE%E0%AE%AF%E0%AE%AE%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "முடிவற்ற வினாக்கள்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/081-%E0%AE%AE%E0%AF%81%E0%AE%9F%E0%AE%BF%E0%AE%B5%E0%AE%B1%E0%AF%8D%E0%AE%B1-%E0%AE%B5%E0%AE%BF%E0%AE%A9%E0%AE%BE%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%B3%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "காற்றின் கோட்பாடு",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/082-%E0%AE%95%E0%AE%BE%E0%AE%B1%E0%AF%8D%E0%AE%B1%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%95%E0%AF%8B%E0%AE%9F%E0%AF%8D%E0%AE%AA%E0%AE%BE%E0%AE%9F%E0%AF%81.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "வாழ்வின் வண்ணக் கண்ணாடி",
    type: "tamil",
    featured: true,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/083-%E0%AE%B5%E0%AE%BE%E0%AE%B4%E0%AF%8D%E0%AE%B5%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%B5%E0%AE%A3%E0%AF%8D%E0%AE%A3%E0%AE%95%E0%AF%8D-%E0%AE%95%E0%AE%A3%E0%AF%8D%E0%AE%A3%E0%AE%BE%E0%AE%9F%E0%AE%BF.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "பூமியின் புலம்பல்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/084-%E0%AE%AA%E0%AF%82%E0%AE%AE%E0%AE%BF%E0%AE%AF%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%AA%E0%AF%81%E0%AE%B2%E0%AE%AE%E0%AF%8D%E0%AE%AA%E0%AE%B2%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "அசைவற்ற அலைகள்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/085-%E0%AE%85%E0%AE%9A%E0%AF%88%E0%AE%B5%E0%AE%B1%E0%AF%8D%E0%AE%B1-%E0%AE%85%E0%AE%B2%E0%AF%88%E0%AE%95%E0%AE%B3%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "பகை சுமக்கும் புன்னகை",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/086-%E0%AE%AA%E0%AE%95%E0%AF%88-%E0%AE%9A%E0%AF%81%E0%AE%AE%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%81%E0%AE%AE%E0%AF%8D-%E0%AE%AA%E0%AF%81%E0%AE%A9%E0%AF%8D%E0%AE%A9%E0%AE%95%E0%AF%88.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  },
  {
    title: "தவறே முதல் கற்றல் நூல்",
    type: "tamil",
    featured: false,
    image: "https://unitedsamaritansindia.org/wp-content/uploads/2026/01/087-%E0%AE%A4%E0%AE%B5%E0%AE%B1%E0%AF%87-%E0%AE%AE%E0%AF%81%E0%AE%A4%E0%AE%B2%E0%AF%8D-%E0%AE%95%E0%AE%B1%E0%AF%8D%E0%AE%B1%E0%AE%B2%E0%AF%8D-%E0%AE%A8%E0%AF%82%E0%AE%B2%E0%AF%8D.jpg",
    orderLink: "https://unitedsamaritansindia.org/united-samaritans-india-publications/#0"
  }
];

const palettes = [
  ["#061f5f", "#2f8df5"],
  ["#0d9a9a", "#0b45b7"],
  ["#5941a9", "#e96f58"],
  ["#07142f", "#d7a72f"],
  ["#0b45b7", "#f9d66b"],
  ["#233a75", "#0d9a9a"],
  ["#8a2f68", "#d7a72f"],
  ["#14315f", "#e96f58"]
];

const header = document.querySelector("#siteHeader");
const menuToggle = document.querySelector("#menuToggle");
const navShell = document.querySelector("#navShell");
const bookGrid = document.querySelector("#bookGrid");
const filterButtons = document.querySelectorAll(".filter");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const countryCodeSelect = document.querySelector("#countryCode");

const countryCodes = [
  ["Afghanistan", "+93"], ["Albania", "+355"], ["Algeria", "+213"], ["Andorra", "+376"],
  ["Angola", "+244"], ["Argentina", "+54"], ["Armenia", "+374"], ["Australia", "+61"],
  ["Austria", "+43"], ["Azerbaijan", "+994"], ["Bahamas", "+1-242"], ["Bahrain", "+973"],
  ["Bangladesh", "+880"], ["Barbados", "+1-246"], ["Belarus", "+375"], ["Belgium", "+32"],
  ["Belize", "+501"], ["Benin", "+229"], ["Bhutan", "+975"], ["Bolivia", "+591"],
  ["Bosnia and Herzegovina", "+387"], ["Botswana", "+267"], ["Brazil", "+55"], ["Brunei", "+673"],
  ["Bulgaria", "+359"], ["Burkina Faso", "+226"], ["Burundi", "+257"], ["Cambodia", "+855"],
  ["Cameroon", "+237"], ["Canada", "+1"], ["Cape Verde", "+238"], ["Central African Republic", "+236"],
  ["Chad", "+235"], ["Chile", "+56"], ["China", "+86"], ["Colombia", "+57"],
  ["Comoros", "+269"], ["Congo", "+242"], ["Costa Rica", "+506"], ["Croatia", "+385"],
  ["Cuba", "+53"], ["Cyprus", "+357"], ["Czech Republic", "+420"], ["Denmark", "+45"],
  ["Djibouti", "+253"], ["Dominica", "+1-767"], ["Dominican Republic", "+1-809"], ["Ecuador", "+593"],
  ["Egypt", "+20"], ["El Salvador", "+503"], ["Equatorial Guinea", "+240"], ["Eritrea", "+291"],
  ["Estonia", "+372"], ["Eswatini", "+268"], ["Ethiopia", "+251"], ["Fiji", "+679"],
  ["Finland", "+358"], ["France", "+33"], ["Gabon", "+241"], ["Gambia", "+220"],
  ["Georgia", "+995"], ["Germany", "+49"], ["Ghana", "+233"], ["Greece", "+30"],
  ["Grenada", "+1-473"], ["Guatemala", "+502"], ["Guinea", "+224"], ["Guinea-Bissau", "+245"],
  ["Guyana", "+592"], ["Haiti", "+509"], ["Honduras", "+504"], ["Hong Kong", "+852"],
  ["Hungary", "+36"], ["Iceland", "+354"], ["India", "+91"], ["Indonesia", "+62"],
  ["Iran", "+98"], ["Iraq", "+964"], ["Ireland", "+353"], ["Israel", "+972"],
  ["Italy", "+39"], ["Jamaica", "+1-876"], ["Japan", "+81"], ["Jordan", "+962"],
  ["Kazakhstan", "+7"], ["Kenya", "+254"], ["Kiribati", "+686"], ["Kuwait", "+965"],
  ["Kyrgyzstan", "+996"], ["Laos", "+856"], ["Latvia", "+371"], ["Lebanon", "+961"],
  ["Lesotho", "+266"], ["Liberia", "+231"], ["Libya", "+218"], ["Liechtenstein", "+423"],
  ["Lithuania", "+370"], ["Luxembourg", "+352"], ["Macau", "+853"], ["Madagascar", "+261"],
  ["Malawi", "+265"], ["Malaysia", "+60"], ["Maldives", "+960"], ["Mali", "+223"],
  ["Malta", "+356"], ["Marshall Islands", "+692"], ["Mauritania", "+222"], ["Mauritius", "+230"],
  ["Mexico", "+52"], ["Micronesia", "+691"], ["Moldova", "+373"], ["Monaco", "+377"],
  ["Mongolia", "+976"], ["Montenegro", "+382"], ["Morocco", "+212"], ["Mozambique", "+258"],
  ["Myanmar", "+95"], ["Namibia", "+264"], ["Nauru", "+674"], ["Nepal", "+977"],
  ["Netherlands", "+31"], ["New Zealand", "+64"], ["Nicaragua", "+505"], ["Niger", "+227"],
  ["Nigeria", "+234"], ["North Korea", "+850"], ["North Macedonia", "+389"], ["Norway", "+47"],
  ["Oman", "+968"], ["Pakistan", "+92"], ["Palau", "+680"], ["Palestine", "+970"],
  ["Panama", "+507"], ["Papua New Guinea", "+675"], ["Paraguay", "+595"], ["Peru", "+51"],
  ["Philippines", "+63"], ["Poland", "+48"], ["Portugal", "+351"], ["Qatar", "+974"],
  ["Romania", "+40"], ["Russia", "+7"], ["Rwanda", "+250"], ["Saint Kitts and Nevis", "+1-869"],
  ["Saint Lucia", "+1-758"], ["Saint Vincent and the Grenadines", "+1-784"], ["Samoa", "+685"],
  ["San Marino", "+378"], ["Sao Tome and Principe", "+239"], ["Saudi Arabia", "+966"], ["Senegal", "+221"],
  ["Serbia", "+381"], ["Seychelles", "+248"], ["Sierra Leone", "+232"], ["Singapore", "+65"],
  ["Slovakia", "+421"], ["Slovenia", "+386"], ["Solomon Islands", "+677"], ["Somalia", "+252"],
  ["South Africa", "+27"], ["South Korea", "+82"], ["South Sudan", "+211"], ["Spain", "+34"],
  ["Sri Lanka", "+94"], ["Sudan", "+249"], ["Suriname", "+597"], ["Sweden", "+46"],
  ["Switzerland", "+41"], ["Syria", "+963"], ["Taiwan", "+886"], ["Tajikistan", "+992"],
  ["Tanzania", "+255"], ["Thailand", "+66"], ["Timor-Leste", "+670"], ["Togo", "+228"],
  ["Tonga", "+676"], ["Trinidad and Tobago", "+1-868"], ["Tunisia", "+216"], ["Turkey", "+90"],
  ["Turkmenistan", "+993"], ["Tuvalu", "+688"], ["Uganda", "+256"], ["Ukraine", "+380"],
  ["United Arab Emirates", "+971"], ["United Kingdom", "+44"], ["United States", "+1"], ["Uruguay", "+598"],
  ["Uzbekistan", "+998"], ["Vanuatu", "+678"], ["Vatican City", "+379"], ["Venezuela", "+58"],
  ["Vietnam", "+84"], ["Yemen", "+967"], ["Zambia", "+260"], ["Zimbabwe", "+263"]
];

countryCodes.forEach(([country, code]) => {
  const option = document.createElement("option");
  option.value = code;
  option.textContent = `${country} (${code})`;
  if (country === "India") option.selected = true;
  countryCodeSelect.appendChild(option);
});

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function makeBookCard(book, index) {
  const card = document.createElement("article");
  card.className = "book-card reveal";
  card.dataset.type = book.type;
  card.dataset.featured = String(book.featured);
  const safeTitle = escapeHtml(book.title);
  const safeImage = escapeHtml(book.image);
  const safeLink = escapeHtml(book.orderLink || "https://unitedsamaritansindia.org/united-samaritans-india-publications/");
  card.innerHTML = `
    <a class="book-cover" href="${safeLink}" target="_blank" rel="noreferrer" aria-label="Order ${safeTitle}">
      <img src="${safeImage}" alt="${safeTitle} book wrapper">
    </a>
    <div class="book-meta">
      <span>${book.type === "english" ? "English / Global Edition" : "Tamil Edition"}${book.featured ? " • Featured" : ""}</span>
      <h3>${safeTitle}</h3>
    </div>
  `;
  return card;
}

books.forEach((book, index) => {
  bookGrid.appendChild(makeBookCard(book, index));
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

function observeReveals() {
  document.querySelectorAll(".reveal:not(.visible)").forEach((element) => {
    revealObserver.observe(element);
  });
}

observeReveals();

function setHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 28);
}

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

menuToggle.addEventListener("click", () => {
  const open = navShell.classList.toggle("open");
  menuToggle.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});

navShell.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navShell.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".book-card").forEach((card) => {
      const matches =
        filter === "all" ||
        card.dataset.type === filter ||
        (filter === "featured" && card.dataset.featured === "true");
      card.classList.toggle("is-hidden", !matches);
    });
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "";

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const data = new FormData(contactForm);
  const phone = String(data.get("phone")).replace(/\s+/g, " ").trim();
  const phoneDigits = phone.replace(/\D/g, "");

  if (phoneDigits.length < 6 || phoneDigits.length > 15) {
    const phoneInput = contactForm.elements.phone;
    phoneInput.setCustomValidity("Please enter a valid contact number with 6 to 15 digits.");
    phoneInput.reportValidity();
    phoneInput.setCustomValidity("");
    return;
  }

  const name = data.get("name") || "there";
  const fullPhone = `${data.get("countryCode")} ${phone}`;
  const subject = encodeURIComponent("Publication enquiry from " + name);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${fullPhone}\nInterest: ${data.get("interest")}\n\nMessage:\n${data.get("message")}`
  );
  formStatus.textContent = "Your Enquiry is sent successfully";
  contactForm.reset();
  countryCodeSelect.value = "+91";

  window.location.href = `mailto:sheeba.missuniv@gmail.com,admin@unitedsamaritansindia.org?subject=${subject}&body=${body}`;
});
