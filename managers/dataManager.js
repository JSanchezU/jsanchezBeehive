class DataManager {

	constructor() {
		this.bees = [];
		this.currentBee = null;
		this.navManager = null;
		this.user = new Bee(100, 'Javier', 'Javierimper', 'info@javierdeveloper.website', '506 83025817', new Address('Cartago', new Geo(0.0, 0.0), 'Calle Sanchez', '1000', '1000/1000'));
		this.bees.push(this.user);
	}

	setCurrentBee(bee) {
		this.currentBee = bee;
	}

	addPost(post) {
		this.bees.forEach(function (bee) {
			if (post.userId == bee.id) {
				bee.posts.push(post);
			}
		});
	}

	addComment(comment) {
		this.bees.forEach(function (bee) {
			bee.posts.forEach(function (post) {
				if (post.id == comment.postId) {
					post.comments.push(comment);
				}
			});
		});
	}

	showBeePosts(bee) {
		this.currentBee = bee;
		this.navManager.showBeePosts();
	}

	showBeeAlbums(bee) {
		this.currentBee = bee;
		this.navManager.showBeeAlbums();
	}

	showBeeTodos(bee) {
		this.currentBee = bee;
		this.navManager.showBeeTodos();
	}
}