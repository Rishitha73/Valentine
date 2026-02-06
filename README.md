# 💖 Valentine's Day Website

A beautiful, romantic, and fully responsive Valentine's Day themed website built with HTML, CSS, and JavaScript.

![Valentine's Day](https://img.shields.io/badge/Valentine's%20Day-2026-ff69b4)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Design & Theme
- Romantic color palette (pink, red, white, pastel shades)
- Dark/Light theme toggle with localStorage persistence
- Elegant Google Fonts (Great Vibes, Poppins, Dancing Script)
- Fully responsive design for mobile, tablet, and desktop
- Smooth animations and transitions throughout

### 📑 Sections

#### 🏠 Hero Section
- Large animated heading with romantic message
- Floating hearts background animation
- Personalized greeting with dynamic name
- Call-to-action button with smooth scroll

#### 💌 Love Message Section
- Heartfelt customizable message
- Typing animation effect
- Beautiful card design with romantic styling

#### 📸 Memory Gallery Section
- 6-image responsive grid layout
- Hover effects with smooth transitions
- Lightbox popup for full-size image preview
- Custom captions for each memory

#### ⏱️ Love Counter Section
- Real-time countdown timer
- Shows days, hours, minutes, and seconds together
- Customizable start date
- Saves selected date to localStorage

#### 🎁 Surprise Section
- Interactive surprise button
- Romantic popup modal with animations
- Confetti effect on activation
- Heart rain animation

#### 🎵 Music Player
- Background romantic music support
- Floating play/pause control button
- Ready for custom audio file integration

### 🎯 Interactive Features
- 💕 **Floating Hearts**: Click anywhere to create floating heart animations
- 🎊 **Confetti Effect**: Triggered on special interactions
- 💖 **Heart Rain**: Cascading hearts animation
- 🎨 **Theme Toggle**: Switch between light and dark romantic themes
- 📝 **Name Personalization**: Enter a name to customize the experience
- 🔄 **Smooth Scrolling**: Navigation with smooth scroll behavior
- 👀 **Parallax Effect**: Subtle parallax scrolling on hero section
- 🎭 **Fade-in Animations**: Sections animate as you scroll
- 🕹️ **Easter Egg**: Hidden Konami code surprise (↑↑↓↓←→←→BA)

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) A romantic music file for background audio

### Installation

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/yourusername/valentine.git
   cd valentine
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

3. **Personalize the website**
   - Enter your loved one's name when prompted
   - Set your special date in the counter section
   - (Optional) Add background music (see customization below)

## 🎨 Customization

### Adding Background Music
1. Add your music file to the project folder
2. Update line 184-186 in `index.html`:
   ```html
   <audio id="bgMusic" loop>
       <source src="your-music-file.mp3" type="audio/mpeg">
   </audio>
   ```

### Changing Gallery Images
Replace the Unsplash URLs in `index.html` (lines 74-119) with your own images:
```html
<img src="path/to/your/image.jpg" alt="Memory 1">
```

### Customizing the Love Message
Edit the message variable in `script.js` (lines 118-120) to personalize the typed message.

### Adjusting Colors
Modify CSS variables in `style.css` (lines 5-13):
```css
:root {
    --primary-color: #ff6b9d;
    --secondary-color: #c44569;
    --accent-color: #ffc3a0;
    /* ... more colors */
}
```

### Setting Default Start Date
Change the default date in `script.js` (line 6):
```javascript
let startDate = new Date('2024-02-14'); // Your special date
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop (1024px and up)
- 🖥️ Large screens (1920px and up)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with animations
  - Flexbox & Grid layouts
  - CSS animations and keyframes
  - Custom properties (CSS variables)
  - Media queries for responsiveness
- **JavaScript (ES6+)**: Interactive functionality
  - DOM manipulation
  - Event listeners
  - LocalStorage API
  - Canvas API (for confetti)
  - Intersection Observer API

## 📂 Project Structure

```
valentine/
│
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # Interactive JavaScript features
└── README.md          # Project documentation
```

## 🎯 Features Breakdown

### Implemented Features
- ✅ Responsive navigation bar
- ✅ Dark/Light theme toggle
- ✅ Name personalization with localStorage
- ✅ Animated hero section with floating hearts
- ✅ Typing animation for love message
- ✅ Photo gallery with lightbox
- ✅ Real-time love counter
- ✅ Surprise modal with animations
- ✅ Music player controls
- ✅ Floating hearts on click
- ✅ Confetti animation
- ✅ Heart rain effect
- ✅ Smooth scrolling
- ✅ Parallax effects
- ✅ Fade-in scroll animations
- ✅ Auto-hiding navbar
- ✅ Easter egg (Konami code)

## 🎨 Color Palette

### Light Theme
- Primary: `#ff6b9d` (Pink)
- Secondary: `#c44569` (Rose)
- Accent: `#ffc3a0` (Peach)
- Background: `#fff5f7` (Light Pink)
- Card: `#ffffff` (White)

### Dark Theme
- Primary: `#ff6b9d` (Pink)
- Secondary: `#ff8fab` (Light Pink)
- Accent: `#ffc3a0` (Peach)
- Background: `#1a1a2e` (Dark Blue)
- Card: `#16213e` (Navy)

## 🔧 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📝 License

This project is open source and available for personal use. Feel free to customize it for your loved ones! ❤️

## 💝 Usage Ideas

- Send to your Valentine
- Use as a proposal website
- Anniversary celebration
- Virtual Valentine's card
- Romantic surprise
- Love letter alternative

## 🤝 Contributing

Feel free to fork this project and add your own romantic touches! Some ideas:
- Add more interactive animations
- Create additional theme options
- Add social media sharing
- Include a countdown to Valentine's Day
- Add more gallery effects

## 💌 Credits

- Fonts: [Google Fonts](https://fonts.google.com/)
- Images: [Unsplash](https://unsplash.com/) (sample images)
- Icons: Native emoji

## ❤️ Made With Love

Created with ❤️ for Valentine's Day 2026

---

**Happy Valentine's Day!** 💕

*Remember: The best gift is the time and effort you put into making someone feel special.* ✨
