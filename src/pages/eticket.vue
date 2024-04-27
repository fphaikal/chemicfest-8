<script setup>
import { Icon } from '@iconify/vue';
import formatNumber from '../utils/formatNumber'
</script>
<template>
  <div class="relative xl:pb-20 flex-1 min-h-screen min-w-0 p-5">
    <div v-if="data" class="flex flex-col">
      <div class="flex flex-col md:flex-row gap-3">
        <div class="w-1/2 md:w-1/6 mx-auto">
          <img :src="`https://chemicfest.site/file/ticket/qrcode/${data.data.Ticket[0].Ticket.TicketCode}`" class="rounded-xl"alt="">
        </div>
        <div class="w-full md:w-5/6 flex flex-col border-2 p-4 rounded-xl">
          <div class="flex flex-col md:flex-row gap-5">
            <div class="w-full md:w-1/2">
              <h1 class="text-2xl font-bold text-dark dark:text-white">Tiket</h1>
              <p class="text-dark dark:text-white">Nama: {{ data.data.Name }}</p>
              <p class="text-dark dark:text-white">Email: {{ data.data.Email }}</p>
              <p class="text-dark dark:text-white">Nomor Telepon: {{ data.data.Phone }}</p>
              <p class="text-dark dark:text-white">Harga: Rp. {{ formatNumber(data.data.Ticket[0].Payment.Amount) }}</p>
            </div>
            <div class="w-full md:w-1/2">
              <h1 class="text-2xl font-bold text-dark dark:text-white">Detail</h1>
              <p class="text-dark dark:text-white">Kode Tiket: {{ data.data.Ticket[0].Ticket.TicketCode }}</p>
              <p class="text-dark dark:text-white">Status: {{ data.message }}</p>
              <p class="text-dark dark:text-white">Kategori: {{ data.data.Ticket[0].Ticket.Type }}</p>
              <p class="text-dark dark:text-white">Venue: {{ data.data.Ticket[0].Ticket.Venue }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-5xl font-bold mt-3 text-dark dark:text-white">
      <div class="flex flex-col border-2 p-4 rounded-xl">
        <h5 class="text-2xl">Chemicfest #8 - Paduan Jiwa Harmoni</h5>
        <div class="flex flex-col sm:flex-row mt-4 gap-7 ">
          <div class="w-full sm:w-1/3">
            <!--Poster-->
            <img class="w-full rounded-lg" src="https://chemicfest.site/file/assets/banner.jpg" alt="">
          </div>
          <div class="flex flex-col w-full sm:w-2/3 gap-2 ">
            <div class="flex flex-row gap-3 w-full text-dark dark:text-white">
              <Icon class="my-auto md:w-fit text-dark dark:text-white" width="28" icon="heroicons-solid:badge-check" ></Icon>
              <p class="my-auto text-base lg:text-lg font-semibold text-dark dark:text-white">OSIS SMK SMTI Yogyakarta</p>
            </div>
            <div class="flex flex-row gap-3 w-full text-dark dark:text-white">
              <Icon class="my-auto md:w-fit text-dark dark:text-white" width="28" icon="uil:schedule" ></Icon>
              <p class="my-auto text-base lg:text-lg font-normal text-dark dark:text-white">14 Mei 2024</p>
            </div>
            <div class="flex flex-row gap-3 w-full text-dark dark:text-white">
              <Icon class="my-auto  md:w-fit text-dark dark:text-white" width="28" icon="carbon:location-filled" ></Icon>
              <p class="my-auto text-base lg:text-lg font-normal text-dark dark:text-white">Auditorium RRI, Jl. Affandi No.37, Mrican, Caturtunggal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      data:null,
    }
  },
  async mounted() {
    try {
      const isLoggedIn = !!localStorage.getItem('sessionId');
      const uuid = parseInt(localStorage.getItem('uuid'));

      if (isLoggedIn) {
        const checkTicket = await axios.post('https://chemicfest.site/api/check/have/ticket', {
          users: uuid
        })
        this.data = checkTicket.data
      }
      console.log(this.data)

    } catch (error) {
      console.error(error)
    }
  }
}
</script>