//const initData = require('@/inputs/data');

const state = {
    stocks: []
}

const getters = {
    getStocks(state) {
        return state.stocks;
    }
}

const mutations = {
    initStocks(state, payload) {
        state.stocks = payload;
    },
    randStocks(state) {
        // point out why the state changes
        state.stocks.forEach((el) => {
            el.price = Math.round(el.price * (1 + Math.random() - 0.5));
        });
    }
}

const actions = {
    /**
     * Assigns state to initial stocks loaded from data.json file
     * @param commit: state
     */

    //TODO: Write INIT Stocks

    /**
     *
     * @param commit: state
     * @param payload: stock { id: string, name: string, quantity: number }
     */

    //TODO: Write BuyStocks

    /**
     *
     * @param commit: state
     * @param payload: stock { id: string, name: string, quantity: number }
     */
    sellStock({ commit }, payload) {
        // buy stock
        commit('portfolio/sellStock', payload, { root: true });
    },
    /**
     *
     * @param commit: state
     */
    endDay({ commit }) {
        commit('randStocks');
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}


// write init stocks
// write buy stocks