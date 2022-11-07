$("#pesquisa").on("click" , async ()=> {

    await fetch(`https://pokeapi.co/api/v2/pokemon/${$("#pokenome").val() as string}`)
    .then((res)=> {

        res.json().then((e) => {

            $("#pokemon").css("display" , "block")
            $("#pokemon").css("border" , `var(--${e.types[0].type.name}) solid 3px`)

            $("#name").css("color" , `var(--${e.types[0].type.name})`)
            $("#name").text(e.forms[0].name.toUpperCase())

            $("#sprite").attr("src" , e.sprites.front_default)

            $("#status").html("")
            $("#types").html("")

            e.types.forEach((t:any) => {

                $("#types").append(createType(t.type.name))

            })
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

    return `<div class="col stat">
    
        <h5>${nome}</h5>
        <p>${valor}</p>
    
    </div>`

}

function createType(type:string) {

    return `<p class="fs-3 btn mx-3 ${type}">${type}</p>`

}