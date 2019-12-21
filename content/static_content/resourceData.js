export const resourceCourses = [
  {
    title: 'Schoolism',
    description:
      'Primarily aimed at concept artists and digital painters, Schoolism is strong on advanced fundamentals. Probably too intense for beginners. Dives deep on rendering, composition, and character design.',
    url: 'https://www.schoolism.com/',
    img: 'http://localhost:8000/images/resources/schoolism.png',
    cost: '$25 Monthly',
    category: 'website',
    recommended: true,
    recCourses: [
      {
        title: 'Drawing Fundamentals',
        instructor: 'Thomas Fluharty',
        url: 'https://www.schoolism.com/school.php?id=18',
      },
      {
        title: 'Pictorial Composition',
        instructor: 'Nathan Fowkes',
        url: 'https://www.schoolism.com/school.php?id=31',
      },
      {
        title: 'Essentials of Realism',
        instructor: 'Jonathan Hardesty',
        url: 'https://www.schoolism.com/school.php?id=33',
      },
      {
        title: 'Fundamentals of Lighting',
        instructor: 'Sam Nielson',
        url: 'https://www.schoolism.com/school.php?id=3',
      },
    ],
  },
  {
    title: 'New Masters Academy',
    description:
      "While a bit old school and slow-paced, the instructors on here are true veterans. Mostly from the visual development and film world, they're strong on anatomy, traditional painting, and compositional layout theory.",
    url: 'https://nma.art',
    img: 'http://localhost:8000/images/resources/nma.png',
    cost: '$35 Monthly',
    category: 'website',
    recommended: true,
    recCourses: [
      {
        title: 'Composition for Visual Artists',
        instructor: 'Bill Perkins',
        url: 'https://www.nma.art/courses/composition-for-visual-artists/',
      },
      {
        title: 'Constructive Head Drawing',
        instructor: 'Steve Huston',
        url: 'https://www.nma.art/courses/constructive-head-drawing/',
      },
      {
        title: 'Elements of Traditional Composition',
        instructor: 'Glenn Vilppu',
        url:
          'https://www.nma.art/courses/elements-of-traditional-composition-with-glenn-vilppu-2013/',
      },
    ],
  },
  {
    title: 'Society of Visual Storytelling',
    description:
      'Strong on beginner fundamentals – great for anyone just getting started. Jake Parker and Will Terry teach drawing and digital painting from the ground up through sets of well-designed, hands-on exercises.',
    url: 'https://www.svslearn.com/',
    img: 'http://localhost:8000/images/resources/svs.png',
    cost: '$25 Monthly',
    category: 'website',
    recommended: false,
    recCourses: [
      {
        title: 'Composition',
        instructor: 'Bill Perkins',
        url: '',
      },
    ],
  },
  {
    title: 'Will Weston',
    description: 'Will is a veteran',
    url: [
      'https://www.instagram.com/willwestonstudio',
      'https://www.twitch.tv/peterhanstyle',
    ],
    img: 'http://localhost:8000/images/resources/willweston.png',
    cost: '-',
    category: 'website',
    recommended: true,
  },
  {
    title: 'Draw a Box',
    description:
      'A community favourite, this site walks you through the principals of the Dynamic Sketching tradition',
    url: 'https://drawabox.com/',
    img: 'http://localhost:8000/images/resources/drawabox.png',
    cost: 'Free!',
    category: 'website',
    recommended: false,
  },
  {
    title: 'Modern Day James',
    description:
      'James is an independent creator running a patreon and selling individual gumroad courses. Focuses on concept design for games',
    url: 'https://www.patreon.com/moderndayjames',
    img: 'http://localhost:8000/images/resources/moddayjames.png',
    cost: '$5-30 Monthly',
    category: 'website',
    recommended: false,
  },
  {
    title: 'Ty Carter',
    description:
      'Another independent teacher, Ty is a background designer from the animation world creating tutorials on Patreon and Gumroad. Strong on lighting & colour theory, stylised illustration techniques, and visual design principals',
    url: ['https://gumroad.com/tycarter'],
    img: 'https://via.placeholder.com/400',
    cost: '$5-30 Monthly',
    category: 'website',
    recommended: false,
  },

  {
    title: 'Concept Design Academy',
    description: '-',
    url: 'http://conceptdesignacad.com/',
    img: 'https://via.placeholder.com/400',
    cost: '$750-800 per course',
    category: 'IRL',
    recommended: false,
  },
  {
    title: 'The Foundation Group',
    description: '-',
    url: 'https://www.foundationartgroup.com/',
    img: 'https://via.placeholder.com/400',
    cost: '',
    category: 'website',
    recommended: false,
  },
  {
    title: 'CGMA 2D Academy',
    description: '-',
    url: 'https://www.cgmasteracademy.com/',
    img: 'https://via.placeholder.com/400',
    cost: '$600-800 per course',
    category: 'website',
    recommended: false,
  },
  {
    title: 'Peter Han',
    description: '-',
    url: [
      'https://www.instagram.com/peterhanstyle/',
      'https://www.twitch.tv/peterhanstyle',
    ],
    img: 'https://via.placeholder.com/400',
    category: 'person',
    recommended: false,
  },
]

