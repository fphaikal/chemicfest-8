<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';
import formatNumber from '../utils/formatNumber';

const isLoggedIn = !!localStorage.getItem('sessionId');
const getRole = isLoggedIn ? localStorage.getItem('role') : '';

</script>

<template>
  <section>
    <div v-if="getRole != 'admin'" class="relative min-h-screen min-w-0 flex-1 xl:pb-24 p-3 flex flex-col gap-5">
      <div class="flex flex-col gap-3">
        <div class="w-full flex flex-col md:flex-row gap-3">
          <div
            class="w-full p-9 md:p-20 antialiased self-center bg-dark dark:bg-dark-1 text-white dark:text-white rounded-[50px]">
            <div class="flex flex-col-reverse md:flex-row justify-between">
              <div class="flex flex-col gap-2 md:w-33/5">
                <div class="text-4xl sm:text-5xl lg:text-6xl font-bold mx-auto md:mx-0">Chemicfest #8</div>
                <div class="text-lg sm :text-3xl lg:text-xl font-base mx-auto md:mx-0">Paduan Jiwa Harmoni</div>
                <RouterLink v-if="ticket && ticket.having !== true" to="buyticket"
                  class="btn mt-2 sm:mt-5 rounded-2xl w-fit mx-auto md:mx-0">Beli Tiket
                </RouterLink>
                <RouterLink v-else-if="ticket && ticket.data.Offline_Ticket > 0" to="eticket"
                  class="btn mt-2 sm:mt-5 rounded-2xl w-fit mx-auto md:mx-0">Lihat E-Ticket</RouterLink>
                <RouterLink v-else-if="ticket && ticket.data.Online_Ticket > 0" to="watch"
                  class="btn mt-2 sm:mt-5 rounded-2xl w-fit mx-auto md:mx-0">Lihat Streaming</RouterLink>
                <RouterLink v-else to="buyticket" class="btn mt-2 sm:mt-5 rounded-2xl w-fit mx-auto md:mx-0">Buy Ticket
                </RouterLink>
                <!-- Open the modal using ID.showModal() method -->
                <button class="btn w-fit rounded-2xl" onclick="my_modal_1.showModal()">Sinopsis Theater</button>
                <dialog id="my_modal_1" class="modal ">
                  <div class="modal-box dark:bg-dark bg-white">
                    <p class="py-4">
                      Hiduplah seorang pribumi yang bernama
