var express = require('express')
var app = express()

const bodyParser= require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const uuid = require('uuid/v1')
const nodeAddress = uuid().split('-').join('')//there are -- so to remove we will split and join again

const Blockchain = require('./blockchain');
const Bitcoin = new Blockchain();

app.get('/blockchain', function (req, res) {
  res.send(Bitcoin)
})

app.post('/transaction', function (req, res) {
    const blockIndex = Bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recepient)
    console.log(req.body);
    res.json(`Note: the new block is ${blockIndex}`)
})

app.get('/mine', function (req, res) {
    const lastBlock = Bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];

    const currentBlockData = {
        transactions: Bitcoin.pendingTransactions,
        index: lastBlock['index'] + 1
    };
    const nonce = Bitcoin.proofOfWork(previousBlockHash, currentBlockData)
    const blockHash = Bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce)

    Bitcoin.createNewTransaction(12.5,'00',nodeAddress)// awarding for miner
    const newBlock = Bitcoin.createNewBlock(nonce,previousBlockHash,blockHash);

    res.json({
         note : "new block mined",
         block : newBlock
    })
})


app.listen(3000,function(){
    console.log(`listening on port 3000`);
    
})