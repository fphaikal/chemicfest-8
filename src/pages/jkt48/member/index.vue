<template>
  test
</template>

<script>
import { getJKT48 } from '../../../utils/api/api';

export default {
  data() {
    return {
      member: null,
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    this.member = await getJKT48(`member/${id}`);
    console.log(this.member)
  }
}
</script>
