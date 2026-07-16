import { Upload, Star, Bookmark } from "lucide-react"

const User = ({users}) => {
  return (
    <div className="user">
      <div className="upload">
        <Upload />
      </div>

      <div className="user-details">
        <img src={users.profilePicture} alt={users.username} />
        <h2>{users.username}</h2>
        <h3>{users.designation}</h3>
        <div className="tag">
          <p>{users.tag1}</p>
          <p>{users.tag2}</p>
        </div>
      </div>

      <div className="user-info">
        <div className="rating">
          <p className="star-p">
            <span><Star size={14} strokeWidth={3.5} /> </span>
            <p>{users.rating}</p>
          </p>
          <p className="para">Rating</p>
        </div>

        <div className="earned">
          <p className="star-p">{users.earned}</p>
          <p className="para">Earned</p>
        </div>

        <div className="rate">
          <p className="star-p">{users.rate}</p>
          <p className="para">Rate</p>
        </div>
      </div>

      <div className="last">
        <button>Get in touch</button>
        <Bookmark className="bookmark-icon" />
      </div>
    </div>
  )
}

export default User
