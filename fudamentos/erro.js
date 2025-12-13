function tratarErroELancar(erro) {
    //throw new Error('...') //lança um erro
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
 
//função que tenta imprimir o nome em maiúsculo e com exclamações
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
        //vai gerar um erro pq obj.name está undefined
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')   //sempre será executado
    }
}
 
const obj = { nome: 'Roberto' } //obj está com a propriedade errada
imprimirNomeGritado(obj) //vai gerar um erro pq o certo é obj.name

