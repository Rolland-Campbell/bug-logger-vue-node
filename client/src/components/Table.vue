<template>
  <tbody>
    <tr>
      <th scope="row" @click="bugDetails">{{bugProps.closed}}</th>
      <td>{{bugProps.title}}</td>
      <td>{{bugProps.reportedBy}}</td>
      <td>{{bugProps.closedDate}}</td>
    </tr>
  </tbody>
</template>


<script>
export default {
  name: "table",
  mounted() {
    return this.$store.state.bugs;
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    bugDetails() {
      this.$route.push("/bugDetails");
    }
  },
  components: {},
  props: ["bugProps"]
};
</script>


<style scoped>
</style>