function callme(){
var table = tableToJson($('#table-id').get(0));
var doc = new jsPDF('l','pt','letter',true);


$.each(table, function(i, row){
	$.each(row, function(j,cell){
	if(j=="email" | j==1){
	 doc.cell(1,10,190,20,cell,i);	
	}
	else{
		doc.cell(1,10,90,20,cell,i);
	}
	
	});
});

doc.save('htmltoPdf.pdf');
}