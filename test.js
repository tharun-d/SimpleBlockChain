const Blockchain = require('./blockchain');

const Bitcoin = new Blockchain();

const previoushash = 'egfsdgsdgsdgsdg';
const currentblockdata = [
    {
        amount:100,
        sender:'adfzfsdgsdg',
        recepient:'asfafarfar'
    },
    {
        amount:1000,
        sender:'adfffzfsdgsdg',
        recepient:'asfafhfarfar'
    }
];

console.log(Bitcoin.proofOfWork(previoushash,currentblockdata));
