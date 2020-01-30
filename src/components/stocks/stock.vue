<template>
    <b-card header-tag="header" footer-tag="footer" :class="borderStyle">
        <template v-slot:header>
            <slot name="header" />
        </template>
        <b-form-input type="number" placeholder="0" v-model.number="quantity"/>
        <br>
        <slot name="selection" :buy="buyStock" :sell="sellStock"/>
    </b-card>
</template>

<script>
    export default {
        name: "stock",
        props: ['borderStyle', 'stock'],
        data: () => ({
            quantity: 0
        }),
        methods: {
            buyStock() {
                // retrieve and log order
                const order = this.getOrder();
                this.$log.debug('buy: ', this.stock.name, order);

                // dispatch buy stock
                this.$store.dispatch('stocks/buyStock', order);

                // set defaults
                this.setDefaults();
            },
            sellStock() {
                // retrieve and log order
                const order = this.getOrder();
                this.$log.debug('sell: ', this.stock.name, order);

                // dispatch sell order
                this.$store.dispatch('stocks/sellStock', order);

                // set defaults
                this.setDefaults();
            },
            getOrder() {
                return {
                    stockId: this.stock.id,
                    stockPrice: parseInt(this.stock.price),
                    quantity: this.quantity
                }
            },
            setDefaults() {
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>

</style>