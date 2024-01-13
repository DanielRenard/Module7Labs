import{ useEffect, useState } from "react"

export function useData(url) {
    // state variable for holding fetched json data
    const [rate, setRate] = useState(null);

       
    useEffect(() => {
        if (url) {
            let ignore = false;
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (!ignore) {
                        setRate(json);
                    }
                });
            return () => {
                ignore = true;
            };
        }
    }, [url]);
    return rate;
}

//     useEffect(() => {
//         let ignore = false;
//         fetch(
//         `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
//         {
//             headers: {
//             "Content-Type": "application/json",
//             },
//         }
//         )
//         .then((response) => response.json())
//         .then((json) => {
//             console.log("Response", json);
//             if (!ignore) setRate(json.bitcoin[currency.toLowerCase()]);
//         });

//         return () => {
//         ignore = true;
//         console.log("Cleanup effect");
//         };
//     }, [currency]);
// }