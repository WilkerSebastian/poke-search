$("#pesquisa").on("click" , async ()=> {

    await fetch(`https://pokeapi.co/api/v2/pokemon/${$("#pokenome").val() as string}`)
    .then((res)=> {

        res.json().then((e) => {

            const img = new Image()
            img.src = e.sprites.back_default

            $("main").append(img)

            $("#resultado").text(`
            
                tipo: ${e.types[0].type.name}
            
            `)


        })
        .catch(err => {

            alert("erro: " + err)
    
        })

    })
    .catch(err => {

        alert("erro: " + err)

    })

})