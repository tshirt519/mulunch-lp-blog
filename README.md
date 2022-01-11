# Mulunch Landing Page + Blog Site（開発中）
こんにちは。このリポジトリでは、日本全国の「村」について楽しく学べるコミュニティ  
むらんちのランディングページとブログサイト（開発中）を掲載しています。  
HTML, CSS, Javasctriptで作成したものをReact(Next.js)~~とTailwind CSS~~で書き換えました。  
ブログサイトはRuby on Railsで開発し、ReactとDjangoに書き換えているところです。  
  
現在Vercelで公開しています。  
ランディングページ -> https://mulunch-lp-blog.vercel.app/  
ブログサイト -> https://mulunch-lp-blog.vercel.app/blog  
    
## ランディングページ（2021年7月）  
<img width="1680" alt="スクリーンショット 2021-07-31 15 02 24" src="https://user-images.githubusercontent.com/66429478/127730492-b1b3b043-7bfb-4554-a09f-c40d4883ce3a.png">
<img width="1680" alt="スクリーンショット 2021-05-18 23 02 06" src="https://user-images.githubusercontent.com/66429478/118669761-fc8d6d00-b830-11eb-9b4d-4d0b6462d219.png">
  
企画やデザインの段階から、コミュニティのメンバーから意見をもらいながら進めていきました。  
画像編集はIllustratorやPhotoshopを使用し、コンポーネントごとにコーディングとスタイリングをして、  
仲間から貰ったデザイン案に可能な限り近づけるように制作しました。  
  
レスポンシブのデザインカンプは制作していませんでしたが、flexを解除していく形で行いました。  
Reactの理解のため、APIやオブジェクトのデータのやりとりをして描画しています。  
（こちらのリポジトリではレスポンシブ対応は現在実装中です。）  
  
画像の加工からフルスクラッチに挑戦したことでまだまだ粗い点は残っていますが、  
このサイトの目的とする、むらんちへの参加に興味を持ってもらうという意味では  
なんとか最低限の品質が確保できたのではないかと判断し、次の技術に進むことにしました。  
  
## バージョン情報
- next: "11.0.1"
- react: "17.0.2"
- AWS S3
- ~~Tailwind CSS @2.2.7~~  
## Pages / Components
  
- Pages
1. Index(Home) Landing Page  
2. Blog  
  
- Components
1. Header
2. Top
3. Concept
4. Project
5. Topics
6. Village
7. Lunch
8. Access
9. Gallery
10. Join
11. Footer
12. Responsive
  
以上となります。  
ここまでご覧いただきまして、ありがとうございました。  
20211011(デジタルの日記念)
