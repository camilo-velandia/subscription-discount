import React, { useState, useEffect } from 'react'
import { Modal } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'


type Props = {
  image: string
  text: string
}

const SuscriptionPopup = ({image, text}:Props) => {

  const CSS_HANDLES = ['closeBtn','mainContainer','infoText','formContainer']
  const handles = useCssHandles(CSS_HANDLES)


  const [modal, setModal] = useState(false)

  const isClosed = localStorage.getItem('hiddeModal')

  useEffect(() => {
    if (isClosed === 'true') {
      setModal(false)
    } else {
      setTimeout(() => { setModal(true) }, 2000);
    }
  }, [])

  const handleClose = () => {
    setModal(false)
    localStorage.setItem('hiddeModal', 'true')
  }

  console.log('text',text)

  return (
    <div>
      <Modal centered isOpen={modal} onClose={handleClose}>

        <div
          className={handles.main__container}
          style={{
            backgroundImage: `url(${image})`
          }}>
            <h3 className={handles.infoText}>
              {text}
            </h3>
            <div>form</div>
        </div>
      </Modal>
    </div>
  )


};

SuscriptionPopup.schema = {
  title: "Suscription Popup",
  type: "object",
  properties: {
    image: {
      title: "Upload modal image",
      type: 'string',
      widget: {
        "ui:widget": "image-uploader"
      }
    },

    text: {
      title: "informative text",
      type: 'string'
    }
  }

}

export default SuscriptionPopup;
