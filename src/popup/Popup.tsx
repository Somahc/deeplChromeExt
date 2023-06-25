import { Counter } from '../app/features/counter';

const Popup = () => {
  document.body.className = 'w-[30rem] h-[10rem]';

  return (
    <>
      <div className="flex justify-center mt-2 text-base">
        <p>どの言語に翻訳しますか？</p>
        <select name="target_lang">
          <option value="EN">英語</option>
          <option value="KO">韓国語</option>
          <option value="ZH">中国語</option>
          <option value="JA">日本語</option>
        </select>
      </div>
      {/* <Counter /> */}
    </>
  );
};

export default Popup;
