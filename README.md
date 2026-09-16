# Week07 TODOリスト

POSSE PH1 Week07「DOM操作・イベント」の課題です。

## 制約への対応

- 見た目の作成にはCSSファイルを使わず、Tailwind CSSのユーティリティクラスだけを使用しました。
- JavaScriptは外部ファイルに分けず、index.htmlのscriptタグ内に記述しました。
- JavaScriptはWeek07で扱うDOM操作とクリックイベントの範囲に絞っています。

## 使い方

1. index.htmlをブラウザで開く
2. 入力欄にタスクを入力して「追加」を押す
3. 「完了」で打ち消し線を切り替える
4. 「削除」でタスクをリストから取り除く

## 実装メモ

### 処理の流れ

追加ボタンのclickイベントを受け取り、input.valueから入力値を取得します。trim()で前後の空白を取り除き、空文字の場合は追加しません。値がある場合はcreateElementでタスク要素とボタンを作り、appendChildでリストに追加します。追加や削除の後はtextContentとchildren.lengthで件数を更新します。

### 要素の取得

画面に最初からある入力欄、追加ボタン、リスト、空状態メッセージ、件数表示をquerySelectorで取得しました。

### classList.toggle

完了ボタンを押すとclassList.toggleでTailwindのline-throughとtext-slate-400を切り替えます。これにより、タスクの完了状態を視覚的に確認できます。

### 詰まった場所

JavaScriptを外部ファイルからindex.htmlへ移す際、HTMLの表示に必要なTailwind CDNのscriptと、処理用のscriptを分けて整理しました。また、動的に作成したボタンにもcreateTaskの中でclickイベントを登録しました。

### 判断の記録

- 選択肢A：削除ボタンで確認なしに即時削除する
- 選択肢B：削除前に確認ダイアログを表示する
- 採用理由：小さなTODOリストなので、操作を止めない即時削除を採用しました。削除ボタンは赤系、完了ボタンは緑系にして役割を分けています。

### 表示確認

- スマホ幅375px：入力欄と追加ボタンが収まり、タスクも確認
- PC幅1280px：コンテンツが中央に配置されることを確認
- タスク追加、空入力、完了切り替え、削除、件数表示を確認
- Consoleエラーがないことを確認

### AIとの比較

AIが正しく実装できていた点は、querySelector、createElement、appendChild、addEventListener、classList.toggleを使った基本的なDOM操作です。

不足しやすい点は、空白だけの入力をtrim()で除外すること、スマホ幅での表示、Tailwindだけで見た目を作ること、JavaScriptをHTML内にまとめることです。これらは自分で確認して修正しました。

## ファイル構成

- index.html：画面、Tailwindクラス、JavaScript
- style.css：使用しない
- script.js：使用しない
