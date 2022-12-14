"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
$("#pesquisa").on("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch(`https://pokeapi.co/api/v2/pokemon/${$("#pokenome").val()}`)
        .then((res) => {
        res.json().then((e) => {
            $("#pokemon").css("display", "block");
            $("#pokemon").css("border", `var(--${e.types[0].type.name}) solid 3px`);
            $("#name").css("color", `var(--${e.types[0].type.name})`);
            $("#name").text(e.forms[0].name.toUpperCase());
            $("#sprite").attr("src", e.sprites.front_default);
            $("#status").html("");
            $("#types").html("");
            e.types.forEach((t) => {
                $("#types").append(createType(t.type.name));
            });
            e.stats.forEach((s) => {
                $("#status").append(createDiv(s.stat.name, s.base_stat));
            });
        })
            .catch(err => {
            alert("erro: " + err);
        });
    })
        .catch(err => {
        alert("erro: " + err);
    });
}));
function createDiv(nome, valor) {
    return `<div class="col stat">
    
        <h5>${nome}</h5>
        <p>${valor}</p>
    
    </div>`;
}
function createType(type) {
    return `<p class="fs-3 btn mx-3 ${type}">${type}</p>`;
}
