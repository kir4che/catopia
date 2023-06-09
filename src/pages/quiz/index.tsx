import { useState } from 'react';

export default function Quiz() {
  const questions = [
    {
      questionText: '貓咪和人一樣有分左右撇子。',
      questionImg: '../images/question 1.jpg',
      answerOptions: [
        { answerText: '是', isCorrect: true },
        { answerText: '否', isCorrect: false },
      ],
    },
    {
      questionText: '貓咪全身上下有多少根骨頭？',
      questionImg: '../images/question 2.jpg',
      answerOptions: [
        { answerText: '80', isCorrect: false },
        { answerText: '115', isCorrect: true },
        { answerText: '160', isCorrect: false },
        { answerText: '230', isCorrect: false },
      ],
    },
    {
      questionText: '成年的貓咪平均一天要睡多少小時？',
      questionImg: '../images/question 3.jpg',
      answerOptions: [
        { answerText: '8', isCorrect: false },
        { answerText: '10', isCorrect: false },
        { answerText: '15', isCorrect: true },
        { answerText: '20', isCorrect: false },
      ],
    },
    {
      questionText: '貓咪缺少哪一個味覺？',
      questionImg: '../images/question 4.jpg',
      answerOptions: [
        { answerText: '酸', isCorrect: false },
        { answerText: '甜', isCorrect: true },
        { answerText: '苦', isCorrect: false },
        { answerText: '辣', isCorrect: false },
      ],
    },
    {
      questionText: '貓咪的汗腺主要分布於哪個部位？',
      questionImg: '../images/question 5.jpg',
      answerOptions: [
        { answerText: '腋窩', isCorrect: false },
        { answerText: '下巴', isCorrect: false },
        { answerText: '屁股', isCorrect: false },
        { answerText: '肉球', isCorrect: true },
      ],
    },
    {
      questionText: '貓咪剛睡醒時，為什麼會打哈欠？',
      questionImg: '../images/question 6.jpg',
      answerOptions: [
        { answerText: '腦袋缺氧', isCorrect: true },
        { answerText: '展示牙齒', isCorrect: false },
        { answerText: '表示放鬆', isCorrect: false },
        { answerText: '伸展肌肉', isCorrect: false },
      ],
    },
    {
      questionText: '貓咪總共有幾根腳趾頭？',
      questionImg: '../images/question 7.jpg',
      answerOptions: [
        { answerText: '18', isCorrect: true },
        { answerText: '19', isCorrect: false },
        { answerText: '20', isCorrect: false },
        { answerText: '21', isCorrect: false },
      ],
    },
    {
      questionText: '為什麼貓咪會用頭磨蹭你的腳？',
      questionImg: '../images/question 8.jpg',
      answerOptions: [
        { answerText: '只是很癢', isCorrect: false },
        { answerText: '標記領地', isCorrect: false },
        { answerText: '表達愛意', isCorrect: true },
        { answerText: '尋求保護', isCorrect: false },
      ],
    },
    {
      questionText: '由愛貓族聯誼會訂立的「台灣貓節」是？',
      questionImg: '../images/question 9.jpg',
      answerOptions: [
        { answerText: '1月12日', isCorrect: false },
        { answerText: '2月22日', isCorrect: false },
        { answerText: '3月26日', isCorrect: false },
        { answerText: '4月4日', isCorrect: true },
      ],
    },
    {
      questionText: '家貓平均跑多快？(小時／公里)',
      questionImg: '../images/question 10.jpg',
      answerOptions: [
        { answerText: '28', isCorrect: false },
        { answerText: '36', isCorrect: false },
        { answerText: '40', isCorrect: false },
        { answerText: '48', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) setCurrentQuestion(nextQuestion);
    else setShowScore(true);
  };
  return (
    <div className='table h-full mx-auto text-center'>
      {showScore ? (
        <div className='table-cell space-y-6 align-middle'>
          <h4 className='font-medium'>你的得分是 {score}0 分</h4>
          <button className='flex justify-center py-2 border-none rounded-full bg-primary-green hover:bg-primary-green-hover' type='button' onClick={() => { setShowScore(false); setCurrentQuestion(0); }}>重新測驗</button>
        </div>
      ) : (
        <div className='table-cell align-middle'>
          <p className='mb-4'>問題 {currentQuestion + 1} / {questions.length}</p>
          <h3 className='mb-4 font-medium'>{questions[currentQuestion].questionText}</h3>
          <img className='object-cover object-bottom h-56 mb-6 w-[420px]' src={questions[currentQuestion].questionImg} alt="question image" />
          <div className='space-y-3'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button className='w-full py-1.5 pl-5 bg-white border-[1.8px] rounded-full border-stone-800 text-stone-900 hover:bg-primary-green hover:border-primary-green hover:text-white' type='button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}