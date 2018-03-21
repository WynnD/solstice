<template>
  <div id="contact-list" class="ui segments" v-if="dataReady">
    <div class="ui segment">
      <div class="sub header">Favorited</div>
    </div>
    <router-link v-for="contact in favoritedContacts"
      :key="contact.id"
      :to="{path:'/contact/'+contact.id}">
      <div class="ui padded segment grid">
        <div class="ui six wide column">
          <img class="ui small image" :src="contact.smallImageURL" @error="setDefaultImage(contact.id)"/>
        </div>
        <div class="ui one wide column">
          <i v-if="contact.favorite" class="star icon"></i>
        </div>
        <div class="ui nine wide column">
          <h2 class="ui header aligned left">{{contact.name}}
            <div class="sub header">{{contact.companyName}}</div>
          </h2>
        </div>
      </div>
    </router-link>



    <router-link v-for="contact in nonFavoritedContacts"
      :key="contact.id"
      :to="{path:'/contact/'+contact.id}">
      <div class="ui padded segment grid">
        <div class="ui six wide column">
          <img class="ui small image" :src="contact.smallImageURL" @error="setDefaultImage(contact.id)"/>
        </div>
        <div class="ui one wide column">
          <i v-if="contact.favorite" class="star icon"></i>
        </div>
        <div class="ui nine wide column">
          <h2 class="ui header aligned left">{{contact.name}}
            <div class="sub header">{{contact.companyName}}</div>
          </h2>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    dataReady () {
      return !(Object.keys(this.contacts).length === 0 && this.contacts.constructor === Object)
    },
    ...mapState(['contacts']),
    ...mapGetters(['favoritedContacts', 'nonFavoritedContacts'])
  },
  methods: {
    setDefaultImage (id) {
      console.log("Detected error")
      this.contacts[id].smallImageURL = 'static/UserSmall/UserIconSmall@3x.png'
    },
  }
}
</script>

<style scoped>
/*
  img {
    max-width: 120px;
    max-height: 120px;
  }
*/
</style>
