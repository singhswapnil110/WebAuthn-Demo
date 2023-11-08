import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const publicKeyCred = {
    challenge: Uint8Array.from("swapnil2234", c => c.charCodeAt(0)),
    rp: {
      name: "Webauthn Demo",
      id: "https://netlify.app/",
    },
    user: {
      id: Uint8Array.from(
        "UZSL85T9AFC", c => c.charCodeAt(0)),
      name: "lee@webauthn.guide",
      displayName: "Lee",
    },
    pubKeyCredParams: [{alg: -7, type: "public-key"}, {
      type: "public-key",
      alg: -257 // Value registered by this specification for "RS256"
    }],
    authenticatorSelection: {
      authenticatorAttachment: "platform",
      userVerification: "preferred",
    },
    timeout: 60000,
    attestation: "direct"
  };

  const handleSubmit = () => {
    console.log("Called")
    navigator.credentials.create({publicKey: publicKeyCred})
      .then(res=>console.log(res))
    }
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleSubmit}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
