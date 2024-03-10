<script setup>
import formatNumber from "../utils/formatNumber";

const isLoggedIn = !!localStorage.getItem('sessionId');
</script>
<template>
  <div v-if="product" class="realtive xl:pb-20 flex-1 min-h-screen min-w-0">
    <div class="flex flex-col gap-3 pt-4 pb-4 px-8 border-b-2 dark:border-zinc-700">
      <div class="w-full flex flex-row">
        <h1 class="text-3xl font-black text-dark dark:text-white my-auto">Shop</h1>
        <RouterLink v-if="isLoggedIn" to="/cart" @mouseover="showCartData" @mouseleave="hideCartData"
          class="my-auto relative ms-auto">
          <div class="indicator">
            <span v-if="cart" class="indicator-item badge text-dark bg-sky-500">{{ cart.TotalQty }}</span> 
            <Icon icon="mingcute:shopping-cart-2-fill" class="text-dark dark:text-white" width="30" />
          </div>
          <div v-if="isHovered"
            class="absolute top-8 right-0 text-dark dark:text-white bg-gray-50 dark:bg-dark-1 p-4 shadow-md rounded-lg w-96 z-10">
            <!-- Display cart data here -->
            <div class="flex flex-col gap-3">
              <h2 class="text-xl font-bold me-auto">Keranjang</h2>
              <div v-for="c in cart.Cart" class="flex gap-2">
                <img class="w-1/5 rounded-lg my-auto" :src="c.Picture" alt="">
                <h3 class="text-lg font-semibold my-auto">{{ c.Name }}</h3>
                <p class="ms-auto my-auto">{{ c.Qty }}x Rp.{{ formatNumber(c.Price) }}</p>
              </div>
              <div v-if="cart" class="border-t-2 dark:border-zinc-700">
                <div class="flex mt-2">
                  <p class="font-bold">Total</p>
                  <p class="ms-auto">Rp.{{ formatNumber(cart.Total) }}</p>
                </div>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>

    </div>
    <div class="grid grid-cols-5 gap-3 p-5 ">
      <div v-for="p in product"
        class="card card-compact  bg-gray-50 dark:bg-dark-1 text-dark dark:text-white shadow-xl">
        <figure class="aspect-1"><img :src="p.Picture" class="object-cover" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class=" text-2xl font-bold">{{ p.Name }}</h2>
          <p class="text-lg">Rp. {{ formatNumber(p.Price) }}</p>
          <p>{{ p.Description }}</p>
          <div class="card-actions ">
            <button @click.prevent="handleAddToCart(p)" class="btn btn-primary w-full rounded-xl">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { getAll } from "../utils/api/api";
import axios from 'axios';
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      isHovered: false,
      product: [],
      cart: null,
      intervalId: null, // Tambahkan variabel untuk menyimpan ID interval
      DataQty: null,
    };
  },
  async mounted() {
    try {
      const isLoggedIn = !!localStorage.getItem('sessionId');
      const shop = await getAll('get/pricelist');

      this.product = shop.Shop

      
      
      if (isLoggedIn) {
        this.handleGetCart()

        this.intervalId = setInterval(() => { // Simpan ID interval
          this.handleGetCart()

          console.log('fetching cart data')
        }, 1000)
        this.$router.beforeEach((to, from, next) => { // Tambahkan event router Vue untuk menangani perpindahan halaman
          clearInterval(this.intervalId); // Hentikan interval saat berpindah halaman
          next(); // Lanjutkan navigasi ke halaman tujuan
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
  beforeDestroy() { // Lifecycle hook untuk membersihkan interval sebelum komponen dihancurkan
    clearInterval(this.intervalId); // Membersihkan interval saat komponen dihancurkan
  },
  methods: {
    async handleAddToCart(product) {
      try {
        const uuid = parseInt(localStorage.getItem('uuid'))

        console.log(uuid)
        const response = await axios.post('https://chemicfest.site/api/product/add', {
          UUID: uuid,
          Productid: product.ProductId,
          Qty: 1,
        })
      } catch (error) {
        console.log(error)
      }
    },
    async handleGetCart() {
      try {
        const uuid = parseInt(localStorage.getItem('uuid'))

        this.cart = await getAll(`product/cart/${uuid}`)

      } catch (error) {
        console.log(error)
      }
    },
    showCartData() {
      this.isHovered = true;
    },
    hideCartData() {
      this.isHovered = false;
    },
  },
  components: { Icon }
}
</script>



