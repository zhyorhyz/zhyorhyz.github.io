var posts=["posts/7bac32d9.html","posts/82ae12b6.html","posts/ab5ccd86.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}