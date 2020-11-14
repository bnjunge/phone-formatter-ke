
![npm](https://img.shields.io/github/issues/bnjunge/phone-formatter-ke)
![npm](https://img.shields.io/badge/npm-v2.1.2-blue)
![npm](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fbnjunge%2Fphone-formatter-ke)

## KE Phone Number formatter
This is a simple package to assist in formatting Kenyan phone numbers and also auto selecting the ISP the number belongs to.


### Installing via npm
```npm install --save phone-formatter-ke@x.x.x```

Replace ```x.x.x``` with the current version

### Via CDN 
* Coming soon


### Usage
```js
const { checkOperator, FormatNumbers } = require('../Support/PhoneFormatter');

/**
 * Format phones
 * Format phone number
 * pass any number here for any phone number/provider in Kenya
 */

let formatted_phone = FormatNumbers("0711123123") // pass number as a string, 
console.log(formatted_phone) // will show 254711123123

let formatted_phone = FormatNumbers("711123123") // pass number as a string
console.log(formatted_phone) // will show 254711123123
```

### Find ISP/MVNO
```js
/**
 * pass any number here for any phone number/provider in Kenya
 * Supported providers 
 * Safaricom KE
 * Airtel KE
 * Telkom KE
 * Equitel KE
 * Faiba4g/Jamii Telkom
 * 
 */
let isp = checkOperator("0711123123") // pass number as a string
console.log(isp) // will show Safaricom

let isp2 = checkOperator("0733123123")
console.log(isp2) // will show Airtel
...
```

### Contributions
PLease submit your contributions as PRs and also leave a good description for the PR. 


### Coffee?  
Support me by subscribing my YouTube Channel to also learn more 

[My YouTube Channel Link](https://www.youtube.com/channel/UCir9WqT_YkTy9zoh-AopByg?sub_confirmation=1)

### Licenses
This code is licenced under MIT. Feel free to use, distribute, sell or modify. No warranties or guarantees are offered by the same.