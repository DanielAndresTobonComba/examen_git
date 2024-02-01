async function añadirOptions(){
    const url = `https://cdn.dinero.today/api/boa.json`
    const respuesta = await fetch(url)
    const json = await respuesta.json()
    let rates = json.rates
    let divisasNombre = Object.keys(rates);
    let divisasValor = Object.values(rates);
    console.log(json.rates)
    console.log(Array(json.rates))
    console.log(Object.keys(rates))
    console.log(Object.values(rates))
    divisasNombre.forEach(divisa => {

        let div_dest = document.getElementById("div-dest")
        let option = document.createElement("option");
        option.textContent = divisa;
        div_dest.appendChild(option);
    });
    divisasNombre.forEach(divisa=>{
        let div_org = document.getElementById("div-orig")
        let option = document.createElement("option");
        option.textContent = divisa;
        div_org.appendChild(option)
    })
}
añadirOptions()
