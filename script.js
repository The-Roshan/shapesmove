// script.js

// Import Matter.js
const { Engine, Render, World, Bodies, Body, Events, Mouse, MouseConstraint } = Matter;

// Create the engine and world
const engine = Engine.create();
const world = engine.world;

// Create the renderer
const container = document.getElementById('game-container');
const render = Render.create({
  element: container,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false,
    background: 'transparent',
  },
});

// Add ground
const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 50, {
  isStatic: true,
  render: {
    fillStyle: 'brown',
  },
});
World.add(world, ground);

// Add walls
const walls = [
  Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true }),
  Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true }),
];
World.add(world, walls);

// Function to create random shapes
function createRandomShape(x, y) {
  const size = Math.random() * 50 + 20; // Random size
  const type = Math.floor(Math.random() * 4); // Random type (0-3)

  switch (type) {
    case 0: // Circle
      return Bodies.circle(x, y, size / 2, {
        restitution: 0.8,
        render: {
          fillStyle: `hsl(${Math.random() * 360}, 70%, 60%)`,
        },
      });
    case 1: // Rectangle
      return Bodies.rectangle(x, y, size, size, {
        restitution: 0.8,
        render: {
          fillStyle: `hsl(${Math.random() * 360}, 70%, 60%)`,
        },
      });
    case 2: // Triangle
      return Bodies.polygon(x, y, 3, size, {
        restitution: 0.8,
        render: {
          fillStyle: `hsl(${Math.random() * 360}, 70%, 60%)`,
        },
      });
    case 3: // Hexagon
      return Bodies.polygon(x, y, 6, size, {
        restitution: 0.8,
        render: {
          fillStyle: `hsl(${Math.random() * 360}, 70%, 60%)`,
        },
      });
    default:
      return Bodies.rectangle(x, y, size, size, {
        restitution: 0.8,
        render: {
          fillStyle: `hsl(${Math.random() * 360}, 70%, 60%)`,
        },
      });
  }
}

// Add multiple shapes to the world
const shapes = [];
for (let i = 0; i < 25; i++) {
  const shape = createRandomShape(
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight / 2
  );
  shapes.push(shape);
  World.add(world, shape);
}

// Add mouse control
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
    render: {
      visible: false,
    },
  },
});
World.add(world, mouseConstraint);

// Reposition shapes if they move out of bounds
Events.on(engine, 'beforeUpdate', () => {
  shapes.forEach((shape) => {
    const { x, y } = shape.position;
    const width = render.options.width;
    const height = render.options.height;

    // Check if the shape is out of bounds
    if (x < 0 || x > width || y < 0 || y > height) {
      Body.setPosition(shape, {
        x: Math.random() * width,
        y: Math.random() * height / 2,
      });
      Body.setVelocity(shape, { x: 0, y: 0 }); // Reset velocity
    }
  });
});

// Add collision events
Events.on(engine, 'collisionStart', (event) => {
  const pairs = event.pairs;
  pairs.forEach((pair) => {
    // Add visual effect on collision
    const bodyA = pair.bodyA;
    const bodyB = pair.bodyB;
    bodyA.render.fillStyle = `hsl(${Math.random() * 360}, 70%, 60%)`;
    bodyB.render.fillStyle = `hsl(${Math.random() * 360}, 70%, 60%)`;
  });
});

// Run the engine and renderer
Engine.run(engine);
Render.run(render);
