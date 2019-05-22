<template>
        <header class="navbar" role="banner">
          <div class="container">
            <div class="navbar__group navbar__group_left">
                <ul class="navbar__main-navigation">
                   <li> 

                        <i class="fas fa-home" aria-hidden="true" />
                           <router-link to="/Home">Home</router-link>
                  </li>
                    <li>  
                     <i class="fas fa-user" aria-hidden="true" />
                           <router-link to="/Profile">Profile</router-link>
                 </li>
              </ul>
              

            </div>
            <span class="navbar__logo">
              <a href="/">
                <img src="../../assets/bird.svg" alt=""/>
              </a>
            </span>
            <div class="navbar__group navbar__group_right">
              <div class="navbar__new-tweet">
                <a class="navbar__new-tweet-button btn">
                  <span>Tweet</span>
                </a>
              </div>
            </div>
          </div>
        </header>
</template>

<script>  
export default {
  name: "headerApp"
};
</script>

<style lang="scss">
@import "../abstracts/variables";

// Initially don't display these elements and have the media queries decide if they get displayed
.navbar__main-navigation span,
.navbar__logo {
  display: none;

  @media #{$large} {
    display: inline-block;
    text-align: center;
  }
}

.navbar {
  background-color: lighten($yankees-blue, 2.5%);
  height: 50px;
  margin: 0;
  padding: 0;
  font-size: 14px;
  border-bottom: 1px solid $black;

  div.container {
    display: flex;
    align-items: center;
    height: 100%;
    min-height: 0;
    padding-top: 0;
    padding-bottom: 0;

    > * {
      flex-grow: 1;
    }
  }

  a {
    color: $grey-blue;
  }
}

.navbar__group {
  height: 100%;

  &_right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
}

.navbar__main-navigation {
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: auto;

  li {
    margin-right: 5px;
    display: flex;
    height: 100%;
    align-items: center;

    &:hover {
      color: $dodger-blue !important;
    }
  }

  a {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 8px;
    padding-right: 8px;

    &:hover {
      color: $dodger-blue !important;
      border-bottom: 2px solid $dodger-blue;

      > * {
        margin-bottom: -2px;
      }
    }
    i {
      margin-right: 4px;
    }
  }

  .fa {
    font-size: 22px;
    display: inline-block;
    padding: 0;
    padding-right: 10px;
    padding-left: 10px;

    @media #{$large} {
      padding-left: 0;
    }
  }
}

.navbar__logo {
  position: absolute;
  left: 50%;
  margin-left: -13px;

  img {
    height: 26px;
  }
}

.navbar__profile {
  display: flex;
  align-items: center;
  margin-right: 20px;

  .navbar__profile-logout {
    display: flex;
  }

  .fa {
    font-size: 20px;
    padding-right: 10px;
  }
}

.navbar__new-tweet {
  text-align: right;

  .navbar__new-tweet-button {
    color: $white !important;
    font-size: 14px;
    padding: 7px 14px;
    border-radius: 20px;

    &:hover {
      color: $white;
    }
  }
}

.navbar__notifications {
  color: red !important;
}

.tweet__image {
  border-radius: 50%;
  // height: 40px;
  border: 1px solid $black;
}

.logout-image {
  height: 20px;
}
</style>


