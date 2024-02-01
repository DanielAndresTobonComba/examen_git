export async function calcular (origen,valueDestino,valueOrigen){
    let valorDesitno = document.getElementById("cant-dest")
    const url = `https://cdn.dinero.today/api/boa.json`
    const respuesta = await fetch(url)
    const json = await respuesta.json()
    let rates = json.rates
    let divisasValor = Object.values(rates);
    let pr = origen * divisasValor[valueDestino] * divisasValor[valueOrigen];
    valorDesitno.value = pr.toFixed(2) 
}