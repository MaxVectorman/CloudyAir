$(function() {
	    $( "#slider-range--cold" ).slider({
	      // orientation: "vertical",
	      // step: 15,
	      range: true,
	      min: 0,
	      max: 300000,
	      values: [ 15000, 260000 ],
	      slide: function( event, ui ) {
	        $( "#amount--cold" ).val( ui.values[ 0 ] );
	        $( "#amount_1--cold" ).val( ui.values[ 1 ] );
	      }
	    });
	    $( "#amount--cold" ).val( $( "#slider-range--cold" ).slider( "values--cold", 0 ) );
	    $( "#amount_1--cold" ).val( $( "#slider-range--cold" ).slider( "values--cold", 1 ) );

	    // Изменение местоположения ползунка при вводиде данных в первый элемент input
		  $("input#amount--cold").change(function(){
		  	var value1=$("input#amount--cold").val();
		  	var value2=$("input#amount_1--cold").val();
		      if(parseInt(value1) > parseInt(value2)){
		  		value1 = value2;
		  		$("input#amount--cold").val(value1);
		  	}
		  	$("#slider-range--cold").slider("values--cold",0,value1);	
		  });
		      
		  // Изменение местоположения ползунка при вводиде данных в второй элемент input 	
		  $("input#amount_1--cold").change(function(){
		  	var value1=$("input#amount--cold").val();
		  	var value2=$("input#amount_1--cold").val();

		  	if(parseInt(value1) > parseInt(value2)){
		  		value2 = value1;
		  		$("input#amount_1--cold").val(value2);
		  	}
		  	$("#slider-range--cold").slider("values--cold",1,value2);
		  });

		  // фильтрация ввода в поля
			jQuery('#amount--cold, #amount_1--cold').keypress(function(event){
				var key, keyChar;
				if(!event) var event = window.event;
				
				if (event.keyCode) key = event.keyCode;
				else if(event.which) key = event.which;
			
				if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
				keyChar=String.fromCharCode(key);
				
				if(!/\d/.test(keyChar))	return false;
			
			});

	  });