# Pokédex Express

A simple and modern Pokédex web app built with Node.js, Express, EJS, and Tailwind CSS. Search for your favorite Pokémon and view their details, powered by the PokéAPI.

## ✨ Features

- 🔍 *Search Pokémon* by name
- 📋 *List of Pokémon* (first 100)
- 📄 *Detailed Pokémon pages* with image, height, weight, and types
- ⚡ *Fast and responsive UI* with Tailwind CSS
- 🖥️ *Server-side rendering* using EJS templates

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/
) (v14 or higher)
- [npm](https://www.npmjs.com/
)

### Installation

1. *Clone the repository:*
   
   git clone https://github.com/jlorion/pokeeting.git
   cd pokeeting
   

2. *Install dependencies:*
   
   npm install
   

3. *Start the server:*
   
   npm run dev
   
   The app will be running at [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

```text
.
├── routes/              # Express route handlers
├── views/               # EJS templates (pages and partials)
├── index.js             # Entry point 
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Technologies Used

- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [PokéAPI](https://pokeapi.co/)

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
---

Made with ❤️ for Pokémon fans.

---

*Links to key files:*
- [index.js](index.js)
- [routes/pokemon.js](routes/pokemon.js )
- [views/pages/home.ejs](views/pages/home.ejs )
- [views/pages/details.ejs](views/pages/details.ejs )