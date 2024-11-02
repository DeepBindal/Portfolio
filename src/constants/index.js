export const sidebarLinks = [
  { route: "Home", imgUrl: "/home.svg", label: "Home", link: "home" },
  { route: "About", imgUrl: "/about.svg", label: "About", link: "about" },
  { route: "Skills", imgUrl: "/skills.svg", label: "Skills", link: "skills" },
  {
    route: "Portfolio",
    imgUrl: "/portfolio.svg",
    label: "Portfolio",
    link: "portfolio",
  },
];

export const skills = [
  { label: "C++", imgUrl: "/skills/cpp.png" },
  { label: "Java", imgUrl: "/skills/java.png" },
  { label: "Html", imgUrl: "/skills/html.png" },
  { label: "CSS", imgUrl: "/skills/css.png" },
  { label: "Javascript", imgUrl: "/js.png" },
  { label: "React.js", imgUrl: "/skills/react.png" },
  { label: "Next.js", imgUrl: "/skills/next.png" },
  { label: "Node.js", imgUrl: "/skills/node.png" },
  { label: "Express.js", imgUrl: "/skills/express.png" },
  { label: "NextAuth.js", imgUrl: "/skills/nextauth.png" },
  { label: "MongoDb", imgUrl: "/skills/mongo.png" },
  { label: "My-Sql", imgUrl: "/skills/sql.png" },
];

export const projects = [
  {
    title: "SciSphere",
    link: "https://scisphere.vercel.app/",
    image: "/projects/SciSphereImg.png",
    description: `	Dynamic science blogging platform, curating and publishing engaging content across diverse scientific disciplines.
	Implemented user-friendly interface enhancements and optimized site performance, enhancing the overall user experience.
	Authentication & Communities functionality using Clerk.js allowing seamless experience to the users.
	Built using Next.js, React.js, Clerk.js, MongoDB, Mongoose
`,
  },
  {
    title: "RoomRoam",
    link: "https://room-roam-delta.vercel.app/",
    image: "/projects/RoomRoamImg.png",
    description: `Comprehensive hotel listing platform, facilitating seamless browsing, listing, and reviews for users for various hotels.
	Users can create new listing, edit the listing and search the hosted listings.
	Full authentication provided by NextAuth.js (Auth.js).
	Built using Next.js, React.js, NextAuth.js (Auth.js), MongoDB, Mongoose`,
  },
  {
    title: "Promptopia",
    link: "https://promptopia-eosin-five.vercel.app/",
    image: "/projects/PromptopiaImg.png",
    description: `Users can effortlessly discover, create, edit, and delete AI prompts, all showcased on personalized profile pages that highlight individual contributions. The community-centric approach allows for seamless exploration of other creators' profiles and prompts, fostering collaboration. Key functionalities include a "Copy to Clipboard" feature, tag-based prompt search, and secure Google authentication via NextAuth
`,
  },
  {
    title: "MuscleMart",
    link: "https://musclemart.vercel.app/",
    image: "/projects/MuscleMartImg.png",
    description: `	User friendly UI for users to browse multiple products and add them to cart and purchase them.
	Payment gateway integration using razorpay.
	 Built using (MERN), React.js, Node.js, Express.js, MongoDB, Mongoose, NextUI
`,
  },
  {
    title: "Progress Pulse",
    link: "https://progress-pulse-ashy.vercel.app/",
    image: "/projects/ProgressPulse.png",
    description: `A workout tracker web app to Achieve your fitness goals with personalized workout plans, progress tracking, and performance analysis.Get Ai assisted workouts.Implemented a progress page with visual charts to show users exercise progression between sessions, providing insights into strength and performance improvements over time.
`,
  },
  {
    title: "Evntly",
    link: "https://evently-tau-rose.vercel.app/",
    image: "/projects/Evently.png",
    description: `A workout tracker web app to Achieve your fitness goals with personalized workout plans, progress tracking, and performance analysis.Get Ai assisted workouts.Implemented a progress page with visual charts to show users exercise progression between sessions, providing insights into strength and performance improvements over time.
`,
  },
];
