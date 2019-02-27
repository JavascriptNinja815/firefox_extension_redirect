<script>
	window.addEventListener("message", function(event) {
		if (event.source == window &&
			event.data.direction &&
			event.data.direction == "from-content-script") {
				window.location.href = "https://developer.mozilla.org"
			}
		});
</script>

