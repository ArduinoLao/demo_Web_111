<template>
  <v-container>
    <!-- Summary Section -->
    <v-row>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="TOTAL"
          subtitle="1,800"
          avatar_bg="#00a65a"
          avatar_icon="mdi-cart-outline"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="SOLD_OUT"
          subtitle="12"
          avatar_bg="#f39c12"
          avatar_icon="mdi-flask-empty-outline"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="RETURN"
          subtitle="2"
          avatar_bg="#dd4b39"
          avatar_icon="mdi-keyboard-return"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="DICOUNT"
          subtitle="101"
          avatar_bg="#42A5F5"
          avatar_icon="redeem"
        />
      </v-col>
    </v-row>

    <!-- Table Section -->
    <v-card class="mt-3">
      <v-data-table
        :search="search"
        v-bind:headers="headers"
        v-bind:items="mDataArray"
      >
        <!-- table top section -->
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Stock</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              @click="$router.push('/stock-create')"
              color="primary"
              dark
              class="mb-2"
            >
              <v-icon left>add</v-icon>
              <span>New Product</span>
            </v-btn>
          </v-toolbar>
        </template>

        <!-- Table tr section -->
        <template v-slot:item="{ item }">
          <!-- id: 11,
            image: "product_23.jpg",
            name: "Arduino Nano 3.0 Mini USB รุ่นใหม่ใช้ชิฟ CH340G แถมสาย Mini USB",
            price: 11,
            stock: 130,
            created: "2018-03-30T00:11:45.109Z", -->
          <tr>
            <td>{{ item.id }}</td>
            <td>
              <v-img
                v-bind:src="item.image | imageUrl"
                lazy-src="https://picsum.photos/id/11/10/6"
                aspect-ratio="1"
                max-height="70"
                max-width="70"
              >
              </v-img>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.price | currency("LAK ") }}</td>
            <td>{{ item.stock | number("0,0") }} pcs.</td>
            <td>
              <v-icon class="mr-2" @click="editItem(item)"> edit </v-icon>
              <span class="ma-1"></span>
              <v-icon @click="deleteItem(item)"> delete </v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import Axios from "axios";
import StockCard from "@/components/cards/StockCard";
export default {
  name: "Stock",
  data() {
    return {
      search: "",
      mDataArray: [],
      headers: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "id",
        },
        {
          text: "Image",
          value: "image",
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Price",
          value: "price",
        },
        {
          text: "Stock",
          value: "stock",
        },
        {
          text: "Action",
          value: "action",
        },
      ],
    };
  },
  components: {
    StockCard,
  },
  mounted() {
    console.log("Stock Component is running");
    Axios.get("http://localhost:8081/api/v2/product").then((result) => {
      console.log(JSON.stringify(result.data));
      this.mDataArray = result.data;
    });
  },
  methods: {
    editItem(item){
      this.$router.push(`/stock-edit/${item.id}`)
    }
  },
};
</script>

<style>
</style>