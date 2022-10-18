<template>
  <article class="user-card">
    <div class="user-card__wrapper">
      <div class="user-card__item">
        <span>id: </span>
        <strong>{{ user.id }}</strong>
      </div>
      <div class="user-card__item">
        <span>nick: </span>
        <strong>{{ user.username }}</strong>
      </div>
    </div>
    <button @click="$emit('delUser')">
      <img src="/img/icons/trash.svg" alt="delete" />
    </button>
  </article>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.user-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 0.1rem solid var(--grey);
  border-radius: 0.8rem;
  padding: 0.6rem 1rem;

  &__item {
    &:not(:last-of-type) {
      margin-bottom: 0.4rem;
    }
  }

  span {
    display: inline-block;
    width: 3rem;
    text-align: right;
    color: var(--grey);
    text-transform: uppercase;
    font-size: 1rem;
    margin-right: 0.4rem;
  }
  strong {
    font-weight: normal;
  }
  button {
    height: max-content;
    cursor: pointer;
    background: none;
    border: none;
    img {
      width: 1.6rem;
      height: auto;
      filter: invert(54%) sepia(0%) saturate(0%) hue-rotate(301deg)
        brightness(86%) contrast(85%); // https://codepen.io/sosuke/pen/Pjoqqp
    }
    &:hover {
      img {
        filter: unset;
      }
    }
  }
}
</style>
