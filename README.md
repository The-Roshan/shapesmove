# ⚙️ Interactive Physics Shapes

## Overview
The Interactive Physics Shapes is a dynamic, web-based simulation created by Roshan Kumar Prajapati. Built with HTML, CSS, JavaScript, and the Matter.js physics engine, it features a canvas where 25 randomly generated shapes (circles, rectangles, triangles, hexagons) interact with gravity, collisions, and mouse input. The simulation includes a static ground and walls, colorful shape rendering, and visual effects on collisions, offering an engaging and interactive experience optimized for desktop and mobile devices.

## Features
- **Physics Simulation** 🪐:
  - 25 randomly generated shapes (circles, rectangles, triangles, hexagons) with varied sizes and colors.
  - Physics-based interactions using Matter.js, including gravity, restitution (bounciness), and collision detection.
- **Interactive Controls** 🖱️:
  - Mouse-based interaction allows users to drag and move shapes within the canvas.
- **Visual Effects** 🎨:
  - Shapes have random HSL colors that change on collision for a dynamic visual effect.
  - Transparent background with a brown static ground and invisible walls.
- **Out-of-Bounds Handling** 🔄:
  - Shapes that move beyond canvas boundaries are repositioned randomly within the upper half of the canvas with reset velocity.
- **Responsive Design** 📱:
  - Canvas scales to the window size, ensuring compatibility across devices.
- **External Dependency** 📚:
  - Matter.js (version 0.19.0 via CDN) for physics calculations and rendering.

## Tech Stack
- **HTML5**: Structure of the page with a single container for the canvas.
- **CSS3**: Styling for the canvas and container (`styles.css`).
- **JavaScript**: Physics simulation logic, shape generation, and event handling (`script.js`).
- **Matter.js**: Physics engine for 2D simulations, rendering, and mouse interactions.
- **Canvas API**: Used by Matter.js for rendering shapes.

## Project Structure
```
interactive-physics-shapes/
├── index.html         # Main HTML file
├── styles.css        # CSS styles for layout
├── script.js         # JavaScript for physics simulation
├── LICENSE.md        # MIT License
└── README.md         # This file
```

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge) with Canvas and JavaScript support.
- A code editor (e.g., VS Code) for customization.
- Internet connection for loading Matter.js from CDN (or download locally for offline use).

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/The-Roshan/interactive-physics-shapes.git
cd interactive-physics-shapes
```

### 2. Open the Website
- Open `index.html` in a web browser:
  ```bash
  open index.html  # macOS
  start index.html  # Windows
  ```
- Alternatively, use a local development server (e.g., VS Code Live Server) for better performance.

### 3. Customize (Optional)
- Edit `styles.css` to modify the canvas background or container styles.
- Update `script.js` to adjust shape properties (e.g., increase number of shapes, change restitution), add new shape types, or enhance collision effects.
- Modify `index.html` to add UI elements like buttons for adding shapes or resetting the simulation.

## Usage
1. **View Simulation** ⚙️: Load the page to see 25 random shapes falling and interacting within the canvas.
2. **Interact** 🖱️: Click and drag shapes with the mouse to move them.
3. **Observe Collisions** 🎨: Watch shapes change colors randomly when they collide.
4. **Responsive** 📱: Access the simulation on mobile or desktop (mouse interaction may be limited on touch devices).

## Deployment
- **Static Hosting**:
  1. Upload `index.html`, `styles.css`, and `script.js` to a hosting service (e.g., GitHub Pages, Netlify, Vercel).
  2. Configure the service to serve `index.html` as the entry point.
- **GitHub Pages Example**:
  1. Push the repository to GitHub.
  2. Enable GitHub Pages in the repository settings, selecting the `main` branch.
  3. Access the site at `https://the-roshan.github.io/interactive-physics-shapes`.
- **Netlify Example**:
  1. Drag the project folder into Netlify’s dashboard.
  2. Deploy and use the provided URL.
- **Local Server**:
  ```bash
  python -m http.server 8000
  ```
  Visit `http://localhost:8000`.

## Notes
- **Matter.js Dependency**: The simulation uses Matter.js via CDN (`https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js`). Download locally for offline use if needed.
- **JavaScript Logic**: The `script.js` file handles:
  - Engine and renderer setup with Matter.js.
  - Creation of static ground and walls.
  - Generation of 25 random shapes with varied types, sizes, and colors.
  - Mouse constraint for dragging shapes.
  - Out-of-bounds repositioning and collision-based color changes.
- **Styling**: The `styles.css` file should define minimal styles for the `#game-container` to ensure full-screen canvas rendering.
- **Enhancements**: Consider adding:
  - Touch support for mobile devices.
  - UI controls to add/remove shapes or adjust physics properties.
  - Sound effects for collisions.
  - Background effects (e.g., particles) to enhance the hacker-themed aesthetic from your other projects.
- **SEO**: Add meta tags in `<head>` (e.g., `description`, `keywords`) for better visibility, e.g., "Interactive physics shapes simulation by Roshan Kumar Prajapati".
- **License**: Include the MIT License in `LICENSE.md` to clarify usage terms (as provided previously).

## License
This project is licensed under the MIT License. See `LICENSE.md` for details.

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## Acknowledgments
- Built with HTML, CSS, JavaScript, and Matter.js for an engaging physics simulation.
- Inspired by interactive physics-based web experiments.
- Created by Roshan Kumar Prajapati.

## Contact
For questions or feedback, contact Roshan Kumar Prajapati:
- 📧 Email: roshanjsr5555@gmail.com
- 📞 Phone: +91 7061126213
- 🌐 GitHub: [The-Roshan](https://github.com/The-Roshan)
