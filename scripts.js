let tPrato, tBebida, tSobremesa;
let preçoPrato, preçoBebida, preçoSobremesa;
let total;

function selecionarComida(pratoClicado, seletorPrato) {
    //.pratos .selecionado é seletor hierárquico
    const prato_selecionado = document.querySelector(".pratos .selecionado");
  
    if (prato_selecionado !== null) {
      prato_selecionado.classList.remove("selecionado");
    }
  
    pratoClicado.classList.add("selecionado");
  
    const elementoTítulo = document.querySelector(seletorPrato + " .título");
    const elementoPreço = document.querySelector(seletorPrato + " .preços_comidas");

    tPrato = elementoTítulo.innerHTML;
    preçoPrato = elementoPreço.innerHTML; 

    // console.log(seletorPrato + ' .título');

    ativaBotãoFecharPedido()
  }
  
  function selecionarBebida(bebidaClicada, seletorBebida) {
    const bebida_selecionada = document.querySelector(".bebidas .selecionado");
  
    if (bebida_selecionada !== null) {
      bebida_selecionada.classList.remove("selecionado");
    }
  
    bebidaClicada.classList.add("selecionado");
  
    const elementoTítulo = document.querySelector(seletorBebida + " .título");
    const elementoPreço = document.querySelector(seletorBebida + " .preços_bebidas");

    tBebida = elementoTítulo.innerHTML;
    preçoBebida =  elementoPreço.innerHTML; 

    //console.log(seletorBebida + ' .título');

    ativaBotãoFecharPedido()
  }
  
  function selecionarSobremesa(sobremesaClicada, seletorSobremesa) {
    const sobremesa_selecionada = document.querySelector(".sobremesas .selecionado");
  
    if (sobremesa_selecionada !== null) {
      sobremesa_selecionada.classList.remove("selecionado");
    }
  
    sobremesaClicada.classList.add("selecionado");
  
    const elementoTítulo = document.querySelector(seletorSobremesa + " .título");
    const elementoPreço = document.querySelector(seletorSobremesa + " .preços_bebidas");

    tSobremesa = elementoTítulo.innerHTML;
    preçoSobremesa = elementoPreço.innerHTML; 
    //console.log(seletorSobremesa + ' .título');

    ativaBotãoFecharPedido()
  }
  
function ativaBotãoFecharPedido() {
  console.log(tPrato);
  console.log(tBebida);
  console.log(tSobremesa);

  if (tPrato !== undefined) {
    if (tBebida !== undefined) {
      if (tSobremesa !== undefined) {
        alert('pode ativar o botão');

        const botao = document.querySelector('.botão_fechar');

        botao.classList.add('ativo');

        botao.innerHTML = 'Fechar Pedido';
      }
    }
  }
}

function fecharPedido() {
  preçoPrato = preçoPrato.replace('R$ ' , '');
  preçoBebida = preçoBebida.replace('R$ ' , '');
  preçoSobremesa = preçoSobremesa.replace('R$ ' , '');

  preçoPrato = preçoPrato.replace(',' , '.');
  preçoBebida = preçoBebida.replace(',' , '.');
  preçoSobremesa = preçoSobremesa.replace(',' , '.');

  total = Number(preçoPrato) + Number(preçoBebida) + Number(preçoSobremesa);
  
  let msg = `Olá, gostaria de fazer o pedido:
  - Prato: ${tPrato}
  - Bebida: ${tBebida}
  - Sobremesa: ${tSobremesa}
  Total: R$ ${total.toFixed(2)}`;

  console.log(msg);

  const msgWP = encodeURI(msg);

  window.open(`http://wa.me/5521979123547?text=${msgWP}`);
}