Raden Mas Sinyo, ia bertemu Annabeth, gadis
keturunan Eropa yang merupakan adik dari
temannya Suurhof yaitu Petter. Sejak pertama
kali bertemu, Sinyo dan Annabeth telah saling
jatuh cinta. Hari demi hari mereka jalani dengan
saling mencintai sampai akhirnya mereka
menjalin hubungan kasih lalu menikah secara
hukum agama. <br><br>
Namun, hidup manis mereka seketika
berubah ketika Herman Mellema, ayah dari
Annabeth dan Petter ditemukan meninggal dunia.
Kasus meninggalnya Herman Mellema tersebut
lalu dibawa ke pengadilan dan menjadi berita
mengejutkan bagi masyarakat. Hukum Eropa
yang kejam dan masih berlaku pada masa itu
menyeret hubungan antara Sinyo dan Annabeth
dalam persidangan. <br><br>
Hasil dari persidangan pun keluar dan
menyatakan bahwa Annabeth harus dibawa ke
Amsterdam dan harus dipisahkan dari keluarga
Mellema yang ada di Nusantara
                    </p>
                    <div class="modal-action">
                      <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
              <div
                class="w-full md:w-2/5 antialiased self-center text-white dark:text-white rounded-[50px] mb-7 md:mb-0">
                <div class="font-bold mx-auto">
                  <VueCountdown :time="time" :interval="100" v-slot="{ days, hours, minutes, seconds }"
                    class="gap-5 text-center ">
                    <div class="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
                      <div class="flex flex-col">
                        <span class="countdown font-mono text-4xl lg:text-7xl">
                          <span :style="`--value:${days};`"></span>
                        </span>
                        Hari
                      </div>
                      <div class="flex flex-col">
                        <span class="countdown font-mono text-4xl lg:text-7xl">
                          <span :style="`--value:${hours};`"></span>
                        </span>
                        Jam
                      </div>
                      <div class="flex flex-col">
                        <span class="countdown font-mono text-4xl lg:text-7xl">
                          <span :style="`--value:${minutes};`"></span>
                        </span>
                        Menit
                      </div>
                      <div class="flex flex-col">
                        <span class="countdown font-mono text-4xl lg:text-7xl">
                          <span :style="`--value:${seconds};`"></span>
                        </span>
                        Detik
                      </div>
                    </div>
                  </VueCountdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-5 text-center text-dark dark:text-white">
        <h2>Sponsored By:</h2>
        <div class="flex gap-9 justify-center">
          <img v-for="i in sponsor" :src="i.Picture" class="h-14 my-auto grayscale hover:grayscale-0" alt="">
        </div>
        <!--<div x-data="{}" x-init="$nextTick(() => {
          let ul = $refs.logos;
          ul.insertAdjacentHTML('afterend', ul.outerHTML);
          ul.nextSibling.setAttribute('aria-hidden', 'true');})"
          class="w-full mx-auto inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul x-ref="logos"
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/J_Trust_Bank_logo.svg/2560px-J_Trust_Bank_logo.svg.png"
                class="h-7 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Grab_Logo.svg/2560px-Grab_Logo.svg.png"
                class="h-10 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/IDN_Media_Logo.png"
                class="h-7 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/id/0/02/POP_MIE.png"
                class="h-14 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://seeklogo.com/images/N/nivea-men-logo-BD22C783FB-seeklogo.com.png"
                class="h-16 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://static.wikia.nocookie.net/logopedia/images/9/9a/Chitato.svg"
                class="h-14 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="/svg/mandiri.svg" class="w-36 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/id/c/c2/Logo_Wafer_Tango.png"
                class="h-20 my-auto grayscale hover:grayscale-0" alt="">
            </li>
          </ul>
          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true">
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/J_Trust_Bank_logo.svg/2560px-J_Trust_Bank_logo.svg.png"
                class="h-7 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Grab_Logo.svg/2560px-Grab_Logo.svg.png"
                class="h-10 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/IDN_Media_Logo.png"
                class="h-7 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/id/0/02/POP_MIE.png"
                class="h-14 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://seeklogo.com/images/N/nivea-men-logo-BD22C783FB-seeklogo.com.png"
                class="h-16 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://static.wikia.nocookie.net/logopedia/images/9/9a/Chitato.svg"
                class="h-14 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="/svg/mandiri.svg" class="w-36 my-auto grayscale hover:grayscale-0" alt="">
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/id/c/c2/Logo_Wafer_Tango.png"
                class="h-20 my-auto grayscale hover:grayscale-0" alt="">
            </li>
          </ul>
        </div> -->
      </div>
      <!-- <div class="flex flex-col gap-3 ">
        <div class="flex flex-row">
          <h1 class="text-2xl md:text-3xl font-black text-dark dark:text-white my-auto">Shop</h1>
          <RouterLink to="/shop" class="my-auto relative ms-auto text-dark dark:text-white">
            <p>Lihat Selengkapnya ></p>
          </RouterLink>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          <div v-for="p in product"
            class="card card-compact  bg-gray-50 dark:bg-dark-1 text-dark dark:text-white shadow-xl">
            <figure class="aspect-1"><img :src="p.Picture" class="object-cover" alt="" /></figure>
            <div class="card-body gap-0">
              <h2 class="text-lg md:text-2xl font-medium">{{ p.Name }}</h2>
              <p class="text-lg md:text-lg font-bold">Rp. {{ formatNumber(p.Price) }}</p>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <div v-else-if="getRole === 'admin' && isLoggedIn"
      class="relative min-h-screen min-w-0 flex-1 xl:pb-24 p-3 flex flex-col gap-5">
      <div class="flex flex-col lg:flex-row gap-3">
        <div class="w-full flex flex-col md:flex-row gap-3">
          <div
            class="w-full p-9 md:p-20 antialiased self-center bg-dark dark:bg-dark-1 text-white dark:text-white rounded-[50px]">
            <div class="flex flex-col-reverse md:flex-row justify-between">
              <div class="flex flex-col gap-2 md:w-4/5 my-auto">
                <div class="text-4xl sm:text-5xl lg:text-6xl font-bold mx-auto md:mx-0">Chemicfest #8</div>
                <div class="text-lg sm :text-3xl lg:text-xl font-base mx-auto md:mx-0">Paduan Jiwa Harmoni</div>
              </div>
              <div
                class="w-full md:w-1/5 antialiased self-center my-auto text-white dark:text-white rounded-[50px] mb-7 md:mb-0">
                <div class="font-bold mx-auto">
                  <VueCountdown :time="time" :interval="100" v-slot="{ days, hours, minutes, seconds }"
                    class="gap-5 text-center">
                    <div class="flex flex-col bg-neutral rounded-box text-neutral-content">
                      <span class="text-7xl lg:text-9xl">
                        <span>{{ days }}</span>
                      </span>
                      Hari
                    </div>
                  </VueCountdown>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col bg-gray-50 dark:bg-dark-1 w-full md:w-fit rounded-3xl p-5 gap-5">
          <h1 class="text-dark dark:text-white text-center text-xl font-semibold">Target Peserta</h1>
          <div v-if="users"
            class="radial-progress bg-white dark:bg-dark text-dark dark:text-white border-4 border-primary mx-auto"
            :style="`--value:${(users.length / 1000) * 100}; --size:12rem;`" role="progressbar">
            <p class="text-xl">{{ users.length }}/1000</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getAll, getAnalytics } from "../utils/api/api";
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    const now = new Date();
    const newYear = new Date('2024-05-14T07:00:00.000Z');

    return {
      time: newYear - now,
      product: [],
      gallery: [],
      users: [],
      ticket: null,
      visitor: null,
      latestDeploy: null,
      sponsor: null,
    };
  },
  async mounted() {
    try {

      const isLoggedIn = !!localStorage.getItem('sessionId');
      const uuid = parseInt(localStorage.getItem('uuid'));

      const shop = await getAll('get/pricelist');
      this.product = shop.Shop;

      this.users = await getAll('get/alluser');

      if (isLoggedIn) {
        const checkTicket = await axios.post('https://chemicfest.site/api/check/have/ticket', {
          users: uuid
        });
        this.ticket = checkTicket.data;
        localStorage.setItem('ticket', checkTicket.data.data.Online_Ticket);
        localStorage.setItem('have_ticket', checkTicket.data.having);
      }

      this.sponsor = await getAll('get/storage/json/sponsor');

    } catch (error) {
      console.error(error);
    }
  },
};

</script>