<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="8">
        <v-card class="mx-10 pa-5" outlined>
          <v-form @submit.prevent="submit">
            <v-text-field
              v-model="product.name"
              label="Name"
              :counter="20"
              required
            ></v-text-field>
            <v-text-field
              v-model="product.price"
              label="Price"
              suffix="LAK"
              type="number"
              required
            ></v-text-field>
            <v-text-field
              v-model="product.stock"
              label="Stock"
              suffix="PCS"
              type="number"
              required
            ></v-text-field>

            <input @change="onFileSelected" type="file" name="" id="" />
            <br />
            <v-img
              v-if="imageUrl"
              :src="imageUrl"
              height="200"
              width="200"
              class="mt-3"
            ></v-img>
            <br />
            <br />
            <v-row>
              <v-spacer></v-spacer>
              <v-btn class="mr-4" @click="cancel">Cancel</v-btn>
              <v-btn color="success" type="submit">Confirm</v-btn>
            </v-row>
          </v-form>
          <!-- <span>{{ product }}</span> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "stock-create",
  data() {
    return {
      product: {
        name: "",
        price: "",
        stock: "",
        image: null,
      },
      imageUrl: null,
    };
  },
  methods: {
    onFileSelected(event) {
      const reader = new FileReader();
      reader.onload = (event) => {
        // for preview
        this.imageUrl = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);

      // for upload
      this.product.image = event.target.files[0];
    },
    submit() {
      alert(JSON.stringify(this.product));
    },
    cancel() {
      this.$router.back();
    },
  },
};
</script>

<style>
</style>