import React,{useState} from 'react'
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import BookmarkForm from './Bookmark/BookmarkForm';
import BookmarkList from './Bookmark/BookmarkList';
const Modal = ({ open, setOpen }) => {
    
    const [bookmarks, setBookmarks] = useState([]);

    const addBookmark = (bookmark) => {
      setBookmarks([...bookmarks, bookmark]);
    };

    return (
        <div>
            <Transition.Root show={open}>
                <Dialog
                    as="div"
                    className="relative z-10 "
                    onClose={setOpen}
                    style={{ zIndex: 999999999999999 }}
                >
                    <Transition.Child
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10  overflow-y-auto">
                        <div className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  "  style={{width:'80%', justifyContent:'center', margin:'auto'}}>
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left ">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    You can Test Bookmark here. 😊
                                                </Dialog.Title>
                                                <div class="grid grid-cols-2">
                                                    {/* --------- Bookmark form -------- */}
                                                    <div class="border p-4 ">
                                                        <BookmarkForm onAddBookmark={addBookmark} />
                                                    </div>
                                                    {/* ---------Bookmark List ----------- */}
                                                    <div class="border p-4 w-50"    >
                                                        <BookmarkList bookmarks={bookmarks} />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>


            </Transition.Root>
        </div>
    )
}

export default Modal