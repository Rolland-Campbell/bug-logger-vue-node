<template>
  <div id="app" class="container-fluid">
    <div class="row header">
      <img src="./assets/bugloglogo.png" alt="logo" />
      <button class="btn btn-dark" data-toggle="modal" data-target="#one">Report</button>
      <Modal id="one">
        <div slot="title">Report a bug</div>
        <div slot="body">
          <input type="text" placeholder="Name" v-model="name" />
          <br />
          <br />
          <textarea placeholder="Enter comments" v-model="comment"></textarea>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from "../src/components/Modal";
export default {
  name: "home",
  data() {
    return {
      name: "",
      comment: ""
    };
  },
  methods: {
    addBug() {
      let bug = {
        name: this.name,
        comment: this.comment
      };
      this.$store.dispatch("addBug", bug);
    }
  },
  components: { Modal }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.header {
  justify-content: space-between;
  padding: 10px;
  background-color: maroon;
}
</style>
