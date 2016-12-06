$(".card-image").click(function() {
	let modal = $(`<div class="modal is-active"><div class="modal-background"></div><div class="modal-content">${$(this).html() + $(this).parent().find(".card-content").html()}</div><button class="modal-close"></button></div>`);
	modal.appendTo("body").find(".modal-background, .modal-close").click(function() { $(this).parent().remove(); });
});