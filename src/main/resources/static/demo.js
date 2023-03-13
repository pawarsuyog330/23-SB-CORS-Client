$(document).ready(function() {
	$.ajax({
		url: "http://localhost:2022/api/hotel/1/room/1001"
		}).then(function(data,status,xhr) {
			
		var  obj = JSON.parse(JSON.stringify(data))
				
		$("#id1").html(obj.id)
		$("#id2").html(obj.displayName)
		$("#id3").html(obj.quantity)
		$("#id4").html(obj.price)
	});
});