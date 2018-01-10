# 何謂狀態管理 (State Management)
前端工程師經常需要面對所謂的狀態管理，至於什麼是狀態 (State) 呢？舉幾個例子： 

## 狀態 (State)

* 使用者登入狀態：使用者註冊完剛進入網站時，這時的狀態為“未登入”，使用帳號登入完，這時候狀態為“登入”，如果網站提供“記住我”的功能時，當使用者關掉瀏覽器，下次打開瀏覽器進入這個網站時，這時候的狀態為“登入”，如果“記住我”的期限是三天，當第四天使用者進入網站時，這時的狀態為“未登入”...

* 購物車狀態：使用者在不同的產品頁面可以隨時加入或拿掉購物車裡的產品跟數量，甚至要記住使用者購物車的狀態即使在不同時間（今天放，明天結帳），不同瀏覽器上（手機，電腦上）

* 訊息狀態：一些社群軟體提供已讀，未讀的訊息狀態，使用者在不同的頁面會期待統一的未讀狀態

## 如何管理狀態
一般而言，前端工程師會使用像是 Cookie, local storage... 等等瀏覽器端的儲存藉由跟後端的連結來統一處理狀態問題，因為涉及不同的頁面都會使用到這些狀態，譬如使用者登入狀態會影響可以允許進入的網頁，前端必須要統一處理這些狀態，以免造成狀態不及時造成的問題。

一個有名的問題是臉書的已讀訊息不一致的臭蟲，為此臉書發展出一套稱為 [Flux](https://facebook.github.io/flux/docs/in-depth-overview.html#content) 的方法來處理狀態問題，其中最主要的觀念是單一流向的狀態鍊，也就是不將狀態視為一個類似公域變數般，而是一連串的狀態流，而這個狀態流的流向是單一方向，也就是不能直接回到其中一個狀態，每次的事件都會產生一個新的狀態，這樣做法的好處是可追蹤，也就是運用一些工具，像是 Chrome Redux Devtool，可以清楚了解狀態發生的過程，進而處理程式流程的相關問題.

[![Yes](https://img.youtube.com/vi/nYkdrAPrdcw/0.jpg)](https://www.youtube.com/watch?v=nYkdrAPrdcw)

## 管理狀態的工具

React 是臉書背書的框架，當然也是最早運用 Flux，也就是 Redux, 隨後 Angular, Vue 也都發展出類似的工具, Vue 的工具是 Vuex, 而 Angular 自己本身跟 RX 合作，發展出 ngrx/store，這是運用 Flux 的想法，運用 [Reactive Extention](http://reactivex.io) 的 Observable 實作的工具。 Observable 本身就是資料流的概念，確實非常適合於 Flux 的實作，接下來的文章會繞著這個主題提供一些自己查到的資料，來跟大家分享，有關的主題大概如下

* 基礎介紹 rx/js
* 基礎介紹 Flux
* Javascript 的 pure function 跟 spread syntax
* ngrx/store 的基礎介紹
* ngrx/store 的 action
* ngrx/store 的 reducer
* ngrx/store 的 effect
* 一個 Angular 實例

## 文章目錄
1. [[ngrx/store-1] 有關前端的狀態管理](https://ithelp.ithome.com.tw/articles/10191884)
2. [[ngrx/store-2] ngrx/store 用到的 Observable](https://ithelp.ithome.com.tw/articles/10192030)
3. [[ngrx/store-3] Observable 的 運算子 (Operator)](https://ithelp.ithome.com.tw/articles/10192178)
4. [[ngrx/store-4] 多重資料流的 Operators](https://ithelp.ithome.com.tw/articles/10192404)
5. [[ngrx/store-5] 高階 (High Order) Observable](https://ithelp.ithome.com.tw/articles/10192702)
6. [[ngrx/store-6] Flux 的基本概念](https://ithelp.ithome.com.tw/articles/10192962)
7. [[ngrx/store-7] 純函數 (Pure Function)](https://ithelp.ithome.com.tw/articles/10193249)
8. [[ngrx/store-8] Javascript Mutable 跟 Immutable 資料型態](https://ithelp.ithome.com.tw/articles/10193474)
9. [[ngrx-store-9] 用 Observable 來理解 Dispatcher 跟 Store](https://ithelp.ithome.com.tw/articles/10193689)
10. [[ngrx/store-10] Store 的大架構](https://ithelp.ithome.com.tw/articles/10193934)
11. [[ngrx/store-11] Store 架構加入最簡單的 Reducer](https://ithelp.ithome.com.tw/articles/10194184)
12. [[ngrx/store-12] Store 加完整的 Reducer](https://ithelp.ithome.com.tw/articles/10194376)
13. [[ngrx/store-13] Store 加入 select](https://ithelp.ithome.com.tw/articles/10194608)
14. [[ngrx/store-14] 用 Angular 5  建立一個投顧網站 - 需求篇](https://ithelp.ithome.com.tw/articles/10194835)
15. [[ngrx/store-15] 投顧網站 - 設定篇](https://ithelp.ithome.com.tw/articles/10195047)
16. [[ngrx/store-16] Angular 網站實例之 - 首頁篇](https://ithelp.ithome.com.tw/articles/10195204)
17. [[ngrx/store-17] Angular 網站實例 - 使用者登入篇](https://ithelp.ithome.com.tw/articles/10195391)
18. [[ngrx/store-18] 網站實例 - 用 express 做後端](https://ithelp.ithome.com.tw/articles/10195589)
19. [ [ngrx/store-19] Angular 網站實例 - 使用者服務篇](https://ithelp.ithome.com.tw/articles/10195766)
20. [[ngrx/store-20] Angular 網站實例 - 記得我篇](https://ithelp.ithome.com.tw/articles/10195930)
21. [[ngrx/store-21] Angular 網站實例 - 記得我之二篇](https://ithelp.ithome.com.tw/articles/10196106)
22. [[ngrx/store-22] Angular 網站實例 - 會員篇之後端](https://ithelp.ithome.com.tw/articles/10196264)
23. [[ngrx/store-23] Angular 網站實例 - 會員報告摘要篇](https://ithelp.ithome.com.tw/articles/10196404)
24. [[ngrx/store-24] Angular 網站實例 - 會員報告篇](https://ithelp.ithome.com.tw/articles/10196549)
25. [[ngrx/store-25] ngrx/store 設定篇及會員篇之 Action, Reducer](https://ithelp.ithome.com.tw/articles/10196675)
