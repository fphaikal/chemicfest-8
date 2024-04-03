<template>
  <div>
    <h1>Upload</h1>
    <input type="file" class="file-input file-input-bordered file-input-primary w-full mt-3" @change="handleFileUpload" />
    <button @click="uploadPhoto">Upload Photo</button>
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
      selectedFile: null,
      uploadProgress: 0
    };
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadPhoto() {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      
      // Ganti URL_API dengan URL API ImgDB Anda
      const URL_API = 'https://api.imgbb.com/1/upload?expiration=600&key=fdd88c025c946ca1dbd38d8b743f183a';
      
      axios.post(URL_API, formData, {
        onUploadProgress: progressEvent => {
          this.uploadProgress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        }
      })
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
