<template>
  <div class="relative min-h-screen min-w-0 flex-1 xl:pb-20">
    <div class="flex flex-col gap-3 pt-4 pb-4 px-8 border-b-2 dark:border-zinc-700">
      <div class="w-full flex flex-row">
        <h1 class="text-2xl font-black text-dark dark:text-white">Verifikasi Akun</h1>
      </div>
    </div>
    <div class="flex mt-6 mx-8 ">
      <div class="overflow-x-auto w-full">
        <table v-if="users" class="table  dark:text-white text-dark">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-10">No</th>
              <th>Bagian dari</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>KK</th>
              <th>Tanda Pengenal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="(user, index) in users">
            <tr class="my-auto h-full">
              <td class="w-10">{{ index + 1 }} </td>
              <td>
                <div class="flex flex-col">
                  <p>{{ user.Part_Of.Name }}</p>
                  <p>({{ user.Part_Of.Kelas }})</p>
                </div>
              </td>
              <td>{{ user.Name }} </td>
              <td>{{ user.Email }} </td>
              <td class="w-10">{{ user.Phone }} </td>
              <td>
                <div class="w-28 h-auto">
                  <img :src="user.Attachment.Image_1" alt="KK" />
                </div>
              </td>
              <td>
                <div class="w-28 h-auto">
                  <img :src="user.Attachment.Image_2" alt="Tanda Pengenal" />
                </div>
              </td>
              <td><button class="btn" @click="activateUser(user.UUID)">Activate</button></td>
            </tr>
          </tbody>
        </table>

        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getAll } from "../../utils/api/api";

export default {
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    try {
      this.users = await getAll('get/manual/user/false');
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async activateUser(id) {
      try {
        const activateUser = await axios.post('https://chemicfest.site/api/verify/manual/user', {
          users: id,
        });

        if (activateUser.status === 200) {
          this.users = await getAll('get/manual/user/false');
        }
      } catch (error) {
        console.error(error);
      }
    },
  }
};
</script>