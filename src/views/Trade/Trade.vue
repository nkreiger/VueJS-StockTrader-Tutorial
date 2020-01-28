<template>
    <b-container>
        <app-stocks/>
    </b-container>
</template>

<script>
    import stocks from '@/components/stocks/stocks.vue';

    export default {
        name: "trade",
        components: {
            appStocks: stocks
        }
    }
</script>

<style scoped>

</style>