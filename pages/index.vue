<template>
  <section>
    <particle />
      <v-col
        justify="center"
        align="center"
        xs12
        sm8
        md6
      >
        <vuetify-logo />
        <welcome />
        <v-row justify="space-around">
          <v-card v-for="item in cardContents" :key="item.name" min-width="35vw">
            <v-card flat>
              <v-card-subtitle v-html="item.name" />
              <v-img max-width="10vw" :src="`/${item.name}.png`" />
            </v-card>
            <v-card-text>
              sdjgnwlegnklwegklegqa
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
  </section>
</template>

<script>
import VuetifyLogo from '~/components/for-this-repo/vuetify-logo'
import Welcome from '~/components/for-this-repo/welcome'
import Particle from '~/components/for-this-repo/particle'


export default {
  components: {
    VuetifyLogo,
    Welcome,
    Particle
  },
  data() {
    return {
      cardContents: [
        {
          name: "molecule",

        },
        {
          name: "organism",

        }
      ]
    }
  }
}
</script>
