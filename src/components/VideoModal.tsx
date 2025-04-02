import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
}) => {
  useEffect(() => {
    if (isOpen) {
      console.log("VideoModal opened with URL:", videoUrl);
    }
  }, [isOpen, videoUrl]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-[390px] bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="w-full" style={{ aspectRatio: "9/19.5" }}>
              <video
                src={videoUrl}
                title={title}
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="auto"
                onError={(e) => {
                  console.error("Video loading error:", e);
                  console.error("Video URL:", videoUrl);
                  onClose();
                }}
                onLoadStart={() =>
                  console.log("Video loading started:", videoUrl)
                }
                onLoadedData={() =>
                  console.log("Video loaded successfully:", videoUrl)
                }
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
