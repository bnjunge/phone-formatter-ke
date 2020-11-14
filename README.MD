### KE Phone Number formatter
This is a simple package to assist in formatting Kenyan phone numbers and also auto selecting the ISP the number belongs to.

#### Installing via npm
npm install --save phone-formatter-ke

#### Via CDN 
Coming soon


##### Usage
```js
const { checkOperator, FormatNumbers } = require('../Support/PhoneFormatter');

<h4>Format phones</h4>
// format phone number
let formatted_phone = FormatNumbers("0711123123") // pass number as a string
console.log(formatted_phone) // will show 254711123123

let formatted_phone = FormatNumbers("711123123") // pass number as a string
console.log(formatted_phone) // will show 254711123123
```

##### Find ISP/MVNO
```js
let isp = checkOperator("0711123123") // pass number as a string
console.log(isp) // will show Safaricom

let isp2 = checkOperator("0733123123")
console.log(isp2) // will show Airtel
...
```

#### Contributions
PLease submit your contributions as PRs and also leave a good description for the PR. 


### Licenses
This code is licenced under MIT. Feel free to use, distribute, sell or modify. No warranties or guarantees are offered by the same.