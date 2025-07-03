
import { X, Download } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

const PWAInstallPrompt = () => {
  const { showInstallPrompt, installApp, dismissPrompt } = usePWAInstall();

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 p-6 text-center relative">
        <button
          onClick={dismissPrompt}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        
        <div className="mb-4">
          <img
            src="https://i.postimg.cc/NMq1Y6K6/Picsart-25-07-03-17-55-04-190.png"
            alt="Theta Code"
            className="w-16 h-16 mx-auto rounded-2xl shadow-lg"
          />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Theta Code ইনস্টল করুন
        </h3>
        
        <p className="text-gray-600 mb-6 text-sm">
          আপনার ডিভাইসে Theta Code অ্যাপ ইনস্টল করুন এবং অফলাইনে কোডিং করুন।
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={dismissPrompt}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            বাতিল
          </button>
          <button
            onClick={installApp}
            className="flex-1 px-4 py-3 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            ইনস্টল
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
