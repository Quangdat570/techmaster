
const getPost = () => {
   return axios.get("https://jsonplaceholder.typicode.com/posts");
};


const createPostCard = ({id, title, body}) => {
    const postCard = document.createElement("div");
    postCard.classList.add("post-item");

    const postid = document.createElement("div");
    postid.classList.add("post-id");
    postid.textContent = id;

    const posttitle = document.createElement("h3");
    posttitle.classList.add("title");
    const a = document.createElement("a");
    a.textContent = title;
    a.href = "https://jsonplaceholder.typicode.com/posts";
    posttitle.append(a);

    const postbody = document.createElement("p");
    postbody.classList.add("body");
    postbody.textContent = body;

    postCard.append(postid,posttitle,postbody);
    return postCard;
};

const renderPostList = async () => {
    try {
        const { data } = await getPost();
        const posts = data.map(createPostCard);
        document.querySelector(".post-list").append(...posts);
    } catch(err) {
        console.log(err);
    }
};

renderPostList();