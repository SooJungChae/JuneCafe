// webServer 에서 비동기로 데이터를 가져온다.
async function getData(url = '') {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
  })
  return await response;
}

// 테스트서버에서 커피 메뉴를 가져온다.
const getCoffeeMenu = async () => {
  var $table = $("#table");
  
  getData('http://localhost:3000/')
      .then((data) => {
        // 서버에서 가져온 데이터를 화면에 뿌려준다.
        data.json().then(response => {
          // bootstrap table 에 데이터를 연동한다.
          $table.bootstrapTable({
            data: response.data
          });
        });
      });
};

// 테이블의 특정 컬럼을 링크 형식으로 만든다.
function linkFormatter (value, row) {
  return `<a href="detail.html">${value}</a>`;
}

// 페이지 로드되면 바로 실행한다.
(() => {
  getCoffeeMenu();
})();