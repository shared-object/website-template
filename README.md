# 🚀 Your Personal Link Tree Website

A beautiful, simple, and lightning-fast "Link Tree" style website. Use this to share all your social media links, portfolio projects, or personal info in one clean place.

Built with **React**, **TypeScript**, and **Vite** for the best performance.

---

## 🛠️ Step 1: Get the Code

First, you need to get these files onto your computer.

1.  **Clone this repository:**
    ```bash
    git clone https://github.com/shared-object/website-template.git
    cd website-template
    ```

2.  **Install dependencies:**
    (Make sure you have [Node.js](https://nodejs.org/) installed)
    ```bash
    npm install
    ```

---

## 🎨 Step 2: Make it Yours

You don't need to touch any complex code! All your information is stored in one simple file: `src/config.ts`.

1.  Open `src/config.ts` in your favorite text editor (like VS Code).
2.  Change the following values:
    *   **`name`**: Your name (displays in the browser tab and header).
    *   **`profilePicture`**: A link to your photo (or a local path in the `public/` folder).
    *   **`description`**: A short bio about yourself.
    *   **`socials`**: An array of your social links. You can add, remove, or change the colors and icons.

### Example `config.ts`:
```typescript
export const config = {
  name: "John Doe",
  profilePicture: "https://your-photo-link.com/image.jpg",
  description: "I build cool things and love music!",
  socials: [
    {
      platform: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: FaInstagram,
      color: "#E4405F",
    },
    // ... add more links here
  ],
};
```

---

## 🚀 Step 3: See it in Action

To see your changes live as you make them, run:

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser. Every time you save `config.ts`, the page will automatically refresh!

---

## 🌍 Step 4: Share it with the World

When you are ready to publish:

1.  **Build the project:**
    ```bash
    npm run build
    ```
    This creates a folder named `dist/` with your finished website.

2.  **Upload the `dist/` folder:**
    You can upload the contents of this folder to any hosting provider like:
    *   **Netlify** (Just drag and drop the `dist` folder!)
    *   **Vercel**
    *   **GitHub Pages**
    *   **Your own VPS** (using Nginx or Apache)

---

## 💡 Pro Tips

*   **Icons:** We use `react-icons`. You can find thousands of icons at [react-icons.github.io](https://react-icons.github.io/react-icons/). Just import the one you want in `config.ts`.
*   **Colors:** You can use any Hex color code (like `#FF0000`) for your social icons to match your brand.
*   **Background:** Want a different background? Check `src/App.css` and look for the `background` property in `:root`.

---

## 🤝 Contributing

Feel free to fork this project, open issues, or submit pull requests!

Created with ❤️
