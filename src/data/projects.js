import Tictactoe from '../assets/tictactoe.jpeg'
import Wheatherapp from '../assets/whetherapp.jpg'
import Rockpaper from '../assets/rockpaper.jpeg'
import blogBanner from '../assets/Blog-Banner.jpeg'
import TodoApp from '../assets/ToDoApp_Banner.png'
import Authentication from '../assets/AuthSystem.jpg'

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
  id: 6,
  title: "Authentication System",
  description: "A secure authentication system with JWT-based login, signup, and role-based access control.",
  longDescription: `This authentication system provides a secure and scalable solution for managing user access. It supports user registration and login, along with role-based permissions to protect sensitive routes and actions.

Key features include:
- User registration and login functionality
- JWT token-based authentication
- Secure password hashing with bcrypt
- Role-based access control (e.g., Admin, User)
- Protected routes and middleware authorization
- RESTful API using Express.js
- MongoDB for user data management`,
  technologies: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt","dotenv", "mongoose", "cors", "validator"],
  image: Authentication,
  demoUrl: "https://auth-demo.example.com",
  githubUrl: "https://github.com/johndoe/auth-system",
  featured: false,
  category: "Backend"
}

];

export default projects;