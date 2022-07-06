<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">

        <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="grey-darken-2" v-bind="attrs" v-on="on">
                <v-icon>mdi-cards-heart-outline</v-icon>
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="text-h5 grey lighten-2 text-uppercase">
                Ulubione
            </v-card-title>

            <v-card-text class="my-4">
                Tutaj będą ulubione buty
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="dialog = false">
                    Zamknij ulubione
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    data () {
        return {
            dialog: false,
        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>