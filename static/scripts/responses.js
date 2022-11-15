function getBotResponse(input) {
    //rock paper scissors
    if (input == "medicines") {
        return "paracetmol,antibiotics,vitamin c tablets";
    } else if (input == "symptoms") {
        return "fever,headache,bodypains,sore throat,chest pain,difficulty in breathing";
    } else if (input == "preventations") {
        return "wear masks in public and maintain social distance with peoples";
    }else if (input == "foods") {
        return "eat healthy fruits,vegetables,egg,dry fruits";
    }else if (input == " emergency") {
        return "visit your nearer hospital and seek immediate medical process";
    }
    

    // Simple responses
    
    
    
    if (input == "hello")  {
        return "Hello there!";
    
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "thanks") {
        return "you are welcome! have a pleasant day";
    }else {
        return "Try asking something else!";
    }
}