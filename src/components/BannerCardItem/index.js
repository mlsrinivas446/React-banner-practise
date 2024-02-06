import './App.js'

import './index.css'

const BannerCardItem = props => {
  const {headerText, description, className} = props
  return (
    <div className={className}>
      <h1 className="card-heading">{headerText}</h1>
      <p className="card-description">{description}</p>
      <button className="btn">Show More</button>
    </div>
  )
}

export default BannerCardItem
