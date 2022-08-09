import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");
  li.className = "listRow";

  // div生成
  const div = document.createElement("div");
  div.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ<li>を完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ<li>を完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //　divタグの子要素に各要素を設定
  li.appendChild(div);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incompleteList").appendChild(li);

  //未完了リストから指定の要素を削除
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incompleteList").removeChild(target);
  };
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
