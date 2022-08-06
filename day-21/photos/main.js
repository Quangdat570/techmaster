const getPhoto = () => {
    return axios.get("https://jsonplaceholder.typicode.com/photos");
};

const createPhotoCard = ({id,title,url,thumbnailUrl}) => {
    const photo = document.createElement("div");
    
    photo.classList.add("photos");

    const img = document.createElement("img");
    img.src = url;
    img.alt = thumbnailUrl;

    const p = document.createElement("p");
    p.classList.add("title");
    p.textContent = title;

    photo.append(img,p);
    return photo;
};

const renderPhoto = async () => {
    try {
        const { data } = await getPhoto();
        const photos = data.map(createPhotoCard);
        document.querySelector(".list").append(...photos);
    } catch(err) {
        console.log(err);
    }
};

renderPhoto();