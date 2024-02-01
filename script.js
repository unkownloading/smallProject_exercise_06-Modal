'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

/*  可以再簡化 看下面
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    // 確認有無click成功
    console.log('btn clicked');
    // click觸發
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
*/
/* 這兩個功能一樣可以整合
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
 */

//簡化後 把openMoadl創建一個function等於值 帶入click觸發
const openModal = function () {
  // 確認有無click成功
  console.log('btn clicked');
  // click觸發
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// 這個變量就是函數的值
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// 代入 openModal ok
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// 事件監聽引用這個變量的值 click , 值
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// 使用按鍵esc來關閉
document.addEventListener('keydown', function (e) {
  console.log(e);
  const el = e.key;
  if (el === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
