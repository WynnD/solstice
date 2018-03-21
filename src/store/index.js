import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  contacts: {}
}

let getters = {
  isFavorite: (state) => (id) => {
    return (state.contacts[id] !== undefined) && state.contacts[id].favorite
  },
  contactById: (state) => (id) => {
    return state.contacts[id]
  },
  favoritedContacts: (state) => Object.values(state.contacts).filter(contact => contact.favorite),
  nonFavoritedContacts: (state) => Object.values(state.contacts).filter(contact => !contact.favorite)
}

let mutations = {
  addContact (state, contact) {
    contact.favorite = false
    Vue.set(state.contacts, contact.id, contact)
    console.log('Added contact with id', contact.id)
  },
  toggleFavorite (state, id) {
    state.contacts[id].favorite = !state.contacts[id].favorite
  }
}

let actions = {
  // put
  getContactList (context) {
    Vue.http
      .get('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
      .then(
        resp => {
          resp.body.forEach(contact => {
            context.commit('addContact', contact)
          })
        },
        err => {
          console.log(err)
        })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
