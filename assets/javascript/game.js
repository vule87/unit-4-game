$(document).ready(function () {

	var required = Math.floor(Math.random() * 102) + 19;
	$("#required").html(required);

	var potion1 = Math.floor(Math.random() * 12) + 1;
	$("#obj1").attr("value", potion1)
	console.log(potion1)

	var potion2 = Math.floor(Math.random() * 12) + 1;
	$("#obj2").attr("value", potion2)
	console.log(potion2)

	var potion3 = Math.floor(Math.random() * 12) + 1;
	$("#obj3").attr("value", potion3)
	console.log(potion3)

	var potion4 = Math.floor(Math.random() * 12) + 1;
	$("#obj4").attr("value", potion4)
	console.log(potion4)

	var demons = 0;

	var djts = 0;

	var score = 0;

	function reset() {
		var required = Math.floor(Math.random() * 102) + 19;
		$("#required").html(required);

		score = 0;
		$("#player").html(score);


		var potion1 = Math.floor(Math.random() * 12) + 1;
		$("#obj1").attr("value", potion1)
		console.log(potion1)

		var potion2 = Math.floor(Math.random() * 12) + 1;
		$("#obj2").attr("value", potion2)
		console.log(potion2)

		var potion3 = Math.floor(Math.random() * 12) + 1;
		$("#obj3").attr("value", potion3)
		console.log(potion3)

		var potion4 = Math.floor(Math.random() * 12) + 1;
		$("#obj4").attr("value", potion4)
		console.log(potion4)

		
		$("img").on("click", function () {
			var total = score += parseInt($(this).attr("value"));
			$("#player").html(total);

			if (total === required) {
				demons++;
				$("#demon").html(demons);
				reset();
			}

			else if (total > required) {
				djts++;
				$("#djt").html(djts);
				reset();
			}
		});
	}

	$("img").on("click", function () {
		var total = score += parseInt($(this).attr("value"));
		$("#player").html(total);

		if (total === required) {
			demons++;
			$("#demon").html(demons);
			reset();
		}

		else if (total > required) {
			djts++;
			$("#djt").html(djts);
			reset();
		}
	});
});


