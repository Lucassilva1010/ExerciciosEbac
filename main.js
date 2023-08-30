const form = document.getElementById('recebeNumeros');

function MaiorMenor(v1, v2){
     v1 = parseFloat(v1);
     v2 = parseFloat(v2);
    //console.log(num1 < num2)
    return v2 > v1;

}


form.addEventListener('submit', function (e) {
    e.preventDefault(); //Cancela o retorno de eventos automaticos
    const buscaHtml = document.querySelector('.mensagemResultado');
    const buscaHtmlErro = document.querySelector('.mensagemErro');
    const valorA = document.getElementById('numeroA');
    const valorB = document.getElementById('numeroB');
   
    const result = MaiorMenor(valorA.value, valorB.value)
    console.log(result)
    const mensagemMaior = `Valor B = ${valorB.value} é Maior que o valor A = ${valorA.value}!`
    const mensagemMenor = `Valor B = ${valorB.value} é Menor que o valor A = ${valorA.value}!`
  
    if(result) {
        buscaHtml.innerHTML = mensagemMaior;
        buscaHtml.style.display = 'block';

        //limpando os campos
       // valorA.value = '';
        //valorB.value = '';
    }else{
        
        buscaHtmlErro.innerHTML = mensagemMenor;
        buscaHtmlErro.style.display = 'block';

        //limpando os campos
        //valorA.value = '';
        //valorB.value = '';
    }
});
