<template>
  <div class="card mt-2">
    <div class="card-body">
      <h4 class="card-title">{{notesProp.reportedBy}}</h4>
      <p class="card-text">{{notesProp.content}}</p>
    </div>
    <div>
      <button class="btn btn-danger buttonStyle" @click="deleteNote()">
        <i class="fa fa-trash"></i>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "noteComponent",
  props: ["notesProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteNote() {
      let note = {
        bugId: this.$route.params.id,
        id: this.notesProp._id
      };
      this.$store.dispatch("deleteNote", note);
    }
  },
  components: {}
};
</script>


<style scoped>
.buttonStyle {
  float: right;
  width: 25px;
  height: 25px;
  margin: auto;
  padding: 0;
  border-radius: 50%;
  text-align: center;
  text-justify: auto;
}
</style>