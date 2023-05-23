# bloggit-side-server

## Endpoints:

### GET:

  #### - All Users:
    /api/users/all

  #### - User By ID:
    /api/users/--userId--

  #### - All Blogs:
    /api/blogs/all

  #### - All Posts:
    /api/posts/all
  
  #### - Post By ID:
    /api/posts/--postId--
  
  #### - Post Comments:
    /api/comments/--postId--

  #### - Comment Responses:
    /api/responses/--postId--/--commentId--

### PUT:

  #### - Like/Unlike Post:
    /api/posts/like/--Post._id--

    {
      "userId": --User._id--
    }
  
  #### - Like/Unlike Comment:
    /api/comments/like/--Post._id--

    {
      "userId": --User._id--,
      "commentId": --Comment._id--
    }

  #### - Like/Unlike Response:
    /api/responses/like/--Post._id--/--Comment._id--

    {
      "userId": --User._id--,
      "responseId": --Response._id--
    }

### POST:

  #### - Create User:
    /api/users/create

    {
      "userId": --AuthUserId--,
      "userName": --AuthUserName--,
      "email": --AuthUserEmail--,
      "profileImage": --AuthImageUrl--,
      "role": "ADMIN" || "BASIC"
    }

  #### - Create Blog:
    /api/blogs/create

    {
      "userId": "User._id",
      "category": --categoryName--
    }

  #### - Create Post:
    /api/posts/create

    {
      "blogId": --Blog._id--,
      "title": --articleTitle--,
      "content": --htmlArticleContent--
    }

  #### - Create Comment:
    /api/comments/create

    {
      "postId": --Post._id--,
      "userId": --User._id--,
      "userName": --userName--,
      "comment": --commentText--
    }
  
  #### - Create Response:
    /api/responses/create/--Post._id--

    {
      "commentId": --Comment._id--,
      "userId": --User._id--,
      "userName": --userName--,
      "response" --responseText--:
    }