import React from 'react'
import './Map.scss'

function Map() {
  return (
    <div>
        <div className="footer">
          <div className="footer-div containerM">
            <div>
              <h3>Наша география</h3>
              <p>Наше производство находится в Украине, но клиенты из более чем 50 стран радуются товарам, приобретенным в нашем магазине.</p>
            </div>
            <div>
              <iframe title='ifream' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95872.49292629753!2d69.238784!3d41.3302784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1673184527733!5m2!1sru!2s" width={'600'} height={'450'} style={{border: '0px'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Map