export const college = {
  name: 'Trimurti Arts, Commerce & Science College',
  shortName: 'Trimurti College',
  trust: "Trimurti Pawan Pratishthan's College",
  location: 'Dhorjagaon-ne, Tal. Shevgaon, Dist. Ahilyanagar',
  principal: 'Dr. Sunil Cholke',
  phone: '+91 94231 60730',
  email: 'trimurtiacscollege1997@gmail.com',
  mapQuery: 'Dhorjagaon-ne, Tal. Shevgaon, Dist. Ahilyanagar, Maharashtra'
};

export const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#programs' },
  { label: 'Departments', href: '#departments' },
  { label: 'Admissions', href: '#admission' },
  { label: 'Campus Life', href: '#facilities' },
  { label: 'Placements', href: '#placements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' }
];

export const overview = [
  { title: 'Institution', text: college.name, icon: 'building' },
  { title: 'Location', text: college.location, icon: 'pin' },
  { title: 'Affiliation', text: 'Savitribai Phule Pune University', icon: 'map' },
  { title: 'Principal', text: college.principal, icon: 'person' }
];

export const admissionSteps = [
  ['Choose Program', 'Select from Arts, Commerce, Science, Computer Science, UG and PG options.'],
  ['Submit Enquiry', 'Share your contact details and preferred course with the admission team.'],
  ['Document Guidance', 'Receive help with eligibility, forms, university process and scholarship links.']
];

export const features = [
  ['Quality Education & Expert Faculty', 'Experienced educators offering personalised guidance and deep subject understanding.', 'cap'],
  ['Career-Oriented Approach', 'A dedicated placement cell providing counselling, resume-building, and recruitment drives.', 'building'],
  ['Modern Infrastructure', 'Digital classrooms, research labs, and a resourceful library supporting hands-on learning.', 'screen'],
  ['Holistic Development', 'Cultural fests, sports, and seminars that build leadership alongside academics.', 'person']
];

export const programs = [
  {
    type: 'Undergraduate',
    title: 'Undergraduate Programs',
    courses: ['Bachelor of Arts (B.A.)', 'Bachelor of Commerce (B.Com.)', 'Bachelor of Science (B.Sc.)', 'Bachelor of Computer Science (BCS)']
  },
  {
    type: 'Postgraduate',
    title: 'Postgraduate Programs',
    featured: true,
    courses: ['Master of Arts (M.A.)', 'Master of Commerce (M.Com.)', 'Master of Science (M.Sc. Chemistry)', 'Master of Science (M.Sc. Mathematics)']
  },
  {
    type: 'Professional',
    title: 'Professional Development',
    courses: ['Skill-based Certification Programs', 'Career Enhancement Workshops', 'Industry-Oriented Training', 'Leadership Development']
  }
];

export const departments = [
  ['Department of Arts', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=650&fit=crop&auto=format', 'Department of Arts classroom'],
  ['Department of Commerce', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=650&fit=crop&auto=format', 'Department of Commerce'],
  ['Department of Science', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=650&fit=crop&auto=format', 'Department of Science laboratory'],
  ['Computer Science', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&h=650&fit=crop&auto=format', 'Department of Computer Science lab']
];

export const facilities = [
  ['Central Library', 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=900&h=900&fit=crop&auto=format', 'College library reading hall', true],
  ['Computer Lab', 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=500&h=400&fit=crop&auto=format', 'Computer laboratory'],
  ['Science Lab', 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=500&h=400&fit=crop&auto=format', 'Science laboratory equipment'],
  ['Sports Ground', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&h=400&fit=crop&auto=format', 'Sports ground'],
  ['Seminar Hall', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=400&fit=crop&auto=format', 'Lecture hall / seminar room']
];

export const gallery = [
  ['Campus - June 2025', 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=500&h=500&fit=crop&auto=format', 'Students walking across campus'],
  ['Environment Day - June 2025', 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop&auto=format', 'Tree plantation drive on Environment Day'],
  ['Classroom Session', 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=500&h=500&fit=crop&auto=format', 'Students in a classroom session'],
  ['Atal Innovation Lab', 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=500&fit=crop&auto=format', 'Students collaborating in the innovation lab'],
  ['Graduation Day', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=500&fit=crop&auto=format', 'Graduation ceremony'],
  ['Sports Meet', 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=500&fit=crop&auto=format', 'Inter-collegiate sports meet'],
  ['Library Hours', 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&h=500&fit=crop&auto=format', 'Students studying in the library'],
  ['Cultural Fest', 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=500&h=500&fit=crop&auto=format', 'Cultural festival performance']
];

export const news = [
  ['Sports', '12 Sep 2025', 'Inter-Collegiate Kabaddi Tournament Opens in Mirajgaon', 'Ahmednagar district hosts a spirited boys Kabaddi competition, with Trimurti College fielding a strong squad.', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&h=320&fit=crop&auto=format', 'Inter-collegiate Kabaddi tournament'],
  ['Culture', '10 Sep 2025', "'Srujanrang' Cultural & Literary Fest Concludes", 'A platform for student talent, Srujanrang 2025 showcased performances, poetry, and debate across the campus.', 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=500&h=320&fit=crop&auto=format', 'Srujanrang cultural competition'],
  ['Sports', '09 Sep 2025', "Trimurti College Secures First Place in Women's Kabaddi", "A commanding performance at the inter-collegiate championship in Shrirampur brings home the winner's trophy.", 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=320&fit=crop&auto=format', "Women's Kabaddi championship win"],
  ['Wellness', '21 Jun 2025', 'Trimurti College Celebrates International Yoga Day', 'Students and faculty gathered on the campus lawns to mark a morning of shared practice and wellbeing.', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=320&fit=crop&auto=format', 'International Yoga Day celebration'],
  ['Heritage', '06 Jun 2025', 'Trimurti College Marks Shivrajyabhishek Sohala', 'A timeless tribute to history, celebrated with reverence across the campus community.', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=320&fit=crop&auto=format', 'Shivrajyabhishek Sohala celebration'],
  ['College', '10 Jun 2025', "Principal's Address on Student Development", 'The Trimurti community came together for a focused session on discipline, learning and career readiness.', 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=320&fit=crop&auto=format', 'Principal interaction event']
];

export const testimonials = [
  ['Neha Kulkarni', 'B.Sc. Graduate', 'The supportive environment and excellent labs at Trimurti College played a crucial role in my academic growth. Thanks to the career counselling, I now work at a reputed research institute.', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&auto=format'],
  ['Anup Deshmukh', 'B.C.S. Graduate', 'Trimurti College gave me the confidence and knowledge to pursue my career in finance. Faculty guidance and a practical learning approach helped me secure a great job.', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format'],
  ['Priya Shinde', 'B.Com. Graduate', 'What stayed with me was how approachable every professor was. The seminars and workshops pushed me to think beyond the textbook - that shaped how I work today.', 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&auto=format']
];

export const faq = [
  ['What courses does Trimurti College offer?', 'We offer undergraduate and postgraduate programs in Arts, Commerce, and Science - including Computer Science - designed for quality education and skill development.'],
  ['Does the college provide placement assistance?', 'Yes. Our Placement Cell collaborates with local and regional employers to offer job opportunities, career counselling, and skill-enhancement programs for students.'],
  ['Are scholarships available for students?', 'Yes, merit-based and need-based scholarships are available. Eligible students can apply through the scholarship section, including government schemes such as MahaDBT.'],
  ['How can I apply for admission?', 'You can apply online through the admission enquiry form, or visit the campus for offline registration. Check the Admission section for eligibility and required documents.'],
  ['What facilities are available on campus?', 'Modern classrooms, well-equipped labs, a central library, sports grounds, and digital learning resources support student growth on campus.'],
  ['How can I contact the college for more information?', 'You can reach us by phone, email, or by visiting the campus directly - full contact details are in the Contact section below.']
];

export const importantLinks = [
  ['NAAC', 'Assessment Council', 'https://www.naac.gov.in/'],
  ['UGC', 'Grants Commission', 'https://www.ugc.ac.in/'],
  ['SPPU', 'Savitribai Phule Pune Univ.', 'http://www.unipune.ac.in/'],
  ['MahaDBT', 'Aaple Sarkar Portal', 'https://mahadbt.maharashtra.gov.in/Login/Login'],
  ['SWAYAM', 'Free Online Courses', 'https://swayam.gov.in/'],
  ['Shodhganga', 'Indian Theses Repository', 'https://shodhganga.inflibnet.ac.in/']
];
