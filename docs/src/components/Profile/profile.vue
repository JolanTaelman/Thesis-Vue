<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="profile">
          <img class="profile__image" src="https://avatars1.githubusercontent.com/u/10989616?v=4">
          <div class="profile__user-info">
            <span class="profile__handle">User name</span>
          </div>
          <div class="row">
            <div class="col-12 user-information__stats">
              <ul>
                <li>
                  <span class="user-information__stat-title">Tweets:</span>
                  <span>
                    <a>15</a>
                  </span>
                </li>
                <li>
                  <span class="user-information__stat-title">Following:</span>
                  <span>
                    <a>15</a>
                  </span>
                </li>
                <li>
                  <span class="user-information__stat-title">Followers:</span>
                  <span>
                    <a>15</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <TweetList/>
      </div>
    </div>
  </div>
</template>

<script>
import TweetList from "../tweet-List/TweetList";

export default {
  name: "Profile",
  components: {
    TweetList
  }
};
</script>

<style lang="scss">
/* Profile Card */

@import "../abstracts/placeholders";
@import "../abstracts/variables";

.profile {
  @extend %block-content;
  text-align: center;
}

.profile__handle {
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 5px;
  display: inline-block;
}

.profile__image {
  border: 0;
  border-radius: 50%;
  width: 150px;
  max-width: 100%;
}

.user-information__stats {
  ul {
    margin-top: 10px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    font-weight: bold;
    width: 100%;
  }

  &_small {
    @media #{$large} {
      display: none;
    }
  }

  &_large {
    display: none;

    @media #{$large} {
      display: block;
    }
  }
}
.profile__messaging-options {
  .btn {
    margin: 10px;
  }
}

.profile__follow {
  margin: 10px 0;
}

.profile__follow-button.following {
  background-color: $go-red;

  &:hover {
    background-color: lighten($go-red, 5%);
  }
}

div.container {
  /* Calculate the minimum height by subtracting the header and footer height */
  min-height: calc(100vh - 50px - 150px);
  padding-top: 30px;
  padding-bottom: 30px;
}

.user-information__stat-title {
  display: block;
}

.user-information__stats span:not(.user-information__stat-title) {
  font-size: 18px;
  color: #1da1f2;
}
</style>
