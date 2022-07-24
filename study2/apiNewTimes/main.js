let news = [];
let page = 1;
let totalPage = 1;
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
    try {
        let header = new Headers({
            'x-api-key' : 'g3nyhor_1Ewray6Ccz7zSMWu_XNlXZjqd-naY_gJBV4'
        })
        // 데이터를 보내는 방법=> ajax, http, fetch.. 데이터를 받아서 보여줘야 하므로 받을때까지 기다리기
        url.searchParams.set('page',page);  // url에 &page=를 추가한다
        console.log("url",url);
        let response = await fetch(url,{headers:header})
        let data = await response.json();
        if(response.status == 200) {
            console.log("받은 데이터는",data);
            if(data.total_hits == 0) {
                page = 0;
                totalPage = 0;
                pagenation();
                throw new Error(`'${data.user_input.q}'로 검색 된 결가과 없습니다.`)
            }
            news = data.articles;
            totalPage = data.total_pages;
            page = data.page;
            console.log("news",news)
            render();
            pagenation();
        } else {
            page = 0;
            totalPage = 0;
            pagenation();
            throw new Error(data.message);
        }
    } catch(error) {
        console.log("잡힌 에러는", error.message)
        errorRender(error.message)
    }
}

const getLatesNews = async() => {
    // URL 클래스 사용..url 분석툴
    page = 1; // 새로운 거 검색때마다 1로 리셋
    url = new URL('https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=science&page_size=10');
    getNews();
}

const getNewsByKeyword = async () => {
    //검색 키워드 읽어오기
    let keyword = document.getElementById("search-input").value;
    page = 1;
    url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&countries=KR&page_size=10`);
    getNews();
}
 
const getNewsByTopic = async (e) => {
    console.log("메뉴",e.target.textContent);
    let topic = e.target.textContent.toLowerCase();
    page = 1;
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
            <a class="title" target="_blank" href="${item.link}"><h2>${item.title}</h2></a>
            <p>${item.summary == null || item.summary == "" ? "내용없음" : item.summary > 100 ? item.summary.substring(0,100)+"..." : item.summary}</p>
            <div>${item.rights || "no source"} , ${moment(item.published_date).fromNow()} </div>
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

const errorRender = (message) => {
    let errorHTML = `<div class="alert alert-danger text-center" role="alert"> ${message}</div>`
    document.getElementById("news-board").innerHTML = errorHTML
}

const pagenation = () => {
    let pagenationHTML = ``;
    // 전체 페이지 수
    // 현재 보고있는 페이지
    // 페이지 그룹
    let page_group = Math.ceil(page/5);
    // 마지막 페이지
    let last = page_group * 5;
    if (last > totalPage) {  //마지막 그룹이 5개 이하면
        last = totalPage; 
    }
    // 첫번째 페이지
    let first = last - 4 <= 0 ? 1 : last-4; //첫 그룹이 5 이하면
    // 첫~마지막 페이지 프린트

    if (first >=6) {
        pagenationHTML +=
        `<li class="page-item">
            <a class="page-link" href="#" aria-label="Previous" onclick="moveToPage(1)">
            <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous" onclick="moveToPage(${page-1})">
            <span aria-hidden="true">&lt;</span>
            </a>
        </li>`;
    }
    for (let i =first; i<= last; i++) {
        pagenationHTML += `<li class="page-item ${page==i?"active":""}"><a class="page-link" href="#" onclick="moveToPage(${i})">${i}</a></li>`
    }

    if (last < totalPage) {
        pagenationHTML += 
        `<li class="page-item">
            <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${page+1})">
            <span aria-hidden="true">&gt;</span>
            </a>
        </li><li class="page-item">
            <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${totalPage})">
            <span aria-hidden="true">&raquo;</span>
            </a>
        </li>`;
    }
    document.querySelector(".pagination").innerHTML = pagenationHTML;
}

const moveToPage = (pageNum) => {
    // 1.이동하고 싶은 페이지는?
    page = pageNum;
    console.log(page);
    // 2.이동하고 싶은 페이지를 가지고 api 다시 호출 
    getNews();
}
searchBtn.addEventListener("click",getNewsByKeyword);
document.getElementById("search-input").addEventListener("keyup", (e) => {
    if(e.keyCode === 13) {
        getNewsByKeyword();
    }
});

getLatesNews();

