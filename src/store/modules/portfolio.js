const state = {
    funds: 10000,
    stocks: [],
    archive: {
        stocks: [],
        stockData: [],
        funds: 10000
    }
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
            /* eslint-disable no-console */
            console.log('update stock portfolio');
            const currentStock = {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: (stock.price) ? stock.price : record.price,
                record_price: record.price
            };
            // clear stock price
            if (stock.price) delete stock.price

            return currentStock;
        });
    }
}

const mutations = {
    buyStock(state, {stockId, quantity, stockPrice}) {
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
    },
    sellStock(state, {stockId, quantity, stockPrice}) {
        // check if stock exists
        const record = state.stocks.find(el => el.id === stockId);

        // change stock state and add funds
        let quantAdd;
        let temp = record.quantity - quantity;

        if (Math.sign(temp) === 1) {
            quantAdd = quantity;
            record.quantity -= quantity;
        } else {
            quantAdd = record.quantity;
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }

        // add funds
        state.funds += stockPrice * quantAdd;
    },
    archiveData(state, stockData) {
        // clear current archive
        state.archive.stocks = [];
        state.archive.stockData = stockData;
        state.stocks.forEach((stock) => {
            // get record of stock
            const record = stockData.find(el => el.id === stock.id);

            // add to archive
            state.archive.stocks.push({
                arch_id: stock.id,
                arch_quantity: stock.quantity,
                arch_price: record.price
            });
        })
    },
    loadStocks(state, initial) {
        state.stocks = initial;
        state.archive.stocks.forEach((el) => {
            state.stocks.push({
                id: el.arch_id,
                quantity: el.arch_quantity,
                price: el.arch_price
            })
        })
    }
}


const actions = {
    saveData({ commit }, payload) {
        commit('archiveData', payload);
    },
    loadData({ commit }) {
        commit('loadStocks', []);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}