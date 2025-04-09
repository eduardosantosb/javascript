function calcular() {
    var inicio = document.getElementById('start').value
    var fim = document.getElementById('end').value
    var passo = document.getElementById('passo').value
    var res = document.getElementById('res')
    if (Number(inicio == '')) {
        res.innerHTML = 'Impossível contar!'
    } else if (Number(passo == 0 || passo == '')){
        alert('Passo inválido! Considerando PASSO 1')      
    } else {
        res.innerHTML = 'Tudo certo!'
    }
}