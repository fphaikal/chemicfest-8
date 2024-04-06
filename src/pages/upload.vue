<template>
  <div>
    <h1>Upload</h1>
    <p>Upload ijazah</p>
    <input type="file" class="file-input file-input-bordered file-input-primary w-full mt-3" @change="handleFileUpload('ijazah', $event)" />
    <p>Upload KTP</p>
    <input type="file" class="file-input file-input-bordered file-input-primary w-full mt-3" @change="handleFileUpload('ktp', $event)" />
    <button @click="uploadPhotos">Upload Photos</button>
    <div v-if="uploadProgress > 0">
      Progress: {{ uploadProgress }}%
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedIjazah: null,
      selectedKTP: null,
      uploadProgress: 0
    };
  },
  methods: {
    handleFileUpload(type, event) {
      if (type === 'ijazah') {
        this.selectedIjazah = event.target.files[0];
      } else if (type === 'ktp') {
        this.selectedKTP = event.target.files[0];
      }
    },
    uploadPhotos() {
      const formData1 = new FormData();
      formData1.append('image', this.selectedIjazah);

      const formData2 = new FormData();
      formData2.append('image', this.selectedKTP);
      
      // Ganti URL_API dengan URL API ImgDB Anda
      const URL_API = 'https://api.imgbb.com/1/upload?expiration=600&key=fdd88c025c946ca1dbd38d8b743f183a';
      
      axios.post(URL_API, formData1)
      .then(response => {
        console.log('Upload successful:', response.data);
        // Lakukan apa pun yang perlu Anda lakukan setelah upload berhasil
      })
      .catch(error => {
        console.error('Error uploading:', error);
        // Handle error
      });
      axios.post(URL_API, formData2)
      .then(response => {
        console.log('Upload successful:', response.data);
        // Lakukan apa pun yang perlu Anda lakukan setelah upload berhasil
      })
      .catch(error => {
        console.error('Error uploading:', error);
        // Handle error
      });
    }
  }
};
</script>
