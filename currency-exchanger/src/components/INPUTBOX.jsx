import { useId } from 'react'

export default function INPUTBOX({
  label,
  amount,
  onAmountchanbe,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amounDisable = false,
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId()
  const handleAmountChange = onAmountchanbe || onAmountChange
  const isAmountDisabled = amounDisable || amountDisable
  const options = currencyOptions.length ? currencyOptions : [selectCurrency]

  return (
    <div className="flex w-full items-center justify-between rounded-lg bg-white p-4 text-sm">
      <div className="flex w-1/2 flex-col gap-3">
        <label className="text-sm text-gray-500" htmlFor={amountInputId}>
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full bg-transparent text-base text-black outline-none"
          type="number"
          placeholder="0"
          disabled={isAmountDisabled}
          value={amount}
          onChange={(event) => handleAmountChange?.(Number(event.target.value))}
        />
      </div>

      <div className="flex w-1/2 flex-col items-end gap-3">
        <p className="text-sm text-gray-500">Currency Type</p>
        <select
          className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-black outline-none"
          disabled={currencyDisable}
          value={selectCurrency}
          onChange={(event) => onCurrencyChange?.(event.target.value)}
        >
          {options.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
