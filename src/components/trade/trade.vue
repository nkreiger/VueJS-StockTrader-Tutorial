<template>
    <b-row class="text-center">
        <b-col cols="4">
            <!-- props border-style and stock -->
            <stock>
                <template v-slot:header>
                    <!-- stock name and price -->
                    <!-- <h6 class="mb-0">John Smith</h6> -->
                </template>
                <template v-slot:selection="{ buy }">
                    <!-- add success buy button @click="buy" -->
                    <!--<b-button>Click</b-button> -->
                </template>
            </stock>
        </b-col>
    </b-row>
</template>

<script>
    import stock from '@/features/stocks/stock.vue';

    export default {
        name: "stocks",
        data: () => ({
            content: {
                stocks: [],
                borderStyle: 'border-success'
            },
            init: {

            }
        }),
        components: {
            stock
        },
        created() {
            // load trade-able stocks
            // assign content.stocks to stocks/getStocks
        }
    }
</script>

<style scoped>

</style>