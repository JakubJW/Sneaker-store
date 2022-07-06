<template>
    <nav>
        <v-navigation-drawer app width="180" floating v-model="drawer" color="grey lighten-3">
            <v-list>
                <v-card flat height="130" color="grey lighten-3"></v-card>
                <v-list-item v-for="category in categories" v-bind:key="category.text" router :to="category.route">
                    <v-list-item-content>
                        <v-list-item-title class="text-uppercase dark-grey--text">{{category.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar flat app color="grey lighten-3">
            <v-app-bar-nav-icon @click="drawer=!drawer">
            </v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey-darken-2--text">
                <span class="font-weight-light">sneaker</span>
                <span>store</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <FavoritesItem />
            
            <CartItem />

            <v-btn text color="grey-darken-2">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
import CartItem from './CartItem.vue'
import FavoritesItem from './FavoritesItem.vue';
export default {
    data() {
        return {
            drawer: false,
            cart: false,
            categories: [
                { text: "Wszystkie buty", route: "/all" },
                { text: "Wyprzedaż", route: "/sale" },
                { text: "Lifestyle", route: "/lifestyle" },
                { text: "Bieganie", route: "/running" },
                { text: "Koszykówka", route: "/basketball" }
            ]
        };
    },
    components: { CartItem, FavoritesItem },
    methods: {
        
    }
}
</script>