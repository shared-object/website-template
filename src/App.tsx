import { useEffect } from 'react'
import './App.css'
import { config } from './config'
import SocialLink from './components/SocialLink'

function App() {
  useEffect(() => {
    document.title = `${config.name}'s place`;
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute('href', config.profilePicture);
    }
  }, []);

  return (
    <div className="card">
      <img 
        src={config.profilePicture} 
        alt={config.name} 
        className="profile-pic" 
      />
      <h1 className="name">{config.name}</h1>
      <p className="description">{config.description}</p>
      
      <div className="socials-container">
        {config.socials.slice(0, 3).map((social, index) => (
          <SocialLink 
            key={index}
            platform={social.platform}
            url={social.url}
            icon={social.icon}
            color={social.color}
          />
        ))}
      </div>
      <div className="socials-container" style={{ marginTop: '1.5rem' }}>
        {config.socials.slice(3).map((social, index) => (
          <SocialLink 
            key={index + 3}
            platform={social.platform}
            url={social.url}
            icon={social.icon}
            color={social.color}
          />
        ))}
      </div>
    </div>
  )
}

export default App
