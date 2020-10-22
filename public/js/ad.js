$('#add-image').click(function(){
    // quand on clique sur boutton image dont avec inspection son id est add-image ,
      //  je voudrai rajouter le div qui s'appelle annonce_images en copiant dans le data-prototype 
    // Je récupère le numéro des futurs champs que je vais créer
    const index = +$('#widgets-counter').val();// pour que le champ soit dans l'ordre meme si on efface le champ suivant

    // Je récuepere le prototype des entrées
    const tmpl = $('#annonce_images').data('prototype').replace(/__name__/g, index); // fg = plusieurs fois on récupere le formulaire d'ajout d'image

    // j'injecte ce code au sein de la div
    $('#annonce_images').append(tmpl); //append c'est ajouter 

    $('#widgets-counter').val(index + 1);

    //Je gère le bouton supprimer
    handleDeleteButtons();
});

function handleDeleteButtons(){
    $('button[data-action="delete"]').click(function(){
        const target = this.dataset.target; // this correspond au boutton appuyer , dataset correspond a data-action=delete , target correspond au block id 
        $(target).remove();
    });
}

function updateCounter(){
    const count = +$('#annonce_images div.form-group').length;

    $('#widgets-counter').val(count);

}

updateCounter();
handleDeleteButtons();