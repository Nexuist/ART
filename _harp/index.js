$(".card-image").click(function() {
	let modal = $(`<div class="modal is-active"><div class="modal-background"><div class="modal-content">${$(this).html()}</div><div class="modal-close"></div></div></div>`);
	modal.appendTo("body").find(".modal-background").click(function() { $(this).parent().remove(); });
});