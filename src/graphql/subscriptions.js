/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChef = /* GraphQL */ `
  subscription OnCreateChef {
    onCreateChef {
      id
      username
      image
      biography
      n_followers
      n_following
      n_remakes
      followers {
        items {
          id
          followingID
          followerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      following {
        items {
          id
          followingID
          followerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      recipes {
        items {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      posts {
        items {
          id
          title
          caption
          image
          type
          createdAt
          n_likes
          n_comments
          n_tips
          rating
          chefID
          hashtags
          ingredientList
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChef = /* GraphQL */ `
  subscription OnUpdateChef {
    onUpdateChef {
      id
      username
      image
      biography
      n_followers
      n_following
      n_remakes
      followers {
        items {
          id
          followingID
          followerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      following {
        items {
          id
          followingID
          followerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      recipes {
        items {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      posts {
        items {
          id
          title
          caption
          image
          type
          createdAt
          n_likes
          n_comments
          n_tips
          rating
          chefID
          hashtags
          ingredientList
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChef = /* GraphQL */ `
  subscription OnDeleteChef {
    onDeleteChef {
      id
      username
      image
      biography
      n_followers
      n_following
      n_remakes
      followers {
        items {
          id
          followingID
          followerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      following {
        items {
          id
          followingID
          followerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      recipes {
        items {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      posts {
        items {
          id
          title
          caption
          image
          type
          createdAt
          n_likes
          n_comments
          n_tips
          rating
          chefID
          hashtags
          ingredientList
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
      id
      title
      image
      serves
      cook_time
      procedure {
        step
      }
      n_tips
      chefID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
      id
      title
      image
      serves
      cook_time
      procedure {
        step
      }
      n_tips
      chefID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
      id
      title
      image
      serves
      cook_time
      procedure {
        step
      }
      n_tips
      chefID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      caption
      image
      type
      createdAt
      n_likes
      n_comments
      n_tips
      rating
      chefID
      hashtags
      ingredientList
      ingredients {
        quantity
        type
      }
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      recipe {
        id
        title
        image
        serves
        cook_time
        procedure {
          step
        }
        n_tips
        chefID
        postID
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      caption
      image
      type
      createdAt
      n_likes
      n_comments
      n_tips
      rating
      chefID
      hashtags
      ingredientList
      ingredients {
        quantity
        type
      }
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      recipe {
        id
        title
        image
        serves
        cook_time
        procedure {
          step
        }
        n_tips
        chefID
        postID
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      caption
      image
      type
      createdAt
      n_likes
      n_comments
      n_tips
      rating
      chefID
      hashtags
      ingredientList
      ingredients {
        quantity
        type
      }
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      recipe {
        id
        title
        image
        serves
        cook_time
        procedure {
          step
        }
        n_tips
        chefID
        postID
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onCreateFollow = /* GraphQL */ `
  subscription OnCreateFollow {
    onCreateFollow {
      id
      followingID
      followerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollow = /* GraphQL */ `
  subscription OnUpdateFollow {
    onUpdateFollow {
      id
      followingID
      followerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollow = /* GraphQL */ `
  subscription OnDeleteFollow {
    onDeleteFollow {
      id
      followingID
      followerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStash = /* GraphQL */ `
  subscription OnCreateStash {
    onCreateStash {
      id
      createdAt
      chefID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onUpdateStash = /* GraphQL */ `
  subscription OnUpdateStash {
    onUpdateStash {
      id
      createdAt
      chefID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onDeleteStash = /* GraphQL */ `
  subscription OnDeleteStash {
    onDeleteStash {
      id
      createdAt
      chefID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onCreateTip = /* GraphQL */ `
  subscription OnCreateTip {
    onCreateTip {
      id
      createdAt
      text
      chefID
      recipeID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      recipe {
        id
        title
        image
        serves
        cook_time
        procedure {
          step
        }
        n_tips
        chefID
        postID
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      remake {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onUpdateTip = /* GraphQL */ `
  subscription OnUpdateTip {
    onUpdateTip {
      id
      createdAt
      text
      chefID
      recipeID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      recipe {
        id
        title
        image
        serves
        cook_time
        procedure {
          step
        }
        n_tips
        chefID
        postID
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      remake {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onDeleteTip = /* GraphQL */ `
  subscription OnDeleteTip {
    onDeleteTip {
      id
      createdAt
      text
      chefID
      recipeID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      recipe {
        id
        title
        image
        serves
        cook_time
        procedure {
          step
        }
        n_tips
        chefID
        postID
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      remake {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      createdAt
      chefID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      createdAt
      chefID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      createdAt
      chefID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      createdAt
      text
      chefID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      createdAt
      text
      chefID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      createdAt
      text
      chefID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        rating
        chefID
        hashtags
        ingredientList
        ingredients {
          quantity
          type
        }
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onCreateHashtag = /* GraphQL */ `
  subscription OnCreateHashtag {
    onCreateHashtag {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateHashtag = /* GraphQL */ `
  subscription OnUpdateHashtag {
    onUpdateHashtag {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteHashtag = /* GraphQL */ `
  subscription OnDeleteHashtag {
    onDeleteHashtag {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient {
    onCreateIngredient {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient {
    onUpdateIngredient {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient {
    onDeleteIngredient {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
