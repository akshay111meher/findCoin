var BASE58 = require('base-58')
var address = process.argv[2]
// console.log(result)
// console.log(result[0])
try{
if(address.length == "42"){
    console.log("Ether Address")
}else if(address.length == "44" && address[0]=="0" && address[1]=="x"){
    console.log("Ether Address")
}else if(address.length == "34"){
    // console.log("Something Else")
    var result = BASE58.decode(address)
    if(result[0]=="0"){
        console.log("Bitcoin Address")
    }else if(result[0]=="111"){
        console.log("Bitcoin/Litecoin/Peercoin/Freicoin/Beivercoin/Protoshares/Megacoin/Primecoin/Auroracoin TestNet Address")
    }else if(result[0]=="55"){
        console.log("Peercoin Address")
    }else if(result[0]=="30"){
        console.log("Dogecoin Address")
    }else if(result[0]=="113"){
        console.log("Dogecoin Test Address")
    }else if(result[0]=="19"){
        console.log("Beavercoin Address")
    }else if(result[0]=="17"){
        console.log("Primecoin/Auroracoin Address")
    }else if(result[0]=="34"){
        console.log("Namecoin Address")
    }else if(result[0]=="196"){
        console.log("Bitcoin/Litecoin/Peercoin/Dogecoin/Freicoin/Beivercoin/Protoshares/Megacoin/Primecoin/Auroracoin TestNet P2SHAddress")
    }else if(result[0]=="5"){
        console.log("Bitcoin/Litecoin/Beavercoin/Freicoin/Protoshares/Megacoin/Auroracoin P2SH Address")
    }else if(result[0]=="75"){
        console.log("Peercoin P2SH Address")
    }else if(result[0]=="16"){
        console.log("Dogecoin P2SH Address")
    }else if(result[0]=="83"){
        console.log("Primecoin P2SH Address")
    }else{
        console.log("Unknown ")
    }
    console.log("Decimal prefix ",result[0])
}else{
    console.log("Unidentified Wallet Address")
}
}catch(ex){
    console.log("Invalid characters found in address \n",ex)
}
