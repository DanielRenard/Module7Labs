import { useState } from "react";
import { useData } from "../hooks/useData"

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  // const [rate, setRate] = useState(0)

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  const data = useData(`https://www.boredapi.com/api/activity?participants=${currency}`)
  const rate = data ? data.json.bitcoin[currency.toLowerCase()]: 'not found'

  // useEffect(() => {
  //   console.log("Running Effect");
  //   let ignore = false;
  //   fetch(
  //     `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         // Add your custom headers here, if needed
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log("Response", json);
  //       if (!ignore) setRate(json.bitcoin[currency.toLowerCase()]);
  //     });
  //   // let json = {
  //   //     "bitcoin": {
  //   //         "aud": 65750
  //   //     }
  //   // }
  //   // setRate(json.bitcoin.aud)

  //   return () => {
  //     ignore = true;
  //     console.log("Cleanup effect");
  //   };
  // }, [currency]);

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div><strong> Rate: </strong>{rate}</div>
    </div>
  );
}

export default BitcoinRates;