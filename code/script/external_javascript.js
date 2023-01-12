// ======================================================================================================================== 내가 만든 javascript 시작
// ======================================================================================================================== 낮 모드 토글 시작
function Theme() {
    var element = document.body;
    element.classList.toggle("day-mode")
}
// ======================================================================================================================== 낫 모드 토글 끝
// ======================================================================================================================== 글목록 시작
function fetchPost(identifier) {
    fetch(identifier).then(function (reponse) {
        reponse.text().then(function (text) {
            const divpost = document.querySelector("#post");
            const post = document.createElement("article");
            post.innerHTML = text;
            divpost.appendChild(post)
        })
    })
}

function fetchListOfPosts(url) {
    fetch(url).then(function (reponse) {
        reponse.json().then(function (text) {
            for (var i in [...Array(text['data'].length).keys()]) {
                const board = document.querySelector("#board");
                const tr = document.createElement("tr");
                tr.innerHTML = '<td>번호</td>' + '<td>'+text['data'][i]['date']+'</td>' + '<td><a onclick="fetchPost(\''+text['data'][i]['identifier']+'\')">'+text['data'][i]['title']+'</a></td>' + '<td>조회수</td>'+'<td>댓글수</td>';
                board.appendChild(tr);
            }
        })
    })
}

// ======================================================================================================================== 글목록 끝
// ======================================================================================================================== test 시작
// '<pre>' + text['data'][0]['title'] + '&nbsp' + text['data'][0]['creator'] + '&nbsp' + text['data'][0]['date'] + '</pre>';
// ======================================================================================================================== test 끝
// ======================================================================================================================== 내가 만든 javascript 끝