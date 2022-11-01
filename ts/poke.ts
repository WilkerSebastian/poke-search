$("#pesquisa").on("click" , async ()=> {

    await fetch(`https://pokeapi.co/api/v2/pokemon/${$("#pokenome").val() as string}`)
    .then((res)=> {

        res.json().then((e) => {

            $("#pokemon").css("display" , "block")

            $("#name").text(e.forms[0].name.toUpperCase())
            $("#sprite").attr("src" , e.sprites.front_default)

            e.stats.forEach((s:any) => {

                $("#status").append(createDiv(s.stat.name , s.base_stat))

            })

        })
        .catch(err => {

            alert("erro: " + err)
    
        })
    })
    .catch(err => {

        alert("erro: " + err)

    })

})

function createDiv(nome:string , valor:number) {

    return `<div class="col">
    
        <h5>${nome}</h5>
        <p>${valor}</p>
    
    </div>`

}