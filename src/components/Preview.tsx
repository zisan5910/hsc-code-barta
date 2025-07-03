
import { Language } from '../types';

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

  return (
    <div className="mx-4 mb-4 space-y-4">
      {/* Mock Output */}
      <div>
        <div className="bg-green-600 text-white px-4 py-2 rounded-t-lg flex items-center">
          <div className="flex space-x-2 mr-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <h3 className="font-medium">Program Output</h3>
        </div>
        <div className="bg-black text-green-400 p-4 rounded-b-lg font-mono text-sm border-2 border-green-200 overflow-x-auto">
          <div className="text-gray-400 mb-2">$ ./program</div>
          <div className="whitespace-pre-wrap break-words">
            {code.includes('Hello') && <div>Hello, World!</div>}
            {code.includes('printf') && code.includes('age') && <div>বয়স: 18</div>}
            {code.includes('scanf') && code.includes('sum') && (
              <div>
                <div>প্রথম সংখ্যা লিখুন: 5</div>
                <div>দ্বিতীয় সংখ্যা লিখুন: 3</div>
                <div>যোগফল: 8</div>
              </div>
            )}
            {code.includes('marks') && (
              <div>
                <div>নম্বর লিখুন: 85</div>
                <div>গ্রেড: A+</div>
              </div>
            )}
            {code.includes('for') && code.includes('printf') && (
              <div>১ থেকে 10 পর্যন্ত সংখ্যাগুলো:<br />1 2 3 4 5 6 7 8 9 10</div>
            )}
          </div>
        </div>
      </div>

      {/* Algorithm */}
      {algorithm && (
        <div>
          <div className="bg-purple-600 text-white px-4 py-2 rounded-t-lg">
            <h3 className="font-medium">অ্যালগরিদম (Algorithm)</h3>
          </div>
          <div className="bg-purple-50 p-4 rounded-b-lg border-2 border-purple-200 max-h-96 overflow-y-auto">
            <ol className="list-decimal list-inside space-y-2 text-sm">
              {algorithm.map((step, index) => (
                <li key={index} className="text-gray-700 leading-relaxed break-words">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {/* Flowchart */}
      {flowchart && (
        <div>
          <div className="bg-teal-600 text-white px-4 py-2 rounded-t-lg">
            <h3 className="font-medium">ফ্লোচার্ট (Flowchart)</h3>
          </div>
          <div className="bg-teal-50 p-6 rounded-b-lg border-2 border-teal-200 max-h-96 overflow-y-auto">
            <div className="flex flex-col items-center space-y-3">
              {flowchart.map((step, index) => (
                <div key={index} className="flex flex-col items-center w-full max-w-xs">
                  <div className={`
                    px-4 py-2 text-sm font-medium text-center min-w-[120px] border-2 shadow-sm break-words
                    ${step.type === 'start' || step.type === 'end' 
                      ? 'bg-red-100 border-red-300 rounded-full' 
                      : step.type === 'decision'
                      ? 'bg-yellow-100 border-yellow-300 transform rotate-45 w-20 h-20 flex items-center justify-center'
                      : step.type === 'input'
                      ? 'bg-blue-100 border-blue-300 rounded-lg transform skew-x-12'
                      : step.type === 'output'
                      ? 'bg-green-100 border-green-300 rounded-lg transform skew-x-12'
                      : 'bg-gray-100 border-gray-300 rounded-lg'
                    }
                  `}>
                    <span className={step.type === 'decision' ? 'transform -rotate-45 text-xs' : ''}>
                      {step.textBangla}
                    </span>
                  </div>
                  {index < flowchart.length - 1 && (
                    <div className="w-0.5 h-6 bg-gray-400"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Preview;
