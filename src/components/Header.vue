<template>
  <div class="ui segment">
    <div v-if="singleContact">
      <router-link id="back-button" :to="{path: '/'}">
        <i class="angle left icon"></i>Contacts
      </router-link>
      <button class="ui button" id="star-button" @click="/*do click*/">
        <i class="star icon" :class="extraClass"></i>
      </button>
    </div>
    <div v-else class="ui header">
      Contacts
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    singleContact () {
      const params = this.$route.params
      return true || !(Object.keys(params).length === 0 && params.constructor === Object)
    },
    contactId () {
      return this.$route.params.id
    },
    extraClass () {
      return (this.isFavorite(this.contactId)) ? '' : 'outline'
    }
  },
  methods: {
    ...mapGetters(['isFavorite'])
  }
}
</script>

<style>
  #back-button {
    /* button color */
    color: #99F;
    float: left;
    font-size: 1.6em;
  }

  #star-button {
    color: #DD0;
    float: right;
  }
</style>
