<template>
  <div class="all">
    <h1 class='text-uppercase mx-10 mt-10'>Wszystkie buty</h1>
    <v-container class="my-5">
      <v-row>
      <v-col v-for="product in products" v-bind:key="product.id" cols="3">
        <v-hover v-slot="{hover}">
          <v-card elevation="0" tile>
            <v-img contain max-width="300" fill-height :src="product.source">
              <v-btn right absolute icon color="grey-darken-3">
                <v-icon>mdi-cards-heart-outline</v-icon>
              </v-btn>
            </v-img>
            <v-expand-transition>
              <v-btn v-if="hover" class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal white--text success" style="height: 10%;">Do koszyka</v-btn>
            </v-expand-transition>
            <v-card-subtitle dark class="font-weight-medium">{{product.name}}</v-card-subtitle>
            <v-card-text>{{product.price}}</v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {id: '1', name: 'Nike React Infinity Run Flyknit 3', price: '749,99zł', source: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e0a3ff9-a45b-4273-a25a-d748e4d6d82a/meskie-buty-do-biegania-po-asfalcie-react-infinity-run-flyknit-3-lw3Qvh.png'},
        {id: '2', name: 'Nike ZoomX Vaporfly NEXT% 2 Ekiden', price: '1229,99zł', source: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d222e2b3-ab84-44f3-9708-6e9015e83d6f/buty-startowe-do-biegania-po-asfalcie-zoomx-vaporfly-next-2-ekiden-821S4F.png'},
        {id: '3', name: "Nike Blazer Mid '77", price: '469,99zł', source: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2a602edd-0fe4-4d70-a622-0a0ffe845346/buty-meskie-blazer-mid-77-vZwS2t.png'},
        {id: '4', name: 'Nike Air Max Pre-Day', price: '629,99zł', source: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9d210e8-0821-4273-84f6-1fb8838a4e12/buty-meskie-air-max-pre-day-Jt5w84.png'},
        {id: '5', name: 'Nike Crater Impact', price: '529,99zł', source: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d4b50069-4192-4847-a43b-7af2e897242f/buty-meskie-crater-impact-5CXhl3.png'},
        {id: '6', name: 'Nike Air Max Bolt', price: '429,99zł', source: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/816e7cc0-f94b-45e2-a177-cacdbea38cf3/buty-meskie-air-max-bolt-4QmXm4.png'}
      ]
    }
  },
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  top: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 50%;
}</style>
