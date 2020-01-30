<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-brand to="/">
                <icon-stockmrkt :max-width="brandMaxWidth"/>
            </b-navbar-brand>

            <!-- funds -->
            <div style="font-size: 1.5rem; margin-left: 10px; margin: auto;">
                {{ content.funds.text }}: {{ amount | currency }}
            </div>


            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <!-- everything inside collapses on toggleable screen size specified -->
            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item>
                        <router-link to="/" type="button" active-class="active" class="btn btn-outline-primary" exact>
                            Home
                        </router-link>
                    </b-nav-item>

                    <b-nav-item>
                        <router-link to="/portfolio" type="button" active-class="active" class="btn btn-outline-success"
                                     exact>
                            Portfolio
                        </router-link>
                    </b-nav-item>

                    <b-nav-item>
                        <router-link to="/trade" type="button" active-class="active" class="btn btn-outline-danger"
                                     exact>
                            Trade
                        </router-link>
                    </b-nav-item>

                    <b-nav-item>
                        <b-dropdown variant="outline-dark" text="Actions" right>
                            <b-dropdown-item v-for="(action, index) in content.actions" :key="index"
                                             @click="handleActions(action.action)">{{ action.text }}
                            </b-dropdown-item>
                        </b-dropdown>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "navbar-basic",
        data: () => ({
            content: {
                title: 'Stock Trader',
                funds: {
                    text: 'Funds'
                },
                actions: [
                    {
                        text: 'End Day',
                        action: 'end'
                    },
                    {
                        text: 'Save Data',
                        action: 'save'
                    },
                    {
                        text: 'Load Data',
                        action: 'load'
                    }
                ]
            },
            brandMaxWidth: '75%'
        }),
        computed: {
            amount() {
                return this.$store.getters['portfolio/getFunds'];
            }
        },
        methods: {
            handleActions(action) {
                this.$log.debug('perform: ' + action);
                switch(action) {
                    case 'end':
                        this.end();
                        break;
                     case 'save':
                         this.save();
                         break;
                     case 'load':
                         this.load();
                         break;
                }
            },
            end() {
                this.$store.dispatch('stocks/endDay');
            },
            save() {
                let stockData = this.$store.getters['stocks/getStocks'];
                this.$store.dispatch('portfolio/saveData', stockData);
            },
            load() {
                this.$store.dispatch('portfolio/loadData');
            }
        }
    }
</script>

<style scoped>

</style>