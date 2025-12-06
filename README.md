# Dynamic Data Dashboard 🚀

This is a responsive and visually appealing dashboard application built with React to fetch, process, and display key metrics and activity data from a placeholder API.

The goal of this project was to implement a clean, flexible layout using Flexbox and modern CSS techniques, focusing on component reusability and data visualization.

## Preview 📸

![Preview](/src/assets/img-dashboard.png)

## Key Features

- **Data Aggregation:** Fetches data from multiple API endpoints (Users, Posts, Comments, Todos).
- **Metrics Cards:** Displays calculated key performance indicators (e.g., Average Posts per User, TODO completion rate).
- **Data Visualization:** Includes interactive charts powered by Chart.js (User Activity Bar Chart, TODO Completion Pie Chart).
- **Dynamic Data Table:** Shows the Top 5 most commented posts.
- **Responsive Design:** Optimized for desktop and mobile viewing.
- **Modern Styling:** Utilizes CSS Modules for scoped, maintainable styles and a dark-themed aesthetic.

## Tech Stack 💻

- **Frontend:** React
- **Styling:** CSS Modules
- **Charts:** Chart.js / react-chartjs-2
- **Layout:** Flexbox

## Installation and Setup ⚙️

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (LTS version recommended)
- npm or Yarn

### Steps

Clone the repository:
```bash
git clone https://github.com/aanna25/data-analytics-dashboard
cd data-analytics-dashboard
```

Install dependencies:
```bash
npm install
# or
yarn install
```

Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Data Source 🧩

This project relies on data fetched from the JSONPlaceholder REST API to simulate real-world user activity, posts, comments, and todos.

**Note:** Due to the structured nature of the JSONPlaceholder data, the User Activity chart currently shows uniform bar heights (10 posts per user).