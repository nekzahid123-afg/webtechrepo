import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    const controller = new AbortController()
    const currentCurrency = currency.toLowerCase()

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currentCurrency}.json`,
      { signal: controller.signal },
    )
      .then((res) => res.json())
      .then((res) => setData(res[currentCurrency] || {}))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setData({})
        }
      })

    return () => controller.abort()
  }, [currency])

  return data
}

export default useCurrencyInfo
