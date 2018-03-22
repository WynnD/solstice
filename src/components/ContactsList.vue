<template>
  <div>
    <div id="contact-list" v-if="dataReady">

      <div v-if="favoritedContacts.length > 0" class="ui compact top attached segment category">
        <h1 class="ui sub header aligned left">Favorite Contacts</h1>
      </div>
      <contacts-list-item v-for="contact in sortedFavoritedContacts"
        :key="contact.id"
        :contact="contact"/>

      <div class="ui attached segment compact category">
        <h1 class="ui sub header aligned left">Other Contacts</h1>
      </div>
      <contacts-list-item v-for="contact in sortedNonFavoritedContacts"
        :key="contact.id"
        :contact="contact"/>
    </div>

    <div v-else class="ui active dimmer">
      <div class="ui loader"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ContactsListItem from '@/components/ContactsListItem'

export default {
  components: {
    'contacts-list-item': ContactsListItem
  },
  computed: {
    dataReady () {
      return !(Object.keys(this.contacts).length === 0 && this.contacts.constructor === Object)
    },
    sortedFavoritedContacts () {
      let favorites = this.$store.getters.favoritedContacts
      return this.sortContactsByName(favorites)
    },
    sortedNonFavoritedContacts () {
      let nonFavorites = this.$store.getters.nonFavoritedContacts
      return this.sortContactsByName(nonFavorites)
    },
    ...mapState(['contacts']),
    ...mapGetters(['favoritedContacts', 'nonFavoritedContacts'])
  },
  methods: {
    sortContactsByName (contacts) {
      contacts = Object.values(contacts)
      contacts.sort((a, b) => {
        let nameA = a.name.toUpperCase()
        let nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return -1
        } else if (nameA > nameB) {
          return 1
        } else {
          return 0
        }
      })
      return contacts
    }
  }
}
</script>

<style scoped>
#contact-list {
  margin-top: 0;
  background-color: white;
}

.category.segment {
  background-color: #DDD;
}

.category.segment .sub.header {
  color: #444;
}

.category {
  padding-top: 3px;
  padding-bottom: 0;
}
</style>
