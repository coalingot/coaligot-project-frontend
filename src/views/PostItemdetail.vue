<template>
  {{Global_Store.item}}
    <div id="nav">
      <!-- <router-link :to="{ name: 'PatientDetails', params: { id } }">
        Details
      </router-link>
      |
      <router-link :to="{ name: 'Doctorcomment', params: { id } }">
        Doctor_comment
      </router-link>
      |
      <router-link :to="{ name: 'Dates', params: { id } }">
        Vaccine
      </router-link> -->
      GG
      <ItemDetail />
    </div>

</template>

<script>
import ItemDetail from "@/components/ItemDetail.vue";
export default {
  props: ["id"],
  inject: ["Global_Store"],
  components: {
    ItemDetail,
  },
};
</script>
<style scoped>
.footer {
  position: relative;
  margin-top: 0;
  bottom: 0px;
  width: 100%;
}
</style>
