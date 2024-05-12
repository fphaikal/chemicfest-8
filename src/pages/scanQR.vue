<template>
  <div class="m-5">
    <div v-if="success" role="alert" class="alert bg-green-400">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>{{ successMessage }}</span>
    </div>
    <div v-if="error" role="alert" class="alert bg-red-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>{{ errorMessage }}</span>
    </div>
  </div>
  <div >
    <qrcode-stream :constraints="{ facingMode }" :track="paintBoundingBox" @detect="onDetect" @error="onError"
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
      <div class="flex gap-2">
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn" @click="SubmitTicket">Submit</button>
          </form>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn" @click="closeModal">Close</button>
          </form>
        </div>
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
      facingMode: 'environment',
      result: '',
      error: '',
      value: null,
      isScannerActive: true, // Start the scanner active
      success: false,
      successMessage: null,
      error: false,
      errorMessage: null,
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
    async SubmitTicket() {
      try {
        const response = await axios.post('https://chemicfest.site/api/checkin/ticket', {
          bookingCode: this.result[0].rawValue
        })
        console.log(response.data)
        
        if(response.data.code === 200) {
          this.success = true
          this.successMessage = response.data.message
          this.closeModal()
          this.error = false
        }
      } catch (error) {
        this.value = 'User/Tiket Tidak Ditemukan'
        console.error(error)
        this.error = true
        this.errorMessage = error.response.data.message
        this.success = false

        this.closeModal()

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
        this.error += 'you need to grant camera access permission'
      } else if (err.name === 'NotFoundError') {
        this.error += 'no camera on this device'
      } else if (err.name === 'NotSupportedError') {
        this.error += 'secure context required (HTTPS, localhost)'
      } else if (err.name === 'NotReadableError') {
        this.error += 'is the camera already in use?'
      } else if (err.name === 'OverconstrainedError') {
        this.error += 'installed cameras are not suitable'
      } else if (err.name === 'StreamApiNotSupportedError') {
        this.error += 'Stream API is not supported in this browser'
      } else if (err.name === 'InsecureContextError') {
        this.error += 'Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.'
      } else {
        this.error += err.message
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
      setTimeout(() => {
        undefined
        this.isScannerActive = true; // Reactivate the stream
      }, 500);
    },
  },
}
</script>