export const resourceBooks = [
  {
    title: 'How to Think When You Draw',
    author: 'Lorenzo Etherington',
    url:
      'https://www.goodreads.com/book/show/41583721-how-to-think-when-you-draw-volume-1',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535776123l/41583721._SX318_.jpg',
    topic: 'drawing',
    recommended: false,
  },
  {
    title: 'How to Draw',
    author: 'Scott Robertson',
    url: 'https://www.goodreads.com/book/show/15808089-how-to-draw',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377121233l/15808089.jpg',
    topic: 'drawing',
    recommended: false,
  },
  {
    title: 'Lateral Thinking',
    author: 'Edward de Bono',
    url: 'https://www.goodreads.com/book/show/10675.Lateral_Thinking',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1416779115l/10675.jpg',
    topic: 'visual thinking',
    recommended: false,
  },
  {
    title: 'Metaphors We Live By',
    author: 'George Lakoff, Mark Johnson',
    url: 'https://www.goodreads.com/book/show/34459.Metaphors_We_Live_By',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388194058l/34459._SX318_.jpg',
    topic: 'visual thinking',
    recommended: false,
  },
  {
    title: 'Thinkertoys',
    author: 'Michael Michalko',
    url: 'https://www.goodreads.com/book/show/517518.Thinkertoys',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320553080l/517518.jpg',
    topic: 'visual thinking',
    recommended: false,
  },
  {
    title: 'Sketching: Drawing Techniques for Product Designers',
    author: 'Koos Eissen',
    url: 'https://www.goodreads.com/book/show/2767856-sketching',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356347823l/2767856.jpg',
    topic: 'drawing',
    recommended: false,
  },
  {
    title: 'Rapid Viz',
    author: 'Kurt Hanks & Larry Belliston',
    url: 'https://www.goodreads.com/book/show/146300.Rapid_Viz_',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387746517l/146300.jpg',
    topic: 'drawing',
    recommended: false,
  },
  {
    title: 'Dynamic Bible',
    author: 'Peter Han',
    url: 'https://www.gallerynucleus.com/detail/21089/',
    img:
      'https://70f186a60af817fe0731-09dac41207c435675bfd529a14211b5c.ssl.cf1.rackcdn.com/assets/attachments_p/000/059/556/size500_han_dynamicbible_detail2_500.jpg',
    topic: 'drawing',
    recommended: false,
  },
  {
    title: 'Drawn to Life: Volumes I and II',
    author: 'Walt Stanchfield',
    url: 'https://www.goodreads.com/book/show/6250465-drawn-to-life',
    img:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355037566l/6250465.jpg',
    topic: 'drawing',
    recommended: true,
  },
]

// Hunt for more books https://www.gallerynucleus.com/books/new
