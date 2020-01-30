<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-brand to="/">
                <!-- load up icon -->
            </b-navbar-brand>

            <!-- funds -->
            <div style="font-size: 1.5rem;">
                <!-- display fund text and amount -->
            </div>


            <b-navbar-toggle target="nav-collapse"/>
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
                        <b-dropdown variant="outline-dark" text="Actions" right>
                            <b-dropdown-item @click="handleActions('save')">
                                Save
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
                links: [
                    {
                        text: 'Home',
                        to: '/',
                        style: 'btn btn-outline-primary'
                    },
                    {
                        text: 'Trade',
                        to: '/trade',
                        style: 'btn btn-outline-danger'
                    },
                    {
                        text: 'Portfolio',
                        to: '/portfolio',
                        style: 'btn btn-outline-primary'
                    }
                ],
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
                //return this.$store.getters['portfolio/getFunds'];
                return 1
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
                // dispatch stocks/endDay
            },
            save() {
                // get stocks/getStocks
                // dispatch portfolio/saveData
            },
            load() {
                // dispatch loadData
            }
        }
    }
</script>