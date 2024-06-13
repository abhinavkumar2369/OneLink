import './Otherlinks.css';

import facebook_logo from "../icon_logos/facebook.svg";
import instagram_logo from "../icon_logos/instagram.svg";
import twitter_logo from "../icon_logos/twitter.svg";
import linkedin_logo from "../icon_logos/linkedin.svg";
import mail_logo from "../icon_logos/mail.svg";
import github_logo from "../icon_logos/github.svg";
import snapchat_logo from "../icon_logos/snapchat.svg";
import discord_logo from "../icon_logos/discord.svg";
import whatsapp_logo from "../icon_logos/whatsapp.svg";
import telegram_logo from "../icon_logos/telegram.svg";
import leetcode_logo from "../icon_logos/leetcode.svg";

function Otherlinks() {
  const links_data = [
    { 
      name: "Facebook",
      url: "https://facebook.com/abhinavkumar2369",
      image: facebook_logo 
    },
    { 
      name: "Instagram",
      url: "https://instagram.com/abhinavkumar2369",
      image: instagram_logo
    },
    {
      name: "Twitter",
      url: "https://twitter.com/Abhinav_2369",
      image: twitter_logo,
    },
    { 
      name: "LinkedIn",
      url: "https://linkedin.com/in/abhinavkumar2369",
      image: linkedin_logo
    },
    { 
      name: "Mail",
      url: "mailto:abhinavkumar2369@outlook.in",
      image: mail_logo
    },
    { 
      name: "GitHub",
      url: "https://github.com/abhinavkumar2369",
      image: github_logo
    },
    {
      name: "Snapchat",
      url: "https://snapchat.com/add/abhinav_2369",
      image: snapchat_logo,
    },
    {
      name: "Discord",
      url: "https://discord.gg/yourserver",
      image: discord_logo,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+919455602369",
      image: whatsapp_logo,
    },
    {
      name: "Telegram",
      url: "https://t.me/abhinavkumar2369",
      image: telegram_logo,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/abhinavkumar2369",
      image: leetcode_logo,
    }
  ];

  return (
    <div className="otherlinks">
      {links_data.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="logo-links"
        >
          <span>
            <img src={link.image} alt={link.name} />
          </span>
        </a>
      ))}
    </div>
  );
}

export default Otherlinks;
