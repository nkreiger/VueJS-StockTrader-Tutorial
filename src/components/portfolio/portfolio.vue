<template>
    <b-row class="text-center">
        <b-col cols="4" v-for="(stock, index) in content.stocks" :key="index" style="margin-bottom: 20px">
            <stock :border-style="content.borderStyle" :stock="stock">
                <template v-slot:header>
                    <h6 class="mb-0">{{ stock.name }} (Price: {{ stock.price | currency }} Quantity: {{ stock.quantity }})</h6>
                </template>
                <template v-slot:selection="{ sell }">
                    <b-button variant="danger" style="float: left;" @click="sell">Sell</b-button>
                </template>
            </stock>
        </b-col>
    </b-row>
</template>

<script>
    import stock from '@/components/stocks/stock.vue';

    export default {
        name: "portfolio-main",
        data: () => ({
            content: {
                stocks: [],
                borderStyle: 'border-danger'
            }
        }),
        components: {
            stock
        },
        created() {
            this.content.stocks = this.$store.getters['portfolio/getStockPortfolio'];
            this.$log.debug('Portfolio: ', this.stocks);
        }
    }
</script>

<style scoped>

</style>