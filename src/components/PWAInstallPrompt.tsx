
import { X, Download, Smartphone } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

const PWAInstallPrompt = () => {
  const { showInstallPrompt, installApp, dismissPrompt } = usePWAInstall();

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-violet-200/50 p-4 mx-4 max-w-sm w-full pointer-events-auto animate-in fade-in duration-300 slide-in-from-bottom-4">
        <button
          onClick={dismissPrompt}
          className="absolute -top-2 -right-2 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>
        
        <div className="flex items-center gap-3">
          {/* App Icon */}
          <div className="flex-shrink-0">
            <img
              src="https://i.postimg.cc/NMq1Y6K6/Picsart-25-07-03-17-55-04-190.png"
              alt="Theta Code"
              className="w-12 h-12 rounded-xl shadow-sm border-2 border-violet-200/50"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-slate-800 text-sm">Theta Code</h3>
              <Smartphone className="w-4 h-4 text-violet-600" />
            </div>
            <p className="text-xs text-slate-600 mb-3">অ্যাপ ইনস্টল করে অফলাইনে ব্যবহার করুন</p>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={dismissPrompt}
                className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                পরে
              </button>
              <button
                onClick={installApp}
                className="flex-1 px-3 py-1.5 text-xs rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 transition-all flex items-center justify-center gap-1 shadow-sm font-medium"
              >
                <Download className="w-3 h-3" />
                ইনস্টল
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
