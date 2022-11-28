const myAppContainer = document.querySelector('#myAppContainer');
const imgContainer = document.querySelector('#movieImgSpace');
myAppContainer.addEventListener('submit', async (evt) => {  //evt is the event object..
    evt.preventDefault();
    if(imgContainer.childElementCount > 0) {
        //Logic is to remove the child one by one from the end.
        //we are taking the last child..
        let child = imgContainer.lastElementChild;
        while(child) {           //while child is not undefined.
            imgContainer.removeChild(child);   //remove the child..
            child = imgContainer.lastElementChild;; //update the child to the next last element.
        }
    }
    const searchedQuery = myAppContainer.elements.searchBox.value;
     const resp = await axios.get('https://api.tvmaze.com/search/shows',{
        params : {
            "q": searchedQuery
        }
    });
    const data = resp.data;
    appendImgs(data);
    myAppContainer.elements.searchBox.value = "";
});

const appendImgs = (data)=> {
    for(let obj of data) {
        if(obj.show.image) {
            const newImg = document.createElement('IMG');
            newImg.src = obj.show.image.medium;
            imgContainer.append(newImg);
        }
    }
};