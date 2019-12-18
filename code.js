const axios = require("axios")

var data_alteracao = []
var data_abastecimento = []
var data_veiculo = []

function getData_Altera() {

    axios.get( 'http://challenge-for-adventurers.herokuapp.com/data/5daa54df6d81f30014e7e9a4/prices')
    .then(function(response){
     data_alteracao = response.data
     console.log(data_alteracao); // ex.: {date: 'valor', value: 'valor}
     
    });

}getData_Altera()
 


    





   
     