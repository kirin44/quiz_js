(()=>{
  
  const quiz = [
    {
      question: '最も売れたゲーム機は次の内どれ？',
      answers: [
        'スーパーファミコン',
        'プレーステーション2',
        'ニンテンドースイッチ',
        'ニンテンドーDS'
      ],
      correct: 'ニンテンドーDS'
    }, {
      question: '任天堂のゲームで最も売れたシリーズといえば次の内どれ？',
      answers: [
        'MOTHER',
        'スーパーマリオ',
        'ドンキーコング',
        '星のカービィ'
      ],
      correct: 'スーパーマリオ'
    }, {
      question: 'ファイナルファンタジー７の主人公の名前は次の内どれ？',
      answers: [
        'クラウド・ストライフ',
        'ティーダ',
        'スコール・レオンハート',
        'ライトニング'
      ],
      correct: 'クラウド・ストライフ'
    }, {
      question: 'ゼルダの伝説シリーズでHD版としてWiiUで発売されたのは次の内どれ？',
      answers: [
        'トワイライトプリンセス',
        '時のオカリナ',
        '風のタクト',
        '夢幻の砂時計'
      ],
      correct: '風のタクト'
    }
  ]

  let quiz_index = 0;
  const quiz_length = quiz.length;
  let score = 0;

  const $button = document.getElementsByTagName('button');
  let btn_length = $button.length;

  const setup_quiz = () => {
    document.getElementById('js-question').textContent = quiz[quiz_index].question;
    let btn_index = 0;
    while(btn_index < btn_length) {
      $button[btn_index].textContent = quiz[quiz_index].answers[btn_index];
      btn_index++;
    }
  }
  setup_quiz();

  const click_alert = (e) => {
    if(quiz[quiz_index].correct === e.target.textContent){
      window.alert('正解！');
      score++;
    } else {
      window.alert('不正解');
    }

    quiz_index++;
    if(quiz_index < quiz_length) {
      setup_quiz();
    } else {
      window.alert('終了！正解数は' + score + '/' + quiz_length + 'でした。');
    }
  }

  let click_index = 0;
  while(click_index < btn_length) {
    $button[click_index].addEventListener('click', (e) => {
      click_alert(e);
    });
    click_index++;
  }

})();
