function popupSlide(imgHtml)
{
    html =  '<div id="modalWindow" class="modal fade">';
    html += '<div class="modal-dialog" id="img-viewer-model-dialog">';
	html += '<div class="modal-content">';
    html += '<div class="modal-body">';
    html += imgHtml;
    html += '</div>';	// model-body
    html += '</div>';	// model-content
    html += '</div>';	// model-dialog
    html += '</div>';	// modalWindow
    $("#popupSlide").html(html);
    $("#popupSlide").removeClass('hide')
    $("#modalWindow").modal();
}


function hideSlide()
{
    // Using a very general selector - this is because $('#modalDiv').hide
    // will remove the modal window but not the mask
    $('.modal.in').modal('hide');
}

$(function () {
	$("#carousel-slides > .carousel-inner > .item").click(function(){
		$("#popupSlide").addClass('hide').html($(this).html());
		$("#popupSlide > img").attr("width", "100%");
		popupSlide($("#popupSlide").html());
		
// 		var html = '<div id="carousel-slides" class="carousel slide" data-ride="carousel">'
// 		html += $("#carousel-slides").html();
// 		html += '</div>';
// 		
// 		html = html.replace(new RegExp('carousel-slides', 'g'), 'carousel-slides-plus');
// 		
// 		popupSlide(html);
	});
	
	$("#popupSlide").on("click", "img", function(){
		hideSlide();
	});
});