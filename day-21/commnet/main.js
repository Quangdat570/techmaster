const getComment = () => {
    return axios.get("https://jsonplaceholder.typicode.com/comments");
};

// const e = (tag,attributes,...children) => {
//     // tạo thẻ tương úng với tag
//     const element = document.createElement(tag);

//     //gán tất cả những thuộc tính
//     Object.assign(element,attributes);
//     element.append(...children);
//     return element;
// }

// const createCard = ({id,name,email,body}) => {
//     return e("tr",
//     e("td",id),
//     e("td",name),
//     e("td",email),
//     e("td",body)
//     );
    
// };

const createCard = ({id,name,email,body}) => {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.textContent = id;

    const td2 = document.createElement("td")
    td2.textContent = name;

    const td3 = document.createElement("td")
    td3.textContent = email;

    const td4 = document.createElement("td")
    td4.textContent = body;

    tr.append(td1,td2,td3,td4);
    return tr;
}

const renderComment = async () => {
    try {
        const { data } = await getComment();
        const comment = data.map(createCard);
        document.querySelector(".list").append(...comment);
    } catch(err) {
        console.log(err);
    }
};

renderComment();