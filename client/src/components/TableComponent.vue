<template>
  <tbody>
    <tr @click="bugDetails()">
      <th scope="row">
        <i class="fa fa-bug colorIconBad" v-if="bugProps.closed == false"></i>
        <i class="fa fa-thumbs-up colorIconGood" v-else="bugProps.closed == true"></i>
      </th>
      <td>{{bugProps.title}}</td>
      <td>{{bugProps.reportedBy}}</td>
      <td v-if="bugProps.closed == false">OPEN</td>
      <td v-else="bugProps.closed == true">CLOSED</td>
      <!-- .split is for formatting the time to just date -->
      <td>{{bugProps.createdAt.split('T')[0]}}</td>
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
.colorIconGood {
  color: green;
}

.colorIconBad {
  color: red;
}
</style>