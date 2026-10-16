import { useState } from 'react'
import profileImage from '../../assets/sandeep.jpg'

export default function ProfileAvatar({ className = '', name = 'Sandeep Muhal' }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div className={`profile-avatar ${className}`.trim()}>
      {imageFailed
        ? <span className="profile-avatar-fallback" role="img" aria-label={name}>SM</span>
        : (
          <img
            className="profile-avatar-image"
            src={profileImage}
            alt={name}
            onError={() => setImageFailed(true)}
          />
        )}
    </div>
  )
}
