<template>
  <div>

    <div class="ui segment grid" v-if="singleContact">
      <div class="left floated six wide column">
        <router-link id="back-button" :to="{path: '/'}">
          <i class="angle left icon"></i>Contacts
        </router-link>
      </div>
      <div class="right floated two wide column">
        <button class="ui button" id="star-button" @click="toggleFavorite(contactId)">
          <i class="star icon" :class="extraClass"></i>
        </button>
      </div>
    </div>

    <div v-else class="ui segment header">
      Contacts
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    singleContact () {
      const params = this.$route.params
      return !(Object.keys(params).length === 0 && params.constructor === Object)
    },
    contactId () {
      return this.$route.params.id
    },
    extraClass () {
      return (this.isFavorite()(this.contactId)) ? '' : 'outline'
    }
  },
  methods: {
    ...mapGetters(['isFavorite']),
    ...mapMutations(['toggleFavorite'])
  }
}
</script>

<style>
  #back-button {
    /* button color */
    color: #99F;
    float: left;
  }

  #star-button {
    float: right;
  }

  #star-button {
    background: none;
  }
</style>
