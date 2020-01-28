const initData = require('@/inputs/data');

const state = {
    stocks: []
}

const getters = {
    getStocks(state) {
        return state.stocks;
    },
    test() {
        return 'success';
    }
}

const mutations = {
    initStocks(state, payload) {
        state.stocks = payload;
    }
}

const actions = {
    /**
     * Assigns state to initial stocks loaded from data.json file
     * @param commit: state
     */
    initStocks({ commit }) {
        commit('initStocks', initData);
    },
    /**
     *
     * @param commit: state
     * @param payload: stock { id: string, name: string, quantity: number }
     */
    buyStock({ commit }, payload) {
        // buy stock
        commit('portfolio/buyStock', payload, { root: true });
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}