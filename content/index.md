---
title: このサイトはなんじゃらほい
author: bambshot
---

# てすとつぇうと

## 環境

- Windows 10
- VS Code v1.35.0

## 概要

`Ctrl` + `Shift` + `F`でワークスペースにあるファイルの文字検索、置換が行える。正規表現も使えるし、とても重宝していた。
しかし、デフォルト設定ままの場合、文字コードが UTF-8 のファイルしかひっかからず、Shift-JIS や EUC-JP が文字コードのファイルは抜け漏れてしまう。

## どういうこと？

別々の文字コードを使った同じ文字列のファイルを 3 個用意して...
![origin.PNG](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/326103/fee29045-1c1f-d86e-2be4-0e622b55daa6.png)

日本語の「チト」で検索してみる。
![3file.PNG](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/326103/b0a7f817-731a-9d9f-a0c2-1dcfd20af295.png)
引っかかるじゃん！とおもったけど...

UTF-8 と EUC-JP のファイルを閉じて再度検索してみると、
![single.PNG](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/326103/69ae1f50-4d9c-f7ec-8d59-1171b4643f5b.png)
EUC-JP でひっかからなくなった。

## なんで？

https://qiita.com/EbXpJ6bp/items/e6a0ed52bdcb60bfd145

> 検索するときエンコードを自動的に判別しない問題

ここにすべてが書いてあった。
どうやら設定がデフォルトだと、全てのファイルの文字コードを UTF-8 として開き、grep しているために引っかからない...とのことである。
だが、検索するとき文字コードを自動的に判別しないだけで、エディタでそのファイルの適切な文字コードで開けている状態であれば、UTF-8 でなくても検索にはひっかかるようだ。上の例では、EUC-JP のファイルは、閉じて文字コードを指定しなかったために UTF-8 として grep し、ひっかからなかったが、Shift-JIS のファイルはエディタ上でしっかりと Shift-JIS で指定してあげていたので、ひっかかった。

（基本的に半角アルファベットであれば、文字化けを起こすことはないので、grep に問題はないはず。）
![eng.PNG](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/326103/b9727ca7-8ba3-d31e-ad07-fff980ff2d7b.png)

## 対策

日本語を grep したいときには、引っかからないので、どうにかして検索する。

### VS Code でどうにかする

拡張子別には文字コードを指定できるようだけど、ファイルの量が膨大かつ、拡張子が同じでも文字コードが違うこともある環境だったのでそういうわけにはいかなかった。
今のところ、VS Code で他ファイルと文字コードが異なるファイルをすべて開いて指定してあげるか、拡張子別に文字コードを指定するのを拡張子の数だけ grep する方法以外思いつかない。
ファイル数が少ない場合のみ有効。
面倒だし『VS Code でどうにかする』のは正直オススメしない。

VS Code だけで完結するなにか良い方法があれば教えてください。

### あきらめて他ツールでどうにかする

#### TresGrep

http://hp.vector.co.jp/authors/VA055804/TresGrep/
文字コードが異なっていても問題なく grep できた。

## 感想

grep するときだけ別のソフトを開くのもなんかバカバカしいので、複数の文字コードがあっても検索できるようになってほしい。

~~過去の作業に不備のあった可能性が...~~
**絶望と仲良く**

## コードテスト

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

// コメントアウト
http
  .createServer((req, res) => {
    bodyParser.parse(req, (error, body) => {
      res.end(body)
    })
  })
  .listen(3000)
```
