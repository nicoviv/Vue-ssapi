<template>
	<transition name="fade">
		<div class="propup" v-if="show" @click="showState">

		</div>
	</transition>
</template>

<style scoped>
.propup{
	top: 0;
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 99;
	background: rgba(0,0,0,0.5);
}

.fade-enter{
	/*进入开始*/
	opacity: 0;
}

.fade-enter-active,.fade-leave-active{
	/*进入结束*/
	transition: all 1s;
}

.fade-leave-active{
	/*离开结束*/
	opacity: 0;
}
</style>

<script>
	export default {

		methods:{
			showState(){
				this.$store.commit('changeState');
			}
		},
		computed: {
			show(){
				return this.$store.state.showState;
			}
		}
	}
</script>
