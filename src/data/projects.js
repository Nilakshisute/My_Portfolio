import Tictactoe from '../assets/tictactoe.jpeg'
import Wheatherapp from '../assets/whetherapp.jpg'
import Rockpaper from '../assets/rockpaper.jpeg'
import blogBanner from '../assets/Blog-Banner.jpeg'
import TodoApp from '../assets/ToDoApp_Banner.png'
import TeamSpace from '../assets/AuthSystem.jpg'
import realtimechat from '../assets/realtimechat.jpg'
import socialecho from '../assets/socialecho.jpg'

const projects = [

  {
    id: 1,
    title: "Wheather App",
    description: "A weather application that provides current conditions and forecasts for locations worldwide using weather API data.",
    longDescription: `This weather dashboard delivers accurate weather information with a beautiful, easy-to-understand interface. Users can search for locations and view current conditions as well as hourly and 7-day forecasts.

Key features include:
- Location search with autocomplete
- Current weather conditions display
- Hourly and 7-day forecasts
- Weather maps with radar and satellite imagery
- Weather alerts and notifications
- Saved locations for quick access
- Responsive design for all devices`,

    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API", "TailwindCSS", "Axios"],
    image: Wheatherapp,
    demoUrl: "https://whether-app-theta.vercel.app/",
    githubUrl: "https://github.com/Nilakshisute/WhetherApp.git",
    featured: false,
    category: "Frontend"
  },

  {
  id: 2,
  title: "Rock Paper Scissors - Game",
  description: "An interactive Rock Paper Scissors game featuring modern UI, smooth animations, and real-time computer move visualization using vanilla HTML, CSS, and JavaScript.",
  longDescription: `This Rock Paper Scissors game offers a fun, modern experience built with HTML, CSS, and JavaScript. It includes a visually appealing glassmorphism UI, smooth animations, and real-time feedback for every round.

Key features include:
- Modern Glassmorphism UI with gradient backgrounds
- Real-time computer move visualization
- Live game statistics: wins, losses, draws
- Smooth animations and interactive transitions
- Fully responsive design across all screen sizes
- Reset functionality for a fresh start anytime
- Emoji-based icons (no image dependencies)
- Color-coded results and interactive feedback

Game Rules:
- Rock beats Scissors ✂️
- Scissors beats Paper 📄
- Paper beats Rock 🪨
- Same choices result in a Tie 🤝`,
  
  technologies: ["HTML5", "CSS3", "JavaScript", "Glassmorphism", "Responsive Design", "DOM Manipulation"],
  image: Rockpaper, 
  demoUrl: "https://rock-paper-scissor-game-nu-two.vercel.app/", 
  githubUrl: "https://github.com/Nilakshisute/RockPaperScissor_Game", 
  featured: false,
  category: "Frontend"
},

  {
  id: 3,
  title: "Tic Tac Toe - Modern UI",
  description: "A modern, interactive Tic Tac Toe game with glassmorphism UI, real-time stats, and smooth animations built using HTML, CSS, and vanilla JavaScript.",
  longDescription: `This Tic Tac Toe game delivers a sleek and engaging experience using only HTML, CSS, and JavaScript (ES6). Designed with a modern glassmorphism aesthetic and structured using object-oriented principles, the game includes detailed game statistics and responsive UI enhancements.

Key features include:
- Sleek Glassmorphism UI with animated gradient backgrounds
- Smooth interaction animations and color-coded player marks (🟦 O | 🟥 X)
- Live turn indicator and move history tracker
- Full scoreboard with wins, draws, and streaks
- Winning line pulse animation and animated winner modal
- Reset and clear stats functionality
- Hover/click visual feedback and keyboard accessibility
- Mobile-first responsive design and touch-optimized controls
- Clean, modular ES6 class-based JavaScript architecture
- Robust game state management and optimized DOM performance

Future Enhancements:
- Sound effects for gameplay
- Dark mode toggle
- Online multiplayer support
- Theme customization options`,
  
  technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Flexbox", "Grid"],
  image: Tictactoe,
  demoUrl: "http://tic-tac-toe-game-black-ten.vercel.app/",
  githubUrl: "https://github.com/Nilakshisute/TicTacToe_Game",
  featured: false,
  category: "Frontend"
}
,

  {
  id: 4,
  title: "Blog Platform",
  description: "A full-featured blog application where users can create, read, update, delete posts and add comments with secure authentication.",
  longDescription: `This blog platform enables users to share their thoughts and engage with others through posts and comments. It features full CRUD operations for blog posts and secure user authentication.

Key features include:
- User registration and login with JWT authentication
- Create, update, delete, and read blog posts
- Commenting system for blog interactions
- Secure password handling using bcrypt
- Role-based access control for operations
- RESTful API structure with Express.js
- MongoDB for database storage`,
  technologies: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
  image: blogBanner,
  demoUrl: "https://blog-demo.example.com",
  githubUrl: "https://github.com/johndoe/blog-platform",
  featured: true,
  category: "Backend"
}
,

 {
  id: 5,
  title: "Todo List App",
  description: "A task management application with user authentication, allowing users to manage daily tasks effectively.",
  longDescription: `This Todo List App allows users to organize their tasks with a clean interface and secure access. Users can register, log in, and manage their personal task list with full CRUD operations.

Key features include:
- User registration and login with JWT authentication
- Secure password hashing using bcrypt
- Add, update, and delete tasks
- Mark tasks as pending or completed
- Filter tasks based on status
- RESTful API using Express.js
- MongoDB for data storage`,
  technologies: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt", "mongoose", "dotenv", "cors", "Postman"],
  image: TodoApp,
  demoUrl: "https://todo-demo.example.com",
  githubUrl: "https://github.com/johndoe/todo-list-app",
  featured: false,
  category: "Backend"
},

{
  id: 7,
  title: "Social Network Platform",
  description: "A MERN-based social media platform with content moderation and context-aware authentication.",
  longDescription: `A full-featured social networking platform built with the MERN stack. It offers profile creation, post sharing, commenting, liking, and follow/unfollow features. Key highlights include:

- **Automated Content Moderation** using Perspective API, TextRazor, and Hugging Face via a Flask-based zero-shot classifier.
- **Context-Based Authentication** leveraging IP, location, and device data with AES encryption and suspicious login alerts.
- **User Roles:** Admin, Moderator, and General Users, each with role-specific dashboards and permissions.

Additional features:
- JWT-based auth and secure device management
- Email notifications via Nodemailer
- Media storage with Azure Blob
- Fully responsive UI with Tailwind CSS`,
  technologies: [
    "React.js",
    "Redux",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JWT Authentication",
    "Passport.js",
    "Nodemailer",
    "Crypto-js",
    "Azure Blob Storage",
    "Flask",
    "Hugging Face Transformers"
  ],
  image: socialecho ,// Replace with actual image path
  demoUrl: "https://your-demo-url.com",
  githubUrl: "https://github.com/your-username/social-network-platform",
  featured: true,
  category: "Fullstack"
}

,
{
  id: 10,
  title: "RealTimeChat App",
  description: "A real-time chat app with public rooms, private messaging, and live user status updates.",
  longDescription: `RealTimeChat is a lightweight, browser-based chat application built with Node.js, Express, and Socket.io. It enables users to join chat rooms, participate in global conversations, and send private messages — all in real-time.

**Key Features:**
- Simple username-based authentication
- Global chat room for public conversations
- Private one-on-one messaging
- Real-time message delivery and user status
- Live active user list
- Responsive UI for desktop and mobile

**Tech Stack:**
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Real-time: Socket.io
- Tools: Nodemon`,
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "Socket.io",
    "Nodemon"
  ],
  image: realtimechat, // Replace with actual image path
  demoUrl: "https://your-demo-url.com",
  githubUrl: "https://github.com/your-username/realtime-chat-app",
  featured: true,
  category: "Fullstack"
}
,

{
  id: 9,
  title: "Team Space Collaboration",
  description: "A collaborative workspace platform with real-time document editing and role-based access control.",
  longDescription: `TeamSpace is a full-stack social collaboration platform that enables users to create or join workspaces, collaboratively edit documents in real-time, manage team members, and export or print content. It supports authentication, role-based access control (Admin/User), and provides a responsive UI for desktop and mobile.

Key features include:
- User registration, login, and password recovery
- Role-based access control (Admin/User)
- Create and join collaborative workspaces
- Real-time document editing with auto-save
- Member management and workspace permissions
- Export documents as HTML or print
- Protected routes and state-managed navigation
- Fully responsive design using Chakra UI
- Firebase Firestore for real-time data sync and storage`,
  technologies: ["React.js", "Chakra UI", "Firebase Authentication", "Firestore", "React Router DOM"],
  image: TeamSpace, // Replace with actual image import or path if used in your app
  demoUrl: "https://team-space-collaboration.vercel.app/",
  githubUrl: "https://github.com/Nilakshisute/Team_Space_Collaboration",
  featured: true,
  category: "Fullstack"
}

];

export default projects;