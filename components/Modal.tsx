import React, { Fragment, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { Dialog, Transition } from '@headlessui/react';
import { CameraIcon } from '@heroicons/react/outline';

function Modal() {
  const [show, setShow] = useRecoilState<boolean>(modalState);
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadPost = async () => {
      if (loading) return;
      setLoading(true)
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-suto"
        onClose={setShow}
      >
        <div className="modal">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="modalDialog" />
          </Transition.Child>
          <span className="centeringModal" aria-hidden="true">
            &#8203
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="modalContentWrapper">
              <div>
                {selectedFile ? (
                  <img
                    src={selectedFile}
                    className="w-full object-contain cursor-pointer"
                    onClick={() => setSelectedFile(null)}
                    alt=""
                  />
                ) : (
                  <div
                    onClick={() => filePickerRef.current.click()}
                    className="modalUpload"
                  >
                    <CameraIcon
                      className="h-6 w-6 text-red-600 cursor-pointer"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Upload a photo
                    </Dialog.Title>
                    {/* Input for file */}
                    <div>
                      <input
                        ref={filePickerRef}
                        type="file"
                        hidden
                        onChange={addImageToPost}
                      />
                    </div>
                    {/* Input for caption */}
                    <div className="mt-2">
                      <input
                        className="border-none focus:ring-0 w-full text-center"
                        type="text"
                        ref={captionRef}
                        placeholder="Enter a caption"
                      />
                    </div>
                  </div>
                </div>
                {/* Input Button */}
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    // disabled={!selectedFile}
                    className="modalButton"
                    // onClick={uploadPost}
                  >
                    Upload Post
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;
