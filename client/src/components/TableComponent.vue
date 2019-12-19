<template>
  <tbody>
    <tr @click="bugDetails()">
      <th scope="row">{{bugProps.closed}}</th>
      <td>{{bugProps.title}}</td>
      <td>{{bugProps.reportedBy}}</td>
      <td>OPEN</td>
      <td>{{bugProps.createdAt}}</td>
    </tr>
  </tbody>
</template>


<script>
export default {
  name: "tableComponent",
  mounted() {
    return this.$store.state.bugs;
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    bugDetails() {
      this.$store.dispatch("setCurrentBug", this.bugProps);
      this.$router.push({ path: `/details/${this.bugProps._id}` });
    }
  },
  components: {},
  props: ["bugProps"]
};
</script>


<style scoped>
</style>