# SpotlightCard React Component with HOC and Tailwind CSS

## Introduction
This project demonstrates a React component called SpotlightCard that utilizes Framer Motion for animation effects. The component is encapsulated within a Higher-Order Component (HOC) for better reusability and separation of concerns. It is also integrated with Tailwind CSS for rapid UI development and customization.

![CleanShot 2023-10-09 at 12 56 24](https://github.com/Michael0520/spotlight-framer-motion/assets/60827537/d157a514-0609-42d9-b46f-8f5ac0b90081)

## Installation

First, make sure you have Node.js and npm installed. Then, run the following command in the root directory of the project:

```bash
npm install
```

## Usage

Import the TrackedSpotlightCard component into your React component. This is the SpotlightCard enhanced with mouse tracking functionality via
a HOC:

```jsx
import { TrackedSpotlightCard } from "./path/to/TrackedSpotlightCard";
```

Then you can use this component in your JSX:

```jsx
<TrackedSpotlightCard />
```

### Props

The SpotlightCard component accepts the following props:

- mouseX: A MotionValue from Framer Motion that represents the X-coordinate of the mouse.
- mouseY: A MotionValue from Framer Motion that represents the Y-coordinate of the mouse.

### HOC

The component uses a Higher-Order Component (HOC) called withMouseTracking to handle mouse movements. This design pattern allows for a cleaner and more modular code structure.
