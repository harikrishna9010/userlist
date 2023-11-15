import './index.css'

const UserProfile = props => {
  const {userDetails, key} = props
  const {imgUrl, name, designation} = userDetails
  return (
    <li className="user-card-container">
      <img src={imgUrl} className="avatar" alt={key} />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{designation}</p>
      </div>
    </li>
  )
}
export default UserProfile
