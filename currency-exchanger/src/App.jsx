import { useState } from 'react'
import './App.css'
import { INPUTBOX } from './components'
import useCurrencyInfo from './customhook/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-4 py-10"
      style={{
        backgroundImage:
          'linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.72)), url("https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1400&q=80")',
      }}
    >
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
        <form
          className="w-full rounded-xl border border-white/35 bg-white/20 p-5 shadow-2xl backdrop-blur-md"
          onSubmit={(event) => {
            event.preventDefault()
            convert()
          }}
        >
          <h1 className="mb-5 text-center text-3xl font-semibold text-white">
            Currency Exchange App
          </h1>

          <div className="space-y-3">
            <INPUTBOX
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(value) => setAmount(value)}
            />

            <div className="relative h-0">
              <button
                type="button"
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-white bg-blue-600 px-4 py-1 text-sm text-white shadow-md hover:bg-blue-700"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <INPUTBOX
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 text-white shadow-md hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
            disabled={!currencyInfo[to]}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
