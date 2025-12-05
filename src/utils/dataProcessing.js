const getTopCommentedPosts = (posts, comments) => {
  const commentsByPostCount = comments.reduce((acc, comment) => {
    acc[comment.postId] = (acc[comment.postId] || 0) + 1;
    return acc;
  }, {});

  const postCommentsArray = Object.keys(commentsByPostCount).map((postId) => ({
    postId: parseInt(postId),
    count: commentsByPostCount[postId],
  }));

  postCommentsArray.sort((a, b) => b.count - a.count);
  const top5Raw = postCommentsArray.slice(0, 5);

  const top5Posts = top5Raw.map((item) => {
    const postDetail = posts.find((p) => p.id === item.postId);
    return {
      id: item.postId,
      title: postDetail ? postDetail.title : "Unknown post",
      commentsCount: item.count,
    };
  });

  return top5Posts;
};

const getUserActivityChartData = (users, posts) => {
  const postsByUserCount = posts.reduce((acc, post) => {
    acc[post.userId] = (acc[post.userId] || 0) + 1;
    return acc;
  }, {});

  return users.map((user) => ({
    username: user.username,
    postsCount: postsByUserCount[user.id] || 0,
  }));
};

export const calculateAllMetrics = (users, posts, comments, todos) => {
  const totalUsers = users.length;
  const totalPosts = posts.length;
  const totalComments = comments.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  // metrics card

  const avgPostsPerUser = totalPosts / totalUsers;

  const avgCommentsPerPost = totalComments / totalPosts;

  const percentageTodos = (completedTodos / totalTodos) * 100;

  const top5CommentedPosts = getTopCommentedPosts(posts, comments);

  // charts

  const todosChartData = {
    completed: completedTodos,
    uncompleted: totalTodos - completedTodos,
  };

  const userActivityChartData = getUserActivityChartData(users, posts);
  return {
    metrics: {
      totalUsers: totalUsers,
      avgPostsPerUser: avgPostsPerUser.toFixed(2),
      avgCommentsPerPost: avgCommentsPerPost.toFixed(2),
      percentageTodos: percentageTodos.toFixed(2),
      top5CommentedPosts: top5CommentedPosts,
    },
    charts: {
      todos: todosChartData,
      activity: userActivityChartData,
    },
  };
};
