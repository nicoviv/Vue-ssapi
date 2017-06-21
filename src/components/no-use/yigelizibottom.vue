<template>
    <yd-tabbar>
        <yd-tabbar-item title="首页" link="#">
            <yd-icon name="home-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="购物车" link="#" dot>
            <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="#" active>
            <yd-icon name="ucenter" slot="icon" size="0.54rem"></yd-icon>
            <yd-badge slot="badge" type="danger">2</yd-badge>
        </yd-tabbar-item>
    </yd-tabbar>
</template>
<style>
	.m-tabbar{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 2;
	}
</style>
<script type="text/babel">
    export default {
        
    }
</script>