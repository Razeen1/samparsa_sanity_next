import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Mason = ({ mason: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/mason/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">Rs.{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Mason