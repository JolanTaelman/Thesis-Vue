<template>
    <div class="user-information">
  <div class="row">
    <div class="col-4 user-information__image">
      <img class='user-tweet__image' src="https://avatars1.githubusercontent.com/u/10989616?v=4" />
    </div>
    <div class="col-8 user-information__text">
      <a href="/users/ + req.user.id">
        <h4>Jolan Taelman</h4>
      </a>
      <div class="user-information__stats user-information__stats_small">
        <ul>
          <li>
            <span class="user-information__stats-title">Tweets:</span>
            <span>
              <a href="/users/ + req.user.id">
                15
              </a>
            </span>
          </li>
          <li>
            <span class="user-information__stats-title">Following:</span>
            <span>
              <a href="/users/ + req.user.id">
                5
              </a>
            </span>
          </li>
          <li>
            <span class="user-information__stats-title">Followers:</span>
            <span>
              <a href="/users/ + req.user.id">
                15
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-12 user-information__stats user-information__stats_large">
    <ul>
      <li>
        <span class="user-information__stat-title">
          Tweets:
        </span>
        <span>
          <a href="/users/ + req.user.id/following"> 12</a>
        </span>

      </li>
      <li>
        <span class="user-information__stat-title">
          Following:
        </span>
        <span>
          <a href="/users/ + req.user.id/following"> 11</a>
        </span>
      </li>
      <li>
        <span class="user-information__stat-title">
          Followers:
        </span>
        <span>
          <a href="/users/ + req.user.id/followers"> 12</a>
        </span>
      </li>
    </ul>
  </div>  
</div>

</template>

<script>
export default {
    name: "User",}
</script>

<style lang="scss">
/* Main Dashboard */

@import '../abstracts/variables';
@import '../abstracts/placeholders';

.user-information {
  @extend %block-content;
}

.user-information>.row {
  align-items: center;
}

.user-tweet__image{
  border-radius: 50%;
  border: 1px solid #000;
}


.user-information__image {
  padding-right: 0;

  img {
    border-radius: 50%;
    width: 100px;
    max-width: 100%;
    float: right;
  }
}

.user-information__text {
  text-align: center;
}

.user-information h4,
.useful-links h4,
.recent-visits h4 {
  color: #fff;
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

.user-information__stat-title {
  display: block;
}

.user-information__stats span:not(.user-information__stat-title) {
  font-size: 18px;
  color: #1da1f2;
}

.useful-links a {
  font-weight: bold;
}

.useful-links,
.recent-visits {
  @extend %block-content;
  text-align: center;
}

.first-column {

  .recent-visits,
  .useful-links {
    display: none;

    @media #{$large} {
      display: block;
    }
  }

  .recent-visits {
    @media #{$xlarge} {
      display: none;
    }
  }
}

.third-column {

  .recent-visits,
  .useful-links {
    @media #{$large} {
      display: none;
    }
  }

  .recent-visits {
    @media #{$xlarge} {
      display: block;
    }
  }
}

</style>

