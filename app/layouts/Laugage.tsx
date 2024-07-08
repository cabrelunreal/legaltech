import React from 'react'
import DocCreation from '../components/DocCreation'

const image = ''
const description = 'Visiteurs/jour'
const title = '+15 000'

const image1 = ''
const description1 = 'Experts Juridiques'
const title1 = '+250'

const image2 = ''
const description2 = 'Travaux réalisés'
const title2 = '+12M'

const image3 = ''
const description3 = 'Travaux réalisés'
const title3 = '+3150'
const Laugage = () => {
  return (
    <div>
        <div>
            <DocCreation image={image} description={description} title={title} />
        </div>
        <div>
            <DocCreation image={image1} description={description1} title={title1} />
        </div>
        <div>
            <DocCreation image={image2} description={description2} title={title2} />
        </div>
        <div>
            <DocCreation image={image3} description={description3} title={title3} />
        </div>
    </div>
  )
}

export default Laugage