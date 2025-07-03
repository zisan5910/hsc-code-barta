
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheatCode, Language } from '../types';
import { htmlCheatCodes, cCheatCodes } from '../data/cheatCodes';

interface CheatCodeSelectorProps {
  language: Language;
  onSelectCheatCode: (code: CheatCode) => void;
}

const CheatCodeSelector = ({ language, onSelectCheatCode }: CheatCodeSelectorProps) => {
  const cheatCodes = language === 'html' ? htmlCheatCodes : cCheatCodes;
  
  return (
    <div className="px-2 mb-3">
      <Select onValueChange={(value) => {
        const selectedCode = cheatCodes.find(code => code.id === value);
        if (selectedCode) {
          onSelectCheatCode(selectedCode);
        }
      }}>
        <SelectTrigger className="w-full bg-white/90 backdrop-blur-sm border-2 border-slate-200/50 hover:border-slate-300/70 transition-all duration-200 rounded-2xl h-12 shadow-lg">
          <SelectValue placeholder={
            <span className="flex items-center gap-2 text-slate-600">
              {language === 'html' ? '🌐' : '💻'} {language === 'html' ? 'HTML' : 'C'} কোড টেমপ্লেট নির্বাচন করুন
            </span>
          } />
        </SelectTrigger>
        <SelectContent className="max-h-60 bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-xl">
          {cheatCodes.map((code) => (
            <SelectItem 
              key={code.id} 
              value={code.id} 
              className="hover:bg-slate-100/80 rounded-xl mx-1 my-0.5 transition-colors duration-200"
            >
              <div className="flex flex-col items-start py-1">
                <span className="font-medium text-slate-800">{code.titleBangla}</span>
                <span className="text-xs text-slate-500 mt-0.5">{code.title}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CheatCodeSelector;
