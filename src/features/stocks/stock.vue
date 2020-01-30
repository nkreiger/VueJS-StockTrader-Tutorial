<template>
    <b-card header-tag="header" footer-tag="footer" :class="borderStyle">
        <template v-slot:header>
            <slot name="header">
                <h6 class="mb-0">Default Header</h6>
            </slot>
        </template>
        <!-- 2 way bind.number quantity -->
        <b-form-input type="number" placeholder="0"/>
        <br>
        <slot name="selection" :buy="buyStock" :sell="sellStock">
            <b-button>Default Button</b-button>
        </slot>
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

                // dispatch stocks/buyStock

                // set defaults
                this.setDefaults();
            },
            sellStock() {
                // retrieve and log order
                const order = this.getOrder();
                this.$log.debug('sell: ', this.stock.name, order);

                // dispatch stocks/sellStock

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