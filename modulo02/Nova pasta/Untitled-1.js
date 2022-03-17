$(document).ready(function() {
  $('#cepOutput').on("click", () => {
    let cep = $('#cepInput').val();
    if (cep != "") {
      $.ajax({
          url: "https://cep.awesomeapi.com.br/json/" + cep
        })
        .done((data) => {
          $('#street').html("Logradouro: " + data.address_type + " " + data.address_name);
          $('#district').html("Bairro: " + data.district);
          $('#city').html("Cidade: " + data.city + "/" + data.state);
          $('#lat').html("Lat.: " + data.lat);
          $('#long').html("Long.: " + data.lng);
          $('#zipcode').html("CEP: " + data.cep);
          mapaApi(data);
        }).fail(() => {
          alert("CEP INVÁLIDO");
        });
    } else {
      return alert("CAMPO VÁZIO, DIGITAR O CEP");
    }
  });

  function mapaApi(data) {
    const urlmap = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d528.5467790691869!2d${data.lng}!3d${data.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1644446601650!5m2!1sen!2sbr`;
    $('iframe').attr('src', urlmap);
  }
});