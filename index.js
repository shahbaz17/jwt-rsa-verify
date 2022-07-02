// 1. npm init -y
// 2. npm install jsonwebtoken
// 3. create an index.js file and paste the below code
// 4. open terminal inside the vscode and type
// 5. openssl genrsa -out privateKey.pem 512
// 6. openssl rsa -in privateKey.pem -pubout -out publicKey.pem
// 7. node index.js
import jwt from 'jsonwebtoken'
import fs from 'fs'
// openssl genrsa -out privateKey.pem 512
var privateKey = fs.readFileSync('privateKey.pem')
// openssl rsa -in privateKey.pem -pubout -out publicKey.pem
var publicKey = fs.readFileSync('publicKey.pem')

var token = jwt.sign(
  {
    sub: 'Custom JWT for Web3Auth Custom Auth',
    name: 'Mohammad Shahbaz Alam',
    email: 'shahbaz@web3auth.io',
    aud: 'https://web3auth.com', // -> to be used in Custom Authentication as JWT Field
    iss: 'https://web3auth.com', // -> to be used in Custom Authentication as JWT Field
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  },
  privateKey,
  {algorithm: 'RS256'},
)

console.log(token)

var decoded = jwt.verify(token, publicKey)
console.log(decoded)
