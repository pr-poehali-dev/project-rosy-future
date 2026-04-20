export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/8b3c229d-391e-4f71-b985-b8c7e479eb86/files/0a9f20ee-5bd8-4e4a-a471-949250cd39c7.jpg"
          alt="Ребёнок использует образовательное приложение"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-purple-500 font-semibold">
          Учёба, которую дети любят
        </h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Более 500 интерактивных вопросов по математике, русскому языку и окружающему миру. Каждое задание адаптируется под уровень ребёнка и делает обучение увлекательным.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎯</span>
            <span className="text-neutral-700">Задания для 1, 2, 3 и 4 класса</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏆</span>
            <span className="text-neutral-700">Награды и достижения за прогресс</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📊</span>
            <span className="text-neutral-700">Статистика для родителей и учителей</span>
          </div>
        </div>
        <button className="bg-purple-600 text-white border border-purple-600 px-6 py-3 text-sm transition-all duration-300 hover:bg-purple-700 cursor-pointer w-fit uppercase tracking-wide rounded-full font-semibold">
          Попробовать бесплатно
        </button>
      </div>
    </div>
  );
}
