import './App.css'
import { useState } from "react";
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

function App() {
  const [value, setValue] = useState('')
  const [qrcode, setQRCode] = useState('');

  function generate(link) {
    QRCodeLink.toDataURL(link, {
      width: 500,
      margin: 3
    }, (err, url) => {
      setQRCode(url)
    }
  }

  function handleQrCode(e) {
    setValue(e.target.value)
    generate(e.target.value)
  }

  return (
    <div className='container'>
      <div className='card'>
        <strong className='title'>GERADOR DE QR CODE</strong>
        <span className='subtitle'>Insira uma URL ou texto para criar o seu QR CODE</span>

        <input type="text" value={value} className='input' placeholder='Seu texto aqui...' onChange={(e) => handleQrCode(e)}/>

        <div className='qrcode'>
          <QRCode value={value} size='96' elevation={2} />
        </div>

        <a href={qrcode} download="qrcode.png" className='btn-download'>Download</a>
      </div>
    </div>
  )
}

export default App
