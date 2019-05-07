$(function(){
	$(".link-modal-iframe").live("click", function(){
            $.colorbox({iframe:true, innerHeight:450, innerWidth:600, href:$(this).attr("href")});
            return false;
        });
        $(".smoothScroll").click(function(){
             $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top-10 });
             return false;
        });
        $(document).on("click", ".spin-add", function(){
              var input = $(this).siblings("input");
              if(!input.prop("disabled")){
                  input.val(parseInt(input.val())+1).trigger("change").trigger("onkeyup");
              }
              return false;
        });

        $(document).on("click", ".spin-remove", function(){
            var input = $(this).siblings("input");
            if(!input.prop("disabled")){
                var qtd = parseInt(input.val())-1;
                if(qtd<1){
                    qtd = 1;
                }
                input.val(qtd).trigger("change").trigger("onkeyup");
            }
            return false;
        });
})

// CÓDIGO PARA VALIDAR QUANTIDADE DE ITENS POR PRODUTO NO CARRINHO

  Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequest);
  function EndRequest(sender, args)
        {
            if (args.get_error() == undefined) {
                BindEvents();
            }
        }

function BindEvents(){
  $(document).ready(function(){
        $('.btFakeCart').click(function(){
            validaQuantidade();
        });

        function validaQuantidade(){
             podeComprar = true;
              $.ajax({
                dataType: "json",
                url: "http://www.circuit.com.br/public_api/v1/carts",
                success: $.proxy(function(results){
                   $.each(results.items, function(index,value){
                      console.log(value.quantity);
                      if(value.quantity > 5){
                          podeComprar = false;
                      }
                  })
                })
              }).done(function(event){
                  if(podeComprar == false){
                      console.log('erro')
                      $.colorbox({width:"30%", inline:true, href:"#messageQtdDenied"});
                  }else{
                      console.log('quantidades corretas');
                      javascript:if(typeof validarPrePost == 'function'){if(validarPrePost()){AjaxRequestDispatcher('pnlCarrinho_cart|btnCarrinhoContinuar');}}else{AjaxRequestDispatcher('pnlCarrinho_cart|btnCarrinhoContinuar');}
                  }
                })
        }
  })

}
  BindEvents();
