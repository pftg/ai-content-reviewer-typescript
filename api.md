# Reviews

Types:

- <code><a href="./src/resources/reviews.ts">Review</a></code>
- <code><a href="./src/resources/reviews.ts">ReviewCreate</a></code>
- <code><a href="./src/resources/reviews.ts">ReviewResponse</a></code>
- <code><a href="./src/resources/reviews.ts">ReviewListResponse</a></code>

Methods:

- <code title="get /reviews/{id}">client.reviews.<a href="./src/resources/reviews.ts">retrieve</a>(id) -> Review</code>
- <code title="patch /reviews/{id}">client.reviews.<a href="./src/resources/reviews.ts">update</a>(id, { ...params }) -> ReviewResponse</code>
- <code title="get /reviews">client.reviews.<a href="./src/resources/reviews.ts">list</a>({ ...params }) -> ReviewListResponse</code>
- <code title="post /reviews">client.reviews.<a href="./src/resources/reviews.ts">submit</a>({ ...params }) -> ReviewResponse</code>

# Status

Types:

- <code><a href="./src/resources/status.ts">StatusCheckResponse</a></code>

Methods:

- <code title="get /status/{job_id}">client.status.<a href="./src/resources/status.ts">check</a>(jobID) -> StatusCheckResponse</code>
