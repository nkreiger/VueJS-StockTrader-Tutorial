import Vue from 'vue';
import Vuex from 'vuex';

// modules
import stocks from '@/store/modules/stocks';
import portfolio from '@/store/modules/portfolio';

// debugging
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        portfolio
    },
    plugins: (process.env.NODE_ENV !== 'production') ? [createLogger()] : []
})
