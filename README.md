# SimpleBlockChain
developed a block chain using javascript

# preRequistes
- node and npm should be installed
- run npm install -g nodemon

# steps
1. Run npm init via command prompt
2. Run npm i body-parser express sha256 uuid
3. Add "start":"nodemon --watch dev -e js api.js" in scripts array of package.json

# for running
- Run the command npm start
- Test with postman
   1. Get request http://localhost:3000/blockchain
   2. Post request http://localhost:3000/transaction
      body for post request:

      ``` json
      {
          "amount":100,
          "sender":"asfasdfgsdgf",
          "receiver":"qefvsdgfbgf"
      }
      ```
   3. Get request http://localhost:3000/mine