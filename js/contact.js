
$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})

function validEnvoi() {
    if (window.document.querySelector("#nom").value === "" &&
            window.document.querySelector("#prenom").value === "") {
        alert("Le nom ou le prénom doivent être remplis"); // On affiche un message
    } 
    else if (window.document.querySelector("#message").value === "") {
        alert("La partie Message n'est pas rempli"); // On affiche un message
    }
    else if (window.document.querySelector("#email").value === "") {
        alert("L'email doit être complété"); // On affiche un message
    }
    else {
        let question = "Souhaitez-vous réellement utiliser l'adresse suivante : "
                + window.document.querySelector("#email").value;
        if (confirm(question)) {
            window.document.querySelector("#form-contact").submit(); // OK envoyer
        }
    }
}

window.addEventListener("load", function () {
    window.document.querySelector("#envoyer").addEventListener("click", validEnvoi);
});
 