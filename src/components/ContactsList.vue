<template>
  <div class="ui segments">
    <router-link v-for="contact in favoritedContacts"
      :key="contact.id"
      :to="{path:'/contact/'+contact.id}">
      <div class="ui padded segment grid">
        <div class="ui six wide column">
          <img class="ui small image" :src="contact.smallImageURL"/>
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
          <img class="ui small image" :src="contact.smallImageURL"/>
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
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['contacts']),
    ...mapGetters(['favoritedContacts', 'nonFavoritedContacts'])
  },
  mounted () {
    this.getContactList()
  },
  methods: {
    ...mapActions(['getContactList'])
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
