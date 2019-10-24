import React from 'react'
import('./FeaturesList.css');

const FeaturesList = ({ features }) => {

  const featuresLists = features.map((
    { name, description, MDNLink, isFullyImplemented, implementations }
    , index) => {
    return (
    <ul key={index}>
      <li>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={MDNLink}>Documentation 📖</a>
        <h5>{isFullyImplemented ? "Fully Implemented ✅": "Please implement me here 👇"}</h5>
        <code>{implementations}</code>
        <p></p>
      </li>
    </ul>
    )
  })

  return (
  <div>
    {featuresLists}
  </div>
  )


}

export default FeaturesList