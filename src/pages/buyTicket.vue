<script setup>
import formatNumber from "../utils/formatNumber";

const isLoggedIn = !!localStorage.getItem('sessionId');
const getRole = isLoggedIn ? localStorage.getItem('role') : '';


</script>

<template>
  <dialog id="info" class="modal">
    <div class="modal-box bg-gray-50 dark:bg-dark text-dark dark:text-white max-w-2xl">
      <h3 class="font-bold text-2xl">Info Penting</h3>
      <p class="py-4 leading-loose">
        - General Sales dimulai pada 20 April 2024 pukul 14.00 WIB <br>
        - Maks. pembelian 1 tiket per akun/ID per show day. <br>
        - Wajib login ke akun chemicfest.com untuk melakukan pembelian. <br>
        - Selesaikan pembayaran maksimal 15 menit setelah melakukan pemesanan. E-tiket tidak akan terbit jika pembayaran
        dilakukan setelah waktu pembayaran habis.<br>
      </p>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>

  <div :class="isLoggedIn ? 'relative min-h-screen min-w-0 flex-1 xl:pb-20 overflow-hidden' : 'relative min-h-screen min-w-0 flex-1 '">
    <div id="thumbnail" class="bg-cover bg-fixed" style="background-image: url(posterdark.jpg);">
      <img class="w-full md:w-2/6 mx-auto"
        src="/public/poster.jpg"
        alt="">
    </div>
    <section id="title" class="flex flex-col gap-3">
      <div class="flex mx-10 mt-8 gap-3 border-b-2 dark:border-zinc-700">
        <div class="w-full sm:w-3/4 flex flex-col gap-3">
          <h1 class=" text-3xl xl:text-5xl font-bold text-dark dark:text-white antialiased">CHEMICFEST #8 | ENJOY THE
            SHOW, LET THE RETRO FLOW</h1>
          <div class="flex flex-row gap-3 w-full">
            <Icon class="my-auto text-dark dark:text-white mx-1 md:mx-0 md:w-fit" width="28" icon="carbon:location-filled" />
            <div class="my-auto text-md lg:text-lg text-gray-500 w-5/4 md:w-fit">Auditorium RRI, Jl. Affandi No.37,
              Mrican, Caturtunggal</div>
          </div>
          <div class="flex flex-row gap-3">
            <Icon class="my-auto text-dark dark:text-white mx-1 md:mx-0" width="28" icon="uil:schedule" />
            <div class="my-auto text-md lg:text-lg text-gray-500">14 Mei 2024</div>
          </div>
          <div class="collapse bg-gray-50 dark:bg-dark-1 text-dark dark:text-white mb-5">
            <input type="checkbox" /> 
            <div class="collapse-title text-xl font-medium">
              Info Penting
            </div>
            <div class="collapse-content"> 
              <ol class="list-decimal ml-5">
                <li>Pembelian tiket hanya bisa dilakukan di platform resmi chemicfest #8</li>
                <li>Peserta akan mendapatkan e ticket melalui email saat pembayaran lunas</li>
                <li>Kehilangan tiket bukan urusan panitia</li>
                <li>Tiket hanya bisa di gunakan satu orang dan satu kali masuk acara</li>
                <li>Jika tiket tidak terdeteksi oleh sistem maka ya tidak boleh masuk</li>
                <li>Infomasi pribadi akan di jaga kerahasiannya sesuai dengan kebijakan penyelenggara</li>
                <li>Pembeli tiket adalah hanya untuk siswa aktif serta keluarga guru, guru, alumni, dan keluarga siswa SMK SMTI YOGYAKARTA </li>
                <li>Maksimal pembelian hanya 1 tiket untuk 1 akun</li>
                <li>Ikuti ig chemicevent secara berkala untuk mengetahui info terkait</li>
                <li>Pembelian tiket sudah termasuk pajak</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="w-1/4 sm:flex flex-col hidden">
          <p class="text-xl text-right font-base text-dark dark:text-white antialiased">Mulai Dari</p>
          <h1 v-if="getRole === 'guru' || getRole === 'alumni'"
            class="text-4xl text-right font-bold text-dark dark:text-white  antialiased">IDR {{ formatNumber(priceOnline) }} </h1>
          <h1 v-else class="text-4xl text-right font-bold text-dark dark:text-white  antialiased">IDR {{ formatNumber(priceOffline) ||
            21.000 }} </h1>
          <a href="#detail"
            class="btn ms-auto mt-3 rounded-2xl bg-dark text-white hover:text-dark dark:text-dark dark:bg-white dark:hover:bg-dark dark:hover:text-white w-1/2">Beli
            Tiket</a>
        </div>
      </div>
    </section>

    <section v-if="isLoggedIn" id="detail" class="flex flex-col gap-3 h-screen">
      <div class="flex flex-col md:flex-row mx-10 mt-5 gap-3">
        <div class="flex flex-col w-full md:w-3/4 gap-3">
          <h2 class="font-semibold text-3xl dark:text-white">Paket</h2>
          <div class="flex flex-col gap-3 bg-gray-50 dark:bg-dark-1 rounded-3xl p-3">
            <div class="flex flex-col p-5 bg-white dark:bg-dark rounded-2xl w-full dark:text-white">
              <h1 class="text-xl font-semibold">Tiket Offline</h1>
              <p class="text-gray-500">Tidak Bisa Refund | Konfirmasi Instan</p>
              <div class="border-b-2 mt-4 mb-4 dark:border-zinc-700"></div>
              <div class="flex">
                <h2 class="text-3xl font-bold my-auto">IDR {{ formatNumber(priceOffline) }} </h2>
                <button @click="handleBuyTicketOffline"
                  class="btn my-auto ms-auto bg-dark text-white rounded-2xl hover:text-dark dark:text-dark dark:bg-white dark:hover:bg-dark dark:hover:text-white">Pesan</button>
              </div>
            </div>
            <div v-if="getRole === 'guru' || getRole === 'alumni'"
              class="flex flex-col p-5 bg-white dark:bg-dark dark:text-white text-dark rounded-2xl w-full">
              <h1 class="text-xl font-semibold">Tiket Online</h1>
              <p class="text-gray-500">Tidak Bisa Refund | Konfirmasi Instan</p>
              <div class="border-b-2 mt-4 mb-4 dark:border-zinc-700"></div>
              <div class="flex">
                <h2 v-if="getRole === 'guru' || getRole === 'alumni'" class="text-3xl font-bold my-auto">IDR {{
                  formatNumber(priceOnline) }}</h2>
                <button @click="handleBuyTicketOnline"
                  class="btn my-auto ms-auto bg-dark text-white rounded-2xl hover:text-dark dark:text-dark dark:bg-white dark:hover:bg-dark dark:hover:text-white">Pesan</button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full md:w-1/4 gap-3">
          <h2 class="font-semibold text-3xl dark:text-white">Venue</h2>
          <div class="flex bg-gray-50 dark:bg-dark-1 rounded-3xl p-3">
            <p class="text-md mx-auto font-base text-dark dark:text-white">Soon</p>
          </div>
        </div>
      </div>
    </section>
    <div v-if="!isLoggedIn" class="toast toast-center w-1/2 sm:w-fit">
      <div role="alert" class="alert shadow-lg bg-white dark:bg-dark dark:text-white flex mb-20 sm:mb-0">
        <Icon width="28" icon="mingcute:bling-fill" />
        <div>
          <h3 class="font-bold">Tertarik Dengan Produk Ini!</h3>
          <div class="text-xs">Silahkan Login Untuk Mengetahui Lebih Lanjut</div>
        </div>
        <RouterLink to="login" class="btn btn-md rounded-lg">Login</RouterLink>
      </div>
    </div>
    <div v-else class="toast toast-center w-full sm:w-fit">
      <div role="alert" class="alert shadow-lg bg-white dark:bg-dark dark:text-white flex mb-20 sm:mb-0">
        <div>
          <h3 class="font-base text-left">Mulai Dari</h3>
          <div class="text-2xl text-left font-bold">IDR {{ formatNumber(priceOnline) || 21.000 }}</div>
        </div>
        <a href="#detail" class="btn btn-md rounded-lg ms-auto">Beli Tiket</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import { getAll } from '../utils/api/api';
