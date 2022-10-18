<template>
  <ul class="users-list">
    <li v-for="user in users" :key="`user-${user.id}`">
      <UserCard :user="user" @delUser="delUser(user.id)" />
    </li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";
import UserCard from "@/components/UserCard.vue";

export default {
  name: "UsersList",
  components: {
    UserCard,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions("users", ["delUser"]),
  },
};
</script>

<style lang="scss">
.users-list {
  max-width: max-content;
  list-style-type: none;
  li:not(:last-of-type) {
    margin-bottom: 1rem;
  }
}
</style>
