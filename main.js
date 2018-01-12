

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
}
web3.eth.defaultAccount = web3.eth.accounts[0];
var helloworldContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_message","type":"string"}],"name":"setMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMessage","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]);
var Coursetro = helloworldContract.at("0xbc64f9d694cb56ab38a65a767ca6d4d01952306f");
console.log(Coursetro);

Coursetro.getMessage(function(error, result){
    if(!error){
        $("#theMessageR").html(result[0]);

    }

    else
        console.error(error);
});
$("#button").click(function() {
    Coursetro.setMessage($("#theMessageS").val());

});