
import { useEffect, useRef } from 'react';
import { Trash2, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Language } from '../types';

interface CodeEditorProps {
  language: Language;
  code: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

const CodeEditor = ({ language, code, onChange, onClear }: CodeEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [code]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast({
        title: "কোড কপি হয়েছে!",
        description: "আপনার কোড সফলভাবে ক্লিপবোর্ডে কপি হয়েছে।",
      });
    } catch (err) {
      toast({
        title: "কপি করতে ব্যর্থ",
        description: "কোড কপি করতে সমস্যা হয়েছে।",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mx-2 mb-3 shadow-lg rounded-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-4 py-3 flex items-center justify-between">
        <span className="text-white text-sm font-medium flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          {language === 'html' ? 'HTML Editor' : 'C Code Editor'}
        </span>
        <div className="flex items-center space-x-2">
          <Button
            onClick={handleCopy}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-blue-600 hover:text-white p-2 h-8 w-8 rounded-lg transition-all duration-200"
            disabled={!code.trim()}
          >
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            onClick={onClear}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-red-600 hover:text-white p-2 h-8 w-8 rounded-lg transition-all duration-200"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <div className="flex space-x-1.5 ml-2">
            <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 cursor-pointer transition-colors"></div>
          </div>
        </div>
      </div>
      <textarea
        ref={textareaRef}
        value={code}
        onChange={handleChange}
        className="w-full min-h-[250px] p-4 bg-slate-950 text-green-400 font-mono text-sm border-none outline-none resize-none overflow-hidden leading-relaxed tracking-wide"
        placeholder={language === 'html' ? 'HTML কোড এখানে লিখুন...' : 'C কোড এখানে লিখুন...'}
        spellCheck={false}
        style={{ 
          fontFamily: 'SF Mono, Monaco, Inconsolata, Roboto Mono, monospace',
          fontSize: '14px',
          lineHeight: '1.6'
        }}
      />
    </div>
  );
};

export default CodeEditor;
