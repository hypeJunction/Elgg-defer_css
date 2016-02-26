<?php
$deferred = defer_css();
?>

<script>
	require(['defer'], function (defer) {
		return defer(<?php echo json_encode($deferred) ?>);
	});
</script>