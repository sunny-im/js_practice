let news = [];
let menus = document.querySelectorAll(".menus button")
let searchBtn = document.getElementById("search-button");

menus.forEach(menu => menu.addEventListener("click", (e) => getNewsByTopic(e)));

/*
API 호출 로직
const callAPI = async() =>{
    let url = new URL(`url주소`)
    let header = new Headers({헤더내용}) // 이건 필요한 경우만
    let response = await fetch(url,{headers:header})
    let data = await response.json()
}
*/
let url = "";
// await을 사용하기 위해서 함수를 async 처리 (await과 async는 셋트!)
const getNews = async() => {
    let header = new Headers({
        'x-api-key' : 'g3nyhor_1Ewray6Ccz7zSMWu_XNlXZjqd-naY_gJBV4'
    })
    // 데이터를 보내는 방법=> ajax, http, fetch.. 데이터를 받아서 보여줘야 하므로 받을때까지 기다리기
    let response = await fetch(url,{headers:header})
    let data = await response.json();
    news = data.articles;
    render();
}

const getLatesNews = async() => {
    // URL 클래스 사용..url 분석툴
    url = new URL('https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=travel&page_size=10');
    getNews();
}

const getNewsByKeyword = async () => {
    //검색 키워드 읽어오기
    let keyword = document.getElementById("search-input").value;
    url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&countries=KR&page_size=10`);
    getNews();
}

const getNewsByTopic = async (e) => {
    console.log("메뉴",e.target.textContent);
    let topic = e.target.textContent.toLowerCase();
    console.log('topic',topic)
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`);
    getNews();
}

const render = () =>{
    let newsHTML = '';
    newsHTML = news.map((item => {
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="newsImgSize" src="${item.media}" alt="">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>${item.summary.substr(0,200)}...</p>
            <div>${item.rights || "no source"} * ${moment(item.published_date).fromNow()} </div>
        </div>
    </div>`
    })).join('');  // join : array -> string으로 return 
    document.getElementById("news-board").innerHTML = newsHTML; 
};

const openNav = () => {
    document.getElementById("mySidenav").style.width="145px";
};
const closeNav = () => {
    document.getElementById("mySidenav").style.width="0";
}

const openSearchBox = () => {
    let inputArea = document.getElementById("input-area");
    if (inputArea.style.display === "inline") {
        inputArea.style.display = "none";
    } else {
    inputArea.style.display = "inline";
    }
}
searchBtn.addEventListener("click",getNewsByKeyword);
getLatesNews();

