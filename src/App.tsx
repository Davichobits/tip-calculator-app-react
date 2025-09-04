import { Calculator } from './components/calculator'
function App() {

  return (
    <main>
      <h1 className='hidden'>Tip Calculator</h1>
      <div className='flex justify-center my-10'>
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <Calculator />
    </main>
  )
}

export default App
