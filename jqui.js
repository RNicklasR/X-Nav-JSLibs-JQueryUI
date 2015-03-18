$(document).ready(function() {
	reg = /src=\".+\.png\"/; 
 	var date= $( "#datepicker" ).datepicker().hide();
	var dateshow = false;


	$( "#date" ).button({
		text: false,
	}).click(function() {
		if (!dateshow){
			date.show();
			dateshow = true;
		}else{
			date.hide();
			dateshow = false;
		}
	});
	$( "#tabs" ).tabs();


	$( "#droppable1" ).droppable({
		drop: function( event, ui) {
			ui.draggable.hide();
  		 var matches = ui.draggable[0].outerHTML.match(reg);
 
	   	$("#fragment-1").append("<img " + matches + " class=\"draggable\"></img>");
	  }
	});

 	$( "#droppable2" ).droppable({
		drop: function( event, ui) {
			ui.draggable.hide();
  		 var matches = ui.draggable[0].outerHTML.match(reg);
 //"<img class=\"draggable ui-draggable ui-draggable-handle\"" + matches + "style=\"position: relative;\">"
	   	$("#fragment-2").append("<img " + matches + " class=\"draggable\"></img>");
	  }
	});	

	$( "#droppable3" ).droppable({
		drop: function( event, ui) {
			ui.draggable.hide();
  		 var matches = ui.draggable[0].outerHTML.match(reg);
 
	   	$("#fragment-3").append("<img " + matches + " class=\"draggable\"></img>");
	  }
	});
 	$(function() {
		$('.draggable').draggable();
	});
});
