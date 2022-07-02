# JWT sign and verify using RSA256

JSON Web Token (JWT) is a compact token that represents an authenticated user.
JWT is a standard for authentication in the internet. This code is using RSA256
algorithm to sign and verify the JWT.

## Installation

```shell
git clone https://github.com/shahbaz17/jwt-rsa-verify.git
cd jwt-rsa-verify
npm install
```

## Usage

```shell
node index.js
```

## Structure of a JWT

Header

```json
{
  "alg": "RS256",
  "typ": "JWT"
}
```

Payload

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

Signature

```json
{
  "signature": "<base64 encoded signature>"
}
```
