$("#search-btn").click(function() {
    const cepInformado = $("#search-text").val();

    $.ajax({
        url: "https://viacep.com.br/ws/" + cepInformado + "/json",
        method: "GET",
        success: function(response) {
            $("#bairro").text("Bairro: " + response.bairro);
            $("#cep").text("Cep: " + response.cep);
            $("#complemento").text("Complemento: " + response.complemento);
            $("#ddd").text("ddd: " + response.ddd);
            $("#gia").text("gia: " + response.gia);
            $("#ibge").text("ibge: " + response.ibge);
            $("#localidade").text("Localidade: " + response.localidade);
            $("#logradouro").text("Logradouro: " + response.logradouro);
            $("#siafi").text("Siafi: " + response.siafi);
            $("#uf").text("Uf: " + response.uf);
        },
        error: function() {

        }
    })

    $("#result").css({
        "display": "block"
    })
})