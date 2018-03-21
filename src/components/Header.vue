<template>
  <div>

    <div class="ui segment grid" v-if="singleContact">
      <div class="eight wide middle aligned column">
        <router-link id="back-button" :to="{path: '/'}" class="ui header" v-on:click.native="fadeToList">
          <i class="angle left icon"></i>Contacts
        </router-link>
      </div>
      <div class="eight wide column middle aligned">
        <img class="ui right floated mini image" :src="imageUrl" @click="toggleFavorite(contactId)"/>
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
    imageUrl () {
      const urls = [
        'static/FavoriteStarFalse/FavoriteFalse@3x.png',
        '/static/FavoriteStarTrue/FavoriteTrue@3x.png'
      ]
      return (this.favorited)?urls[1]:urls[0]
    },
    singleContact () {
      const params = this.$route.params
      return !(Object.keys(params).length === 0 && params.constructor === Object)
    },
    contactId () {
      return this.$route.params.id
    },
    favorited () {
      return this.isFavorite()(this.contactId)
    }
  },
  methods: {
    fadeToList () {
      $('#contact-page').transition('fade right')
    },
    fadeToInfo() {
      $('#contact-list').transition('fade left')
    },
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

/*
\static\FavoriteStarTrue\FavoriteTrue@3x.png
*/
</style>
