<template>
    <nav class="page-nav-container web3">
        <button id="page-nav-1-1" class="page-nav-btn" @click="slide('next', 'first', $event)"></button>
        <button id="page-nav-1-2" v-show="showSecondNavBtn" class="page-nav-btn"
            @click="slide('next', 'second', $event)"></button>
        <button id="page-nav-1-3" v-show="showThirdNavBtn" class="page-nav-btn"
            @click="slide('next', 'third', $event)"></button>
    </nav>
</template>
<script>
export default {
    props: {
        slide: Function,
        hoveredLayer: String,
    },
    computed: {
        showSecondNavBtn() {
            // console.log('this.props.hoveredLayer :>> ', this.props);
            // return ['web3', 'ecommerce', 'elearning'].includes(this.props.hoveredLayer);
        },
        showThirdNavBtn() {
            return this.$parent.$refs.hoveredLayer == 'web3';
        },
    }
}
</script>