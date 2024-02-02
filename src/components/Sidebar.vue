<script setup>
import { Icon } from '@iconify/vue'
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <!-- Page content here -->
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 min-h-full bg-white dark:bg-dark">
            <!-- Sidebar content here -->
            <li><a><button @click="toggleDark()"
                class="  dark:text-white text-dark ">
                <Icon icon="mingcute:sun-line" width="25" class="dark:!hidden" />
                <Icon icon="mingcute:moon-line" width="25" class="!hidden dark:!inline-block" />
              </button></a></li>
          </ul>
        </div>
      </div>
</template>