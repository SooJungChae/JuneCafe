const menu = [
  {
    "id": 1,
    "name": "Americano",
    "type": "coffee",
    "price": 3000
  },
  {
    "id": 2,
    "name": "Latte",
    "type": "coffee",
    "price": 3500
  },
  {
    "id": 3,
    "name": "Cytron tea",
    "type": "tea",
    "price": 2500
  },
  {
    "id": 4,
    "name": "Green tea",
    "type": "tea",
    "price": 2500
  },
  {
    "id": 5,
    "name": "Ice choco blended",
    "type": "frappucino",
    "price": 2500
  }
];

// 테이블의 특정 컬럼을 링크 형식으로 만든다.
function linkFormatter (value, row) {
  return `<a href="detail.html">${value}</a>`;
}

// 페이지 로드되면 바로 테이블에 데이터를 넣는다.
(() => {
  const $table = $("#table");
  $table.bootstrapTable({
    data: menu
  });
})();
