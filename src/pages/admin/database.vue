<script setup>
import formatDate from "../../utils/formatDate";
import { Icon } from "@iconify/vue";
</script>
<template>
  <section>
    <div class="relative min-h-screen min-w-0 flex-1 xl:pb-20">
      <div class="flex flex-col gap-3 pt-4 pb-4 px-8 border-b-2 dark:border-zinc-700">
        <div class="w-full flex flex-row">
            <h1 class="text-2xl font-black text-dark dark:text-white">Database</h1>
        </div>
      </div>
      <div class="flex mt-6 mx-8 ">
        <div class="overflow-x-auto w-full">
            <table class="table">
              <!-- head -->
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody v-for="(user, index) in users">
                <tr>
                  <th>{{ index+1 }} </th>
                  <td>{{ user.Name }} </td>
                  <td>{{ user.Email }} </td>
                  <td>{{ user.Phone }} </td>
                  <td>{{ user.Status }} </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getAll } from "../../utils/api/api";

export default {
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    try {
      this.users = await getAll('get/alluser');

      console.log(this.user);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
