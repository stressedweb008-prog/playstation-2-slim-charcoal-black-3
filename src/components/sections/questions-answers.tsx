import { Search, CornerDownRight, HelpCircle } from "lucide-react";

const QuestionsAnswers = () => {
  return (
    <div id="questions" className="bg-background-primary rounded-md p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.12)] mt-8">
      <h2 className="text-[24px] font-normal text-text-primary mb-6">
        Perguntas e respostas
      </h2>

      <form className="relative mb-6">
        <input
          type="text"
          placeholder="Digite uma pergunta ou palavra-chave..."
          className="w-full h-12 py-[14px] pl-4 pr-12 rounded-md border border-[rgba(0,0,0,0.25)] bg-transparent text-base text-text-primary placeholder:text-text-tertiary transition-colors focus:outline-none focus:border-interactive-primary focus:ring-1 focus:ring-interactive-primary"
          aria-label="Buscar perguntas"
        />
        <button 
          type="submit" 
          aria-label="Buscar" 
          className="absolute top-0 right-0 h-12 w-12 flex items-center justify-center text-[rgba(0,0,0,0.45)]"
        >
          <Search size={20} />
        </button>
      </form>

      <div className="mb-4">
        <p className="text-sm text-text-primary">
          Ele tem Leitor funcionando? Ou pra jogar é via OPL?
        </p>
        <div className="flex items-start gap-2 mt-2 ml-5">
          <CornerDownRight size={16} className="text-[rgba(0,0,0,0.45)] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-text-secondary">
            Leitor funcionando perfeitamente
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-6">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-interactive-primary hover:text-interactive-hover hover:underline w-fit">
          <HelpCircle size={20} />
          <span>Como pergunto ao vendedor?</span>
        </a>
      </div>
    </div>
  );
};

export default QuestionsAnswers;