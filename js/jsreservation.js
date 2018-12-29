$(document).ready(function () {

    var value1=-1;
    $("#nbpe").click(function(){
            $( "#chaisese" ).empty();
            var value = $('#nbpe').find(":selected").val();
                var image = "<img src='img/chaise.jpg'/>";
    
            for (var i = 0 ; i < value ; i++) {
                $("#chaisese").append(image);
            }
        value1 = value;
            
    });
    
 
          var d;       
          $('#datee').Zebra_DatePicker({format: 'd/m/Y',onSelect: function() { 
                  var	dt =$(this).context.value;
                  d=dt;
                }});
    
    
    $("#b1").click(function(){
        $( "#div_resume" ).removeClass('success-msg')
          if (value1 === -1) {
          alert('saisir nombre des places')}else{
            var h;
            if ($('input[name="toggle_option"]').is(':checked')){
            var x = $("input[name=toggle_option]:checked").each(
                function() {
                  var v = $(this).val();
                  if (v==="mme") { v="Madamme";}
                  else if (v==="mlle"){ v="Mademoiselle";}
                  else if (v==="m"){ v="Monsieur";}
                  console.log(v);
                  h=v;
              });
            
            
            var nom = $('#nom').val();
            var n = nom.length;
            if(n<10 || isNaN(nom)===false){
             alert('nom et prenom tres court');
             
            }else{
    
              var validetel = /\d{8}$/;
              var tel = $('#tel').val();
              if(validetel.test(tel) === false){
              alert('numero de tel invalide');
              var accom =$('#accompagnateurs').val(); 
              }else{
    
                   $( "#div_resume" ).empty();
                   

                   var large = ' Bonjour '+h+ ' '+nom+
                   'votre commande du '+d+' a bien ete validee les plats commandes sont '


                   $( "#div_resume" ).addClass('success-msg');

                   $( "#div_resume" ).append(large);
                   
                   


















                   var prix = 0;
                   var man;
                   var x = $("input[name=cmd]:checked").each(
                   function() {
                               var p = $(this).data('prix');
                               prix=prix+parseFloat(p);
                               px=prix;
                               var dt =$(this).context.value;
                               man=dt;
                               
                   var large1 = ' '+man+' ';

            
                                $("#div_resume").append(large1);
            
                              });
                              var large2 = ' le montant total de la commande est de '+px+'DT'
                              $("#div_resume").append(large2);
    
            
            
    
            }}}else alert('la civilite est obligatoire');
            }
                    
    });
    
    });
    