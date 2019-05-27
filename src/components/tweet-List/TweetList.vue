<template>
  <div>
    <div v-for="tweet in sourceOfTruth.tweets" v-bind:key="tweet.id">
      <div class="tweet">
        <div class="row">
          <div class="col-1">
            <img class="tweet__image" src="https://avatars1.githubusercontent.com/u/10989616?v=4">
            <img>
          </div>
          <div class="col-11 tweet_description">
            <span class="tweet__username-date">
              <span class="tweet__username">
                <a>{{tweet.user}}</a>
              </span>
              <span class="tweet__date">{{tweet.date | moment("dddd, MMMM Do YYYY")}}</span>
            </span>
            <p class="tweet__content">{{tweet.body}}</p>
            <div class="tweet__form">
              <button class="btn tweet__delete" @click="deleteTweet(tweet.id)">Delete</button>
            </div>
          </div>
          <div
            v-for="comment in tweet.comments"
            v-bind:key="comment.id"
            class="col-12 tweet__comments"
          >
            <hr>
            <img class="tweets__comment-image" src="http://via.placeholder.com/20x20">
            <span class="tweet__username-date">
              <span class="tweet__username">{{comment.user}}</span>
              <span class="tweet__date">{{comment.createdAt | moment("dddd, MMMM Do YYYY")}}</span>
            </span>
            <p class="tweet__content">{{comment.body}}</p>
          </div>

          <hr>
          <div class="col-12 tweet__coment-form">
            <textarea v-model="commentText" name="body"></textarea>
            <button class="btn" @click="setText(tweet.id)">Comment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var date = Date.now();
const sourceOfTruth = {
  tweets: [
    {
      id: 1,
      user: "Jolan Taelman",
      body: "Tweet 1",
      date: date,
      comments: [
        {
          id: 1,
          body: "comment 1",
          user: "username",
          createdAt: date,
          commenterPicture: "http://via.placeholder.com/20x20"
        }
      ]
    },
    {
      id: 2,
      user: "Jolan Taelman",
      body: "Tweet 2",
      date: date,
      comments: []
    },
    {
      id: 3,
      user: "Jolan Taelman",
      body: "Tweet 3",
      date: date,
      comments: []
    }
  ]
};

export default {
  name: "TweetList",
  methods: {
    deleteTweet: function(id) {
      var newtweets = sourceOfTruth.tweets;
      //eslint-disable-next-line
      console.log("newtweets before", newtweets);
      newtweets.splice(id - 1, 1);
      //eslint-disable-next-line
      console.log("newtweets after", newtweets);
      sourceOfTruth.tweets = newtweets;
    },
    setText: function(id) {
      var newComments = sourceOfTruth.tweets[id - 1].comments;
      //eslint-disable-next-line
      console.log(newComments);
      var commentoText = this.commentText;
      newComments.push({
        id: sourceOfTruth.tweets[id - 1].comments.length + 1,
        body: commentoText,
        user: "current user",
        createdAt: Date.now(),
        commenterPicture: "http://via.placeholder.com/20x20"
      });
    }
  },
  data() {
    return {
      tweets: [
        {
          id: 1,
          user: "Jolan Taelman",
          body: "Tweet 1",
          date: date,
          comments: [
            {
              id: 1,
              body: "comment 1",
              user: "username",
              createdAt: date,
              commenterPicture: "http://via.placeholder.com/20x20"
            }
          ]
        },
        {
          id: 2,
          user: "Jolan Taelman",
          body: "Tweet 2",
          date: date,
          comments: []
        },
        {
          id: 3,
          user: "Jolan Taelman",
          body: "Tweet 3",
          date: date,
          comments: []
        }
      ],
      date: date,
      sourceOfTruth: sourceOfTruth,
      commentText: ""
    };
  }
};
</script>

<style lang="scss">
/* Tweets */

@import "../abstracts/placeholders";
@import "../abstracts/variables";

.tweet {
  @extend %block-content !optional;
  color: $white;
}

.tweet::after {
  content: "";
  clear: both;
  display: block;
}

.tweet__image {
  border-radius: 50%;
  height: 40px;
  border: 1px solid $black;
}

.logout-image {
  height: 20px;
}

.tweet__description {
  padding-left: 25px;
}

.tweet__content {
  margin: 5px 0 10px;
  word-wrap: break-word;
}

.tweet__form {
  .tweet__edit {
    background-color: $jungle-green;

    &:hover {
      background-color: lighten($jungle-green, 5%);
    }
  }
  .tweet__delete {
    margin-left: 10px;
    background-color: $go-red;

    &:hover {
      background-color: lighten($go-red, 5%);
    }
  }
}

.tweet__username a {
  color: $white;
  font-weight: bold;
}

.tweet__date,
.tweet__date a {
  color: $grey-blue;
}

.tweet textarea.edit-tweet {
  margin: 10px 0 15px;
}

.tweet textarea {
  font-size: 13px;
  background-color: $dark-jungle-green;
  border-color: $black;
  display: block;
  padding: 6px 12px;
  color: $white;
  border-radius: 4px;
  width: 100%;
}

.tweet__comments .btn {
  margin: auto;
  display: block;
  margin-top: 10px;
}

.tweets__comment-image {
  border-radius: 50%;
  height: 20px;
  border: 1px solid $black;
  margin-right: 6px;
}

.notification-icon {
  margin-right: 10px;
}
</style>

