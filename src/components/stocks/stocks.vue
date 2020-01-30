<template>
    <b-row class="text-center">
        <b-col cols="4" v-for="(stock, index) in content.stocks" :key="index" style="margin-bottom: 20px">
            <stock :border-style="content.borderStyle" :stock="stock">
                <template v-slot:header>
                    <h6 class="mb-0">{{ stock.name }} (Price: {{ stock.price | currency }})</h6>
                </template>
                <template v-slot:selection="{ buy }">
                    <b-button variant="success" style="float: left;" @click="buy">Buy</b-button>
                </template>
            </stock>
        </b-col>
    </b-row>
</template>

<script>
    import stock from '@/components/stocks/stock.vue';

    export default {
        name: "stocks",
        data: () => ({
            content: {
                stocks: [],
                borderStyle: 'border-success'
            }
        }),
        components: {
            stock
        },
        created() {
            // load trade-able stocks
            this.content.stocks = this.$store.getters['stocks/getStocks'];
        }
    }
</script>

<style scoped>

</style>