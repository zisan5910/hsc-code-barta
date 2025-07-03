
import { Button } from '@/components/ui/button';
import { Language } from '../types';

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageToggle = ({ language, onLanguageChange }: LanguageToggleProps) => {
  return (
    <div className="flex bg-white/80 backdrop-blur-sm rounded-2xl p-1.5 mx-2 my-3 shadow-lg border border-slate-200/50">
      <Button
        variant={language === 'html' ? 'default' : 'ghost'}
        className={`flex-1 rounded-xl transition-all duration-300 font-medium text-sm ${
          language === 'html'
            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105'
            : 'text-slate-600 hover:bg-white/80 hover:text-slate-800'
        }`}
        onClick={() => onLanguageChange('html')}
      >
        <span className="flex items-center gap-2">
          🌐 HTML
        </span>
      </Button>
      <Button
        variant={language === 'c' ? 'default' : 'ghost'}
        className={`flex-1 rounded-xl transition-all duration-300 font-medium text-sm ${
          language === 'c'
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
            : 'text-slate-600 hover:bg-white/80 hover:text-slate-800'
        }`}
        onClick={() => onLanguageChange('c')}
      >
        <span className="flex items-center gap-2">
          💻 C Programming
        </span>
      </Button>
    </div>
  );
};

export default LanguageToggle;
