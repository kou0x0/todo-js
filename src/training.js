import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incompleteList").removeChild(target);
};

// 未完了リストに追加ウする関数
const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");
  li.className = "listRow";

  // div生成
  const div = document.createElement("div");
  div.innerText = text;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //li以下を初期か
    addTarget.textContent = null;
    //divタグ生成
    const div = document.createElement("div");
    div.innerText = text;
    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 推された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("completeList").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // liタグの子要素に各要素を設定
    addTarget.appendChild(div);
    addTarget.appendChild(backButton);
    //完了リストに追加
    document.getElementById("completeList").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incompleteList").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());