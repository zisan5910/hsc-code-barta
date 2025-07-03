
export interface AnalyzedCode {
  algorithm: string[];
  flowchart: FlowchartStep[];
  output: string[];
}

export interface FlowchartStep {
  type: 'start' | 'end' | 'process' | 'input' | 'output' | 'decision';
  textBangla: string;
  textEnglish?: string;
}

export const analyzeCCode = (code: string): AnalyzedCode => {
  const lines = code.split('\n').map(line => line.trim()).filter(line => line && !line.startsWith('//'));
  
  const algorithm: string[] = ['শুরু'];
  const flowchart: FlowchartStep[] = [{ type: 'start', textBangla: 'শুরু' }];
  const output: string[] = [];
  
  let hasInput = false;
  let hasOutput = false;
  let hasLoop = false;
  let hasCondition = false;
  let variables: string[] = [];
  
  // Analyze code patterns
  lines.forEach(line => {
    // Variable declarations
    if (line.includes('int ') || line.includes('float ') || line.includes('char ') || line.includes('double ')) {
      const varMatch = line.match(/(?:int|float|char|double)\s+([a-zA-Z_][a-zA-Z0-9_]*)/g);
      if (varMatch) {
        varMatch.forEach(match => {
          const varName = match.split(' ')[1];
          if (varName && !variables.includes(varName)) {
            variables.push(varName);
          }
        });
        algorithm.push(`প্রয়োজনীয় ভেরিয়েবল ঘোষণা করুন`);
        flowchart.push({ type: 'process', textBangla: 'ভেরিয়েবল ঘোষণা' });
      }
    }
    
    // Input operations
    if (line.includes('scanf') || line.includes('getchar') || line.includes('gets')) {
      hasInput = true;
      if (line.includes('scanf')) {
        const inputVars = line.match(/&([a-zA-Z_][a-zA-Z0-9_]*)/g);
        if (inputVars) {
          inputVars.forEach(varRef => {
            const varName = varRef.substring(1);
            algorithm.push(`${varName} এর মান ইনপুট নিন`);
            flowchart.push({ type: 'input', textBangla: `${varName} ইনপুট` });
          });
        }
      } else {
        algorithm.push('ব্যবহারকারীর কাছ থেকে ইনপুট নিন');
        flowchart.push({ type: 'input', textBangla: 'ইনপুট নিন' });
      }
    }
    
    // Output operations
    if (line.includes('printf')) {
      hasOutput = true;
      const printContent = line.match(/printf\s*\(\s*"([^"]+)"/);
      if (printContent && printContent[1]) {
        let outputText = printContent[1];
        // Handle common Bengali translations
        if (outputText.includes('Hello')) outputText = 'হ্যালো পৃথিবী';
        else if (outputText.includes('Sum') || outputText.includes('sum')) outputText = 'যোগফল';
        else if (outputText.includes('Result') || outputText.includes('result')) outputText = 'ফলাফল';
        else outputText = 'ফলাফল';
        
        algorithm.push(`${outputText} প্রিন্ট করুন`);
        flowchart.push({ type: 'output', textBangla: `${outputText} আউটপুট` });
      }
    }
    
    // Loop operations
    if (line.includes('for(') || line.includes('while(') || line.includes('do')) {
      hasLoop = true;
      if (line.includes('for(')) {
        algorithm.push('লুপ শুরু করুন (নির্দিষ্ট সংখ্যক বার)');
        flowchart.push({ type: 'decision', textBangla: 'লুপ শর্ত?' });
      } else {
        algorithm.push('লুপ শুরু করুন (শর্ত অনুযায়ী)');
        flowchart.push({ type: 'decision', textBangla: 'লুপ শর্ত?' });
      }
    }
    
    // Conditional operations
    if (line.includes('if(') && !line.includes('for(')) {
      hasCondition = true;
      algorithm.push('শর্ত পরীক্ষা করুন');
      flowchart.push({ type: 'decision', textBangla: 'শর্ত সত্য?' });
    }
    
    // Mathematical operations
    if (line.includes('=') && !line.includes('==') && !line.includes('!=')) {
      const mathOps = line.match(/([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+);/);
      if (mathOps) {
        const varName = mathOps[1];
        const expression = mathOps[2];
        if (expression.includes('+')) {
          algorithm.push(`${varName} = যোগফল গণনা করুন`);
          flowchart.push({ type: 'process', textBangla: 'যোগফল গণনা' });
        } else if (expression.includes('-')) {
          algorithm.push(`${varName} = বিয়োগফল গণনা করুন`);
          flowchart.push({ type: 'process', textBangla: 'বিয়োগফল গণনা' });
        } else if (expression.includes('*')) {
          algorithm.push(`${varName} = গুণফল গণনা করুন`);
          flowchart.push({ type: 'process', textBangla: 'গুণফল গণনা' });
        } else if (expression.includes('/')) {
          algorithm.push(`${varName} = ভাগফল গণনা করুন`);
          flowchart.push({ type: 'process', textBangla: 'ভাগফল গণনা' });
        } else {
          algorithm.push(`${varName} এর মান নির্ধারণ করুন`);
          flowchart.push({ type: 'process', textBangla: `${varName} = মান` });
        }
      }
    }
  });
  
  // Generate sample output based on code analysis
  if (code.includes('Hello') || code.includes('hello')) {
    output.push('Hello, World!');
    output.push('হ্যালো, পৃথিবী!');
  }
  
  if (hasInput && hasOutput) {
    if (code.includes('sum') || code.includes('Sum') || code.includes('+')) {
      output.push('প্রথম সংখ্যা লিখুন: 5');
      output.push('দ্বিতীয় সংখ্যা লিখুন: 3');
      output.push('যোগফল: 8');
    } else if (code.includes('age') || code.includes('Age')) {
      output.push('আপনার বয়স লিখুন: 18');
      output.push('আপনার বয়স হলো: 18 বছর');
    } else {
      output.push('ইনপুট: 10');
      output.push('আউটপুট: 10');
    }
  }
  
  if (hasLoop) {
    output.push('1 2 3 4 5 6 7 8 9 10');
  }
  
  if (hasCondition) {
    output.push('শর্ত সত্য হলে: সফল');
    output.push('শর্ত মিথ্যা হলে: ব্যর্থ');
  }
  
  // Add end steps
  algorithm.push('সমাপ্ত');
  flowchart.push({ type: 'end', textBangla: 'সমাপ্ত' });
  
  return { algorithm, flowchart, output };
};
