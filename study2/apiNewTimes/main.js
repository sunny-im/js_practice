let news = [];

// await을 사용하기 위해서 함수를 async 처리 (await과 async는 셋트!)
const getLatesNews = async() => {
    // URL 클래스 사용..url 분석툴
    let url = new URL('https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=travel&page_size=10');
    console.log('url',url);
    let header = new Headers({
        'x-api-key' : 'g3nyhor_1Ewray6Ccz7zSMWu_XNlXZjqd-naY_gJBV4'
    })
    // 데이터를 보내는 방법=> ajax, http, fetch.. 데이터를 받아서 보여줘야 하므로 받을때까지 기다리기
    let response = await fetch(url,{headers:header})
    let data = await response.json();
    console.log('response',response);
    console.log('data',data)
    news = data.articles;
    console.log('news',news);

    render();
}
/*
API 호출 로직
const callAPI = async() =>{
    let url = new URL(`url주소`)
    let header = new Headers({헤더내용}) // 이건 필요한 경우만
    let response = await fetch(url,{headers:header})
    let data = await response.json()
}
*/

const render = () =>{
    let newsHTML = '';
    newsHTML = news.map((item => {
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="newsImgSize" src="${item.media}" alt="">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>${item.summary}</p>
            <div>${item.rights} * ${item.published_date}</div>
        </div>
    </div>`
    })).join('');  // join : array -> string으로 return 
    document.getElementById("news-board").innerHTML = newsHTML; 
};

getLatesNews();

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