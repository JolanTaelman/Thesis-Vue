<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-3 col-lg-4 first-column">
        <User/>
      </div>
      <div class="col-xl-6 col-lg-8 second-column">
          <TweetList/>
        </div>
    </div>
  </div>
</template>

<script>
import User from "../user/user";
import TweetList from "../tweet-List/TweetList"
export default {
  name: "Home",
  components: {
    User,
    TweetList
  }
};
</script>

<style lang="scss">
@import "../abstracts/variables";
@import "../abstracts/placeholders";

body {
  font-size: 13px;
  min-height: 100vh;
  background-color: $dark-jungle-green;
  color: $grey-blue;
}

div.container {
  /* Calculate the minimum height by subtracting the header and footer height */
  min-height: calc(100vh - 50px - 150px);
  padding-top: 30px;
  padding-bottom: 30px;
}

h4 {
  font-size: 1.2rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  color: $dodger-blue;

  &:hover {
    color: darken($dodger-blue, 10%);
    text-decoration: none;
  }
}

hr {
  border-color: $dark-jungle-green;
}

.btn {
  border-radius: 5px;
  font-size: 11px;
  padding: 3px 8px;
  color: $white;
  background-color: $dodger-blue;

  &:hover {
    background-color: lighten($dodger-blue, 5%);
    cursor: pointer;
    color: $white;
  }
}

.btn__delete {
  background-color: firebrick;

  &:hover {
    background-color: #ff0000;
    cursor: pointer;
    color: $white;
  }
}

textarea {
  color: $grey-blue;
  padding: 5px 10px;
  width: 100%;
  background-color: $dark-jungle-green;
  border: solid 1px $black;
  border-radius: 8px;
  &::placeholder {
    color: $grey-blue;
  }
  &:focus {
    color: $white;
  }
}

pre {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}

pre code {
  color: black;
}

.recent-visits {
  @extend %block-content;
  text-align: center;
}
</style>
