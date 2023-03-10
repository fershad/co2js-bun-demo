import { co2, hosting } from "@tgwf/co2";

const emissions = new co2({ model: '1byte' })
const bytesSent = 1000 * 1000 * 1000; // 1GB expressed in bytes
const estimatedCO2 = emissions.perByte(bytesSent);
console.log(`Sending a gigabyte, had a carbon footprint of ${estimatedCO2.toFixed(3)} grams of CO2.`);

const greenHost = await hosting.check('google.com')
console.log(`Google.com ${greenHost ? 'is' : 'is not' } on green hosting.`);

// Run the command `deno run --allow-read --allow-env --allow-net index.js` in the terminal