<template>
  <section>
    <h1>Users Page</h1>
    <UsersList v-if="users" :users="users" />
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UsersList from "@/components/UsersList.vue";

export default {
  name: "UsersPage",
  beforeMount() {
    this.getUsers();
  },
  components: {
    UsersList,
  },
  computed: {
    ...mapState("users", ["users"]),
  },
  methods: {
    ...mapActions("users", ["getUsers"]),
  },
};
</script>
