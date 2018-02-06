<template>
	<div class="msg">
		{{msg}}
	</div>
</template>

<style>
	.msg {
		color: #f00;
	}
</style>

<script>
	export default {
		data() {
			return {
				msg: 'hello world'
			}
		}
	}
</script>