
import { X, Download, Smartphone } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

const PWAInstallPrompt = () => {
  const { showInstallPrompt, installApp, dismissPrompt } = usePWAInstall();

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden relative animate-in fade-in duration-300 slide-in-from-bottom-4">
        <button
          onClick={dismissPrompt}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        
        {/* Header with gradient */}
        <div className="bg-gradient-to-br from-violet-600 to-purple-700 px-6 pt-8 pb-6 text-center text-white">
          <div className="mb-4">
            <img
              src="https://i.postimg.cc/NMq1Y6K6/Picsart-25-07-03-17-55-04-190.png"
              alt="Theta Code"
              className="w-20 h-20 mx-auto rounded-2xl shadow-lg border-4 border-white/20"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2">
            Theta Code
          </h3>
          <p className="text-violet-100 text-sm opacity-90">
            কোডিং ল্যাব অ্যাপ
          </p>
        </div>
        
        {/* Content */}
        <div className="px-6 py-6">
          <div className="flex items-center justify-center mb-4">
            <Smartphone className="w-8 h-8 text-violet-600 mr-3" />
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">অ্যাপ ইনস্টল করুন</h4>
              <p className="text-sm text-gray-600">অফলাইনে ব্যবহার করুন</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                সম্পূর্ণ অফলাইন সাপোর্ট
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                দ্রুত অ্যাক্সেস
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                নেটিভ অ্যাপ এক্সপেরিয়েন্স
              </li>
            </ul>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={dismissPrompt}
              className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-200"
            >
              পরে করব
            </button>
            <button
              onClick={installApp}
              className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
            >
              <Download className="w-4 h-4" />
              ইনস্টল করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
