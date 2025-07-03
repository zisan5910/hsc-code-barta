
import { Language } from '../types';
import { analyzeCCode } from '../utils/cCodeAnalyzer';

interface PreviewProps {
  language: Language;
  code: string;
  algorithm?: string[];
  flowchart?: any[];
}

const Preview = ({ language, code, algorithm, flowchart }: PreviewProps) => {
  if (language === 'html') {
    return (
      <div className="mx-4 mb-4">
        <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg flex items-center">
          <div className="flex space-x-2 mr-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <h3 className="font-medium">Live Preview</h3>
        </div>
        <div className="bg-white border-2 border-blue-200 rounded-b-lg overflow-hidden">
          <iframe
            srcDoc={code}
            className="w-full border-none"
            style={{ height: 'auto', minHeight: '300px', maxHeight: '80vh' }}
            title="HTML Preview"
            sandbox="allow-scripts"
            onLoad={(e) => {
              const iframe = e.target as HTMLIFrameElement;
              try {
                const doc = iframe.contentDocument || iframe.contentWindow?.document;
                if (doc) {
                  const resizeObserver = new ResizeObserver(() => {
                    const contentHeight = Math.max(
                      doc.documentElement.scrollHeight,
                      doc.body.scrollHeight,
                      300
                    );
                    iframe.style.height = Math.min(contentHeight, window.innerHeight * 0.8) + 'px';
                  });
                  resizeObserver.observe(doc.body);
                  
                  // Initial height adjustment
                  const contentHeight = Math.max(
                    doc.documentElement.scrollHeight,
                    doc.body.scrollHeight,
                    300
                  );
                  iframe.style.height = Math.min(contentHeight, window.innerHeight * 0.8) + 'px';
                }
              } catch (error) {
                // Cross-origin restrictions might prevent access
                iframe.style.height = '400px';
              }
            }}
          />
        </div>
      </div>
    );
  }

  // For C programs, analyze the code to generate proper output, algorithm, and flowchart
  const analyzedCode = analyzeCCode(code);
  const displayAlgorithm = algorithm || analyzedCode.algorithm;
  const displayFlowchart = flowchart || analyzedCode.flowchart;
  const displayOutput = analyzedCode.output;

  return (
    <div className="mx-4 mb-4 space-y-4">
      {/* Program Output */}
      <div>
        <div className="bg-green-600 text-white px-4 py-2 rounded-t-lg flex items-center">
          <div className="flex space-x-2 mr-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <h3 className="font-medium">প্রোগ্রাম আউটপুট</h3>
        </div>
        <div className="bg-black text-green-400 p-4 rounded-b-lg font-mono text-sm border-2 border-green-200 overflow-x-auto">
          <div className="text-gray-400 mb-2">$ ./program</div>
          <div className="whitespace-pre-wrap break-words space-y-1">
            {displayOutput.length > 0 ? (
              displayOutput.map((line, index) => (
                <div key={index} className="text-green-300">{line}</div>
              ))
            ) : (
              <div className="text-green-300">প্রোগ্রাম সফলভাবে রান হয়েছে</div>
            )}
          </div>
        </div>
      </div>

      {/* Algorithm */}
      <div>
        <div className="bg-purple-600 text-white px-4 py-2 rounded-t-lg">
          <h3 className="font-medium">অ্যালগরিদম (Algorithm)</h3>
        </div>
        <div className="bg-purple-50 p-4 rounded-b-lg border-2 border-purple-200 max-h-96 overflow-y-auto">
          {/* Algorithm table format like in the textbook */}
          <div className="border-2 border-gray-400 bg-teal-100 rounded-lg overflow-hidden">
            <div className="bg-teal-200 border-b-2 border-gray-400 px-4 py-2 text-center font-bold text-gray-800">
              Algorithm
            </div>
            <div className="p-4">
              {displayAlgorithm.map((step, index) => (
                <div key={index} className="mb-2 flex">
                  <div className="font-bold text-gray-700 mr-4 min-w-[60px]">
                    Step-{index + 1}:
                  </div>
                  <div className="text-gray-700 font-medium flex-1">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Flowchart */}
      <div>
        <div className="bg-teal-600 text-white px-4 py-2 rounded-t-lg">
          <h3 className="font-medium">ফ্লোচার্ট (Flowchart)</h3>
        </div>
        <div className="bg-teal-50 p-6 rounded-b-lg border-2 border-teal-200 max-h-96 overflow-y-auto">
          <div className="flex flex-col items-center space-y-6">
            {displayFlowchart.map((step, index) => (
              <div key={index} className="flex flex-col items-center w-full max-w-xs">
                {/* Flowchart box styled like textbook */}
                <div className={`
                  relative px-6 py-4 text-sm font-bold text-center min-w-[160px] min-h-[60px] flex items-center justify-center border-2 border-black shadow-lg bg-orange-200 transition-all duration-200 hover:shadow-xl
                  ${step.type === 'start' || step.type === 'end' 
                    ? 'rounded-full bg-orange-200' 
                    : step.type === 'decision'
                    ? 'bg-orange-200 transform rotate-45'
                    : step.type === 'input' || step.type === 'output'
                    ? 'bg-orange-200 transform skew-x-12'
                    : 'bg-orange-200 rounded-lg'
                  }
                `}>
                  <span className={`relative z-10 text-xs leading-tight text-black font-bold
                    ${step.type === 'decision' ? 'transform -rotate-45' : ''}
                    ${step.type === 'input' || step.type === 'output' ? 'transform -skew-x-12' : ''}
                  `}>
                    {step.textBangla}
                  </span>
                </div>
                
                {/* Arrow between steps */}
                {index < displayFlowchart.length - 1 && (
                  <div className="flex flex-col items-center my-2">
                    <div className="w-0.5 h-6 bg-black"></div>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-l-transparent border-r-transparent border-t-black"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
