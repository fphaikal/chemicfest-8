<template>
  <div style="border: 2px solid black">
    <qrcode-stream :track="paintBoundingBox" @detect="onDetect" @error="onError"
      :active="isScannerActive"></qrcode-stream>
  </div>
  <dialog id="my_modal_1" class="modal">
    <div v-if="value" class="modal-box bg-white dark:bg-dark dark:text-white">
      <h3 class="font-bold text-lg">Sukses Verifikasi Data</h3>
      <div class="flex flex-col">
        <p class="">Nama: {{ value.data.Name }}</p>
        <p class="">Kelas: {{ value.data.Details.Kelas || '' }}</p>
        <p class="">Email: {{ value.data.Email }}</p>
        <p class="">No. HP: {{ value.data.Phone }}</p>
      </div>
      <div class="flex flex-col">
        <p class="">Tiket: {{ value.data.TypeTicket }}</p>
      </div>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn" @click="closeModal">Scan Kembali</button>
        </form>
      </div>
    </div>
    <div v-else class="modal-box bg-white dark:bg-dark dark:text-white">
      <h3 class="font-bold text-lg mb-5">Gagal Verifikasi Data</h3>
      <p>User/Tiket Tidak Ditemukan</p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn" @click="closeModal">Scan Kembali</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script>
import axios from 'axios'
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

export default {
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
  },
  data() {
    return {
      result: '',
      error: '',
      value: null,
      isScannerActive: true, // Start the scanner active

    }
  },
  async mounted() {
  },
  methods: {
    async sendValue() {
      try {
        const response = await axios.post('https://chemicfest.site/api/validate/ticket', {
          bookingCode: this.result[0].rawValue
        })
        this.value = response.data
        console.log(response.data)
      } catch (error) {
        this.value = 'User/Tiket Tidak Ditemukan'
        console.error(error)
      }
    },
    paintBoundingBox(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const {
          boundingBox: { x, y, width, height }
        } = detectedCode

        ctx.lineWidth = 2
        ctx.strokeStyle = '#007bff'
        ctx.strokeRect(x, y, width, height)
      }
    },
    onError(err) {
      this.error.value = `[${err.name}]: `

      if (err.name === 'NotAllowedError') {
        this.error.value += 'you need to grant camera access permission'
      } else if (err.name === 'NotFoundError') {
        this.error.value += 'no camera on this device'
      } else if (err.name === 'NotSupportedError') {
        this.error.value += 'secure context required (HTTPS, localhost)'
      } else if (err.name === 'NotReadableError') {
        this.error.value += 'is the camera already in use?'
      } else if (err.name === 'OverconstrainedError') {
        this.error.value += 'installed cameras are not suitable'
      } else if (err.name === 'StreamApiNotSupportedError') {
        this.error.value += 'Stream API is not supported in this browser'
      } else if (err.name === 'InsecureContextError') {
        this.error.value += 'Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.'
      } else {
        this.error.value += err.message
      }
    },
    onDetect(detectedCodes) {
      this.result = detectedCodes
      console.log(detectedCodes)
      document.getElementById('my_modal_1').showModal();
      this.sendValue()
    },
    closeModal() {
      document.getElementById('my_modal_1').close();

      // Reset the scanner 
      this.isScannerActive = false; // Pause the stream (if the component supports it)
      this.result = '';           // Clear the previous result
      this.value = null;          // Reset the result data

      // Short delay to allow the camera to shut down (might be needed)
      setTimeout(() => {undefined
        this.isScannerActive = true; // Reactivate the stream
      }, 500);
    },
  },
}
</script>