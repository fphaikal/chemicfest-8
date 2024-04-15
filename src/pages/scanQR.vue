<template>
  <h1>Simple Demo</h1>

  <p style="color: red">Error: {{ error }}</p>

  <p>Last result: <b>{{ result }}</b></p>

  <div style="border: 2px solid black">
    <qrcode-stream :torch="true"  @camera-on="onInit" :track="paintBoundingBox" @detect="onDetect" @error="onError"></qrcode-stream>
  </div>
</template>

<script>
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
      error: ''
    }
  },
  methods: {
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
    },
  },
}
</script>