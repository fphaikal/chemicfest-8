<script setup>
import formatLongDate from '../../../utils/formatDate'
</script>
<template>
  <div v-if="data" class="relative min-w-0 min-h-screen flex-1 xl:pb-20 p-5 flex flex-col gap-4">
    <div  class="flex flex-col md:flex-row gap-5" >
      <img class="w-1/2 md:w-1/4 mx-auto rounded-xl h-fit" :src="getSetlistImg(data)" alt="">
      <div class="flex flex-row gap-5">
        <div class="flex flex-col w-3/4 gap-10 md:gap-52">
          <div class="flex flex-col gap-5 flex-1">
            <h1 class="text-5xl font-bold text-dark dark:text-white">{{ data.setlist.name }}</h1>
            <p class="text-dark dark:text-white font-light text-lg ">{{ data.setlist.description }}</p>
            <p class="text-lg text-dark-1 dark:text-white-1">Tanggal: {{ formatLongDate(data.showDate) }}</p>
          </div>
        </div>
        <div class="flex flex-col gap-3 w-1/4 md:w-1/4">
          <a href="#" class="btn bg-dark text-white hover:text-dark dark:text-dark dark:bg-white dark:hover:bg-dark dark:hover:text-white rounded-2xl">Buy Streaming</a>
          <a href="#" class="btn bg-dark text-white hover:text-dark dark:text-dark dark:bg-white dark:hover:bg-dark dark:hover:text-white rounded-2xl">Buy Theater</a>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h1 class="text-2xl font-semibold text-dark dark:text-white">Member Yang Perform</h1>
      <div class="grid grid-cols-4 sm:grid-cols-10 gap-3 justify-center">
        <div v-for="m in data.memberList" class="flex flex-col gap-1">
          <img class="rounded-lg" :src="getMemberImg(m)" alt="">
          <h1 class="text-lg font-bold text-dark dark:text-white text-center">{{ m.stage_name }}</h1>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import { getScheduleJKT48 } from "../../../utils/api/api";
export default {
  data() {
    return {
      data: null,
      setlistImg: {
        "Cara Meminum Ramune": "https://res.cloudinary.com/haymzm4wp/image/upload/v1702404446/nixg3rixpjpom3xa0ivf.jpg",
        "Ingin Bertemu": "https://res.cloudinary.com/haymzm4wp/image/upload/v1697224788/uploads/w2zvghwk8tocey8e8xhv.jpg",
        "Aturan Anti Cinta": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.75,w_320,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1697224423/uploads/ghr39gkb0fgdejhpppgq.jpg",
        "Tunas di Balik Seragam": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.75,w_320,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1698750703/uploads/yvryrdy47ppla0nidn3m.webp",
      },
      memberImg: {
        "Amanda": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689796776/uploads/iaggio0hn3xt7lrj1tuy.jpg",
        "Lia": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689800021/uploads/nsvagffsbnpkq642kurr.jpg",
        "Callie": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689799786/uploads/ff0xfdfcbq3h6sxxrymy.jpg",
        "Fiony": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689799853/uploads/pouyi6e11g0z0ciwb5pv.jpg",
        "Flora": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689799862/uploads/hczpn1lmce5cquhfzr6z.jpg",
        "Freya": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689799878/uploads/jpbiydpkrbqivj2l0mfp.jpg",
        "Ella": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689799835/uploads/b2mpdd2dkujuahoceshw.jpg",
        "Gracie": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1683991310/jkt48/kabesha/grace_octaviani_gdkukl.jpg",
        "Eli": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689799817/uploads/i3lrvelwshof1mhemi11.jpg",
        "Indira": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689799975/uploads/vwfujgkcnwj1bxvuqltt.jpg",
        "Jessi": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689799985/uploads/fdxosrullpoygof5rlvc.jpg",
        "Kathrina": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689799999/uploads/fqhhbfwtsvtsmhvgybzi.jpg",
        "Marsha": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689800100/uploads/d9dwg3unugklbzx3gug2.jpg",
        "Raisha": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689800171/uploads/r9ps8vuvtzkvczgcsfzl.jpg",
        "Adel": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689796762/uploads/irqlb2wi9paeaoyfwvns.jpg",
        "Gracia": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689799941/uploads/ruedqifz12t6hxlsatuq.jpg",
        "Christy": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689799808/uploads/pkxbl3bcgw91dkop39bv.jpg",
        "Oniel": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689800163/uploads/f9ioizmusqyvyj6ibkuy.jpg",
        "Olla": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689800147/uploads/pykmznyj873jbxvrntbj.jpg",
        "Gita": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689799894/uploads/malhywirjwy76a209iih.jpg",
        "Greesel": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1683991315/jkt48/kabesha/greesella_adhalia_bpy0de.jpg",
        "Indah": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689799956/uploads/zpoyz0nq9ijoyicjt98j.jpg",
        "Lulu": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689800059/uploads/r2qjcvpat8obgey5bom4.jpg  ",
        "Michie": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1683991352/jkt48/kabesha/michelle_alexandra_afiwaw.jpg",
        "Muthe": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689800138/uploads/mo72tzdhlmrzabvfpgdq.jpg",
        "Shani": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689800178/uploads/guomkmghbjtneyx7bggu.jpg",
        "Feni": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689799842/uploads/cxgfijqcfzghl1tzukfw.jpg",
        "Lyn": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1689800090/uploads/vxugjxgyovvdimn1tue2.jpg",
        "Alya": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1683991029/jkt48/kabesha/alya_amanda_sson6b.jpg",
        "Chelsea": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1683991250/jkt48/kabesha/chelsea_davina_a8jwuy.jpg",
        "Danella": "https://res.cloudinary.com/dpki2zhmf/image/fetch/f_webp,q_80,ar_0.8,g_face:center,w_180,c_fill/https://res.cloudinary.com/haymzm4wp/image/upload/v1683991284/jkt48/kabesha/dena_natalia_alnmjz.jpg",
      }
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    this.data = await getScheduleJKT48(`schedules/${id}`);
  },
  methods: {
    getSetlistImg(data) {
      if(data.setlist.name in this.setlistImg) {
        return this.setlistImg[data.setlist.name];
      } else {
        return data.setlist.image;
      }
    },
    getMemberImg(name) {
      if(name.stage_name in this.memberImg) {
        return this.memberImg[name.stage_name];
      } else {
        return name.image;
      }
    }
  }
};
</script>../../../utils/formatLongDate