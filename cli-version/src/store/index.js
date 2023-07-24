import { createStore } from 'vuex'


export default createStore({
  state: {
    shoppingCart: 0,
    restaurantName: 'Cafe with A Vue',
    simpleMenu: [
      {
        name: 'Crossiant',
        image: {
          source: '/images/crossiant.jpg',
          alt: 'A crossiant'
        },
        inStock: true,
        quantity: 1,
        price: 10
      },
      {
        name: 'French Baguette',
        image: {
          source: '/images/french-baguette.jpeg',
          alt: 'Four French Baguettes'
        },
        inStock: true,
        quantity: 1,
        price: 20
      },
      {
        name: 'Éclair',
        image: {
          source: '/images/eclair.jpg',
          alt: 'Chocolate Éclair'
        },
        inStock: false,
        quantity: 1,
        price: 30
      }
    ]

  },
  getters: {
    copyright: state => {
      const currentYear = new Date().getFullYear()

      return `Copyright ${state.restaurantName} ${currentYear}`
    } 
  },
  mutations: {
    ADD_ITEMS_TO_SHOPPINGCART(state, quantity) {
      state.shoppingCart += quantity
  }
  },
  actions: {
    updateShoppingCart({ commit }, amount) {
      commit('ADD_ITEMS_TO_SHOPPING_CART', amount)
    }  
  },
  modules: {
  }
})
