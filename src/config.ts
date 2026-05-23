import { FaTelegram, FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa';

export const config = {
  name: "YOUR_NAME",
  profilePicture: "https://via.placeholder.com/150", // Replace with your image URL or path
  description: "YOUR_DESCRIPTION_HERE",
  socials: [
    {
      platform: "Telegram",
      url: "https://t.me/yourusername",
      icon: FaTelegram,
      color: "#0088cc",
    },
    {
      platform: "Discord",
      url: "https://discord.com/users/yourid",
      icon: FaDiscord,
      color: "#5865F2",
    },
    {
      platform: "GitHub",
      url: "https://github.com/yourusername",
      icon: FaGithub,
      color: "#333",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: FaInstagram,
      color: "#E4405F",
    },
  ],
};