import axios from 'axios';

export default {
  data() {
    return {
      data: {},
      priceOnline: null,
      priceOffline: null,
      ticketType: null,
      ticketid: null,
    };
  },
  async mounted() {
    try {
      const getRole = localStorage.getItem('role');

      this.data = await getAll('get/pricelist');
      console.log(localStorage.getItem('uuid'))
      if (getRole === 'guru') {
        const guruOnline = this.data.TicketOnline.find(ticket => ticket.Role === 'Guru');
        this.priceOnline = guruOnline.Price;

        const guruOffline = this.data.TicketOffline.find(ticket => ticket.Role === 'Guru');
        this.priceOffline = guruOffline.Price;
      } else if (getRole === 'alumni') {
        const alumniOnline = this.data.TicketOnline.find(ticket => ticket.Role === 'Alumni');
        this.priceOnline = alumniOnline.Price;

        const alumniOffline = this.data.TicketOffline.find(ticket => ticket.Role === 'Alumni');
        this.priceOffline = alumniOffline.Price;
      } else if (getRole === 'siswa') {
        const siswaOffline = this.data.TicketOffline.find(ticket => ticket.Role === 'Siswa');
        this.priceOffline = siswaOffline.Price;
      }

      const script = document.createElement('script');
      script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
      script.type = 'text/javascript';
      script.setAttribute('data-client-key', 'Mid-client-RE6DmaCD9JsF11Mu'); // Menggunakan setAttribute() untuk mengatur atribut data
      document.head.appendChild(script);
    }
    catch (error) {
      console.error(error);
    }
  },
  methods: {
    async handleBuyTicketOffline() {
      try {
        const getRole = localStorage.getItem('role');
        const uuid = parseInt(localStorage.getItem('uuid'));

        if (getRole === 'siswa') {
          this.ticketid = this.data.TicketOffline.find(ticket => ticket.Role === 'Siswa').ProductId;
        } else if (getRole === 'guru') {
          this.ticketid = this.data.TicketOffline.find(ticket => ticket.Role === 'Guru' || ticket.Role === 'Alumni').ProductId;
        } else if (getRole === 'alumni') {
          this.ticketid = this.data.TicketOffline.find(ticket => ticket.Role === 'Alumni').ProductId;
        }

        const response = await axios.post('https://chemicfest.site/api/buyticket', {
          ticketid: this.ticketid,
          uuid: uuid,
          type: "offline"
        });

        window.snap.pay(response.data, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            console.log(result);

            const response = axios.post('https://chemicfest.site/api/verify/payment/ticket', {
              users: uuid,
              order_id: result.order_id,
              transaction_status: 'on success',
              payment_method: result.payment_type
            });
            console.log(response);
          },
          onPending: function(result){
            /* You may add your own implementation here */
            const response = axios.post('https://chemicfest.site/api/verify/payment/ticket', {
              users: uuid,
              order_id: result.order_id,
              transaction_status: 'on pending',
              payment_method: result.payment_type

            });
          },
          onError: function(result){
            /* You may add your own implementation here */
            const response = axios.post('https://chemicfest.site/api/verify/payment/ticket', {
              users: uuid,
              order_id: result.order_id,
              transaction_status: 'on error',
              payment_method: result.payment_type

            });
          },
          onClose: function(){
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment');
          }
        })
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async handleBuyTicketOnline() {
      try {
        const getRole = localStorage.getItem('role');
        const uuid = parseInt(localStorage.getItem('uuid'));

        if (getRole === 'guru') {
          this.ticketid = this.data.TicketOnline.find(ticket => ticket.Role === 'Guru').ProductId;
        } else if (getRole === 'alumni')  {
          this.ticketid = this.data.TicketOnline.find(ticket => ticket.Role === 'Alumni').ProductId;
        }

        console.log(this.ticketid)
        const response = await axios.post('https://chemicfest.site/api/buyticket', {
          ticketid: this.ticketid,
          uuid: uuid,
          type: "online"
        });
        window.snap.pay(response.data, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            console.log(result);

            const response = axios.post('https://chemicfest.site/api/verify/payment/ticket', {
              users: uuid,
              order_id: result.order_id,
              transaction_status: 'on success',
              payment_method: result.payment_type

            });
            console.log(response);
          },
          onPending: function(result){
            /* You may add your own implementation here */
            const response = axios.post('https://chemicfest.site/api/verify/payment/ticket', {
              users: uuid,
              order_id: result.order_id,
              transaction_status: 'on pending',
              payment_method: result.payment_type

            });
          },
          onError: function(result){
            /* You may add your own implementation here */
            const response = axios.post('https://chemicfest.site/api/verify/payment/ticket', {
              users: uuid,
              order_id: result.order_id,
              transaction_status: 'on error',
              payment_method: result.payment_type

            });
          },
          onClose: function(){
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment');
          }
        })
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  },
  components: { Icon }
};
</script>
