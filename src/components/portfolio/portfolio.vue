<template>
    <b-row class="text-center">
        <b-col cols="4" v-for="(stock, index) in stocks" :key="index" style="margin-bottom: 20px">
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
    import stock from '@/features/stocks/stock.vue';

    export default {
        name: "portfolio-main",
        data: () => ({
            content: {
                borderStyle: 'border-danger'
            }
        }),
        computed: {
            stocks() {
                return this.$store.getters['portfolio/getStockPortfolio'];
            }
        },
        components: {
            stock
        },
        created() {
            this.$log.debug('Portfolio: ', this.stocks);
        }
    }
</script>

<style scoped>

</style>