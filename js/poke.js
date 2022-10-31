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
            const img = new Image();
            img.src = e.sprites.back_default;
            $("main").append(img);
            $("#resultado").text(`
            
                tipo: ${e.types[0].type.name}
            
            `);
        })
            .catch(err => {
            alert("erro: " + err);
        });
    })
        .catch(err => {
        alert("erro: " + err);
    });
}));
