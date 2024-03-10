<script setup>
import formatNumber from "../utils/formatNumber";

</script>

<template>
  <div v-if="product" class="realtive xl:pb-20 flex-1 min-h-screen min-w-0">
    <div class="flex flex-col gap-3 pt-4 pb-4 px-8 border-b-2 dark:border-zinc-700">
      <div class="w-full flex flex-row">
        <h1 class="text-3xl font-black text-dark dark:text-white my-auto">Keranjang</h1>
      </div>
    </div>
    <div v-if="product.Cart" class="flex flex-col sm:flex-row mx-10 xl:mx-36 mt-8 xl:mt-10 gap-10">
      <div class="flex flex-col gap-3 text-dark dark:text-white w-full xl:w-3/5">
        <div v-for="c in product.Cart" class="flex flex-row gap-5">
          <img class="w-1/5 xl:w-[11%] rounded-xl my-auto" :src="c.Picture" alt="">
          <div class="flex flex-col w-full">
            <div class="flex flex-row w-full">
              <h3 class="text-xl font-semibold ">{{ c.Name }}</h3>
              <p class="ms-auto">Rp.{{ formatNumber(c.Price) }}</p>
            </div>
            <form class="max-w-xs ms-auto">
              <div class="relative flex items-center">
                <button @click="handleQty(c.ProductId, c.Qty - 1)" type="button" id="decrement-button"
                  data-input-counter-decrement="counter-input"
                  class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                  <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M1 1h16" />
                  </svg>
                </button>
                <p class="me-2 ms-2">{{ c.Qty }}</p>
                <button @click="handleQty(c.ProductId, c.Qty + 1)" type="button" id="increment-button"
                  data-input-counter-increment="counter-input"
                  class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                  <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 1v16M1 9h16" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full xl:w-2/5">
        <div class="flex flex-col gap-3 p-7 bg-gray-50 dark:bg-dark-1 text-dark dark:text-white rounded-xl shadow-xl">
          <h2 class="text-xl font-bold me-auto">Ringkasan Belanja</h2>
          <div class="flex mt-2">
            <p class="font-bold">Total</p>
            <p class="ms-auto">Rp.{{ formatNumber(product.Total) }}</p>
          </div>
          <button @click="handleCheckout" class="btn btn-primary w-full rounded-xl">Checkout</button>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col items-center justify-center w-full h-96">
      <h1 class="text-2xl font-bold etxt-dark dark:text-white">Keranjang Kosong</h1>
      <p class="text-lg etxt-dark dark:text-white">Yuk, belanja sekarang!</p>
      <RouterLink to="/shop"
        class="btn mt-5 bg-dark text-white hover:text-dark dark:text-dark dark:bg-white dark:hover:bg-dark dark:hover:text-white">
        Pergi Ke Shop</RouterLink>
    </div>
  </div>
</template>

<script>
import { getAll } from "../utils/api/api";
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      product: null,
      intervalId: null,
    };
  },
  async mounted() {
    const isLoggedIn = !!localStorage.getItem('sessionId');

    if (isLoggedIn) {
      this.handleUpdateData();
      this.intervalId = setInterval(() => {
        this.handleUpdateData();
        console.log('update');
      }, 1000);
      this.$router.beforeEach((to, from, next) => { // Tambahkan event router Vue untuk menangani perpindahan halaman
        clearInterval(this.intervalId); // Hentikan interval saat berpindah halaman
        next(); // Lanjutkan navigasi ke halaman tujuan
      });
    }
  },
  beforeDestroy() { // Lifecycle hook untuk membersihkan interval sebelum komponen dihancurkan
    clearInterval(this.intervalId); // Membersihkan interval saat komponen dihancurkan
  },
  methods: {
    async handleQty(id, qty) {
      try {
        const uuid = parseInt(localStorage.getItem('uuid'));

        this.product = await axios.post('https://chemicfest.site/api/product/update', {
          UUID: uuid,
          Productid: parseInt(id),
          Qty: qty,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async handleUpdateData() {
      try {
        const uuid = parseInt(localStorage.getItem('uuid'));
        this.product = await getAll(`product/cart/${uuid}`);

        const script = document.createElement('script');
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
        script.type = 'text/javascript';
        script.setAttribute('data-client-key', import.meta.env.MIDTRANS_CLIENT_KEY); // Menggunakan setAttribute() untuk mengatur atribut data
        document.head.appendChild(script);
      } catch (error) {
        console.log(error);
      }
    },
    async handleCheckout() {
      try {
        const uuid = parseInt(localStorage.getItem('uuid'));
        const response = await axios.post('https://chemicfest.site/api/product/checkout', {
          UUID: uuid,
        });

        window.snap.pay(response.data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            alert("payment success!"); console.log(result);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            alert("wating your payment!"); console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            alert("payment failed!"); console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment');
          }
        })
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>