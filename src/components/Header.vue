<template>
  <div>
    <div id="masthead" class="ui basic segment grid" v-if="singleContact">
      <div class="row">
        <div class="eight wide column bottom aligned">
          <router-link id="back-button" :to="{path: '/'}" class="ui header">
            <i class="fitted angle left icon"></i>Contacts
          </router-link>
        </div>
        <div class="eight wide column middle aligned">
          <img id="star-button" class="right floated" :src="imageUrl" @click="toggleFavorite(contactId)"/>
        </div>
      </div>
    </div>

    <div v-else class="ui basic segment header">
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
        'static/FavoriteStarTrue/FavoriteTrue@3x.png'
      ]
      return (this.favorited) ? urls[1] : urls[0]
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
    ...mapGetters(['isFavorite']),
    ...mapMutations(['toggleFavorite'])
  }
}
</script>

<style>
  #back-button {
    /* button color */
    color: #00afd6;
    font-weight: normal;
    float: left;
  }

  #star-button {
    float: right;
    width: 20px;
    height: 20px;
  }

  #star-button {
    background: none;
  }

  #masthead {
    margin-bottom: 0;
    padding-bottom: 0;
  }
</style>
