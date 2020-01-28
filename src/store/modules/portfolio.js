const state = {
    funds: 10000,
    stocks: []
}

const getters = {
    getFunds(state) {
        return state.funds;
    },
    // must import everything for rootGetters to work
    getStockPortfolio(state, getters, rootState, rootGetters) {
        // map through stocks and alter them into portfolio form
        return state.stocks.map(stock => {
            // get record of stock
            const record = rootGetters['stocks/getStocks'].find(el => el.id === stock.id);

            const currentStock = {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            };
            return currentStock;
        });
    }
}

const mutations = {
    buyStock(state, { stockId, quantity, stockPrice }) {
        // check if stock already exists
        const record = state.stocks.find(el => el.id === stockId)

        // add stock details to state
        if (record) record.quantity += quantity;
        if (!record) {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }

        // update funds
        state.funds -= (quantity * stockPrice);
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}