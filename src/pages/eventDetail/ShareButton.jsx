import React, { useState, useEffect, useRef } from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { AnimatePresence, motion } from "framer-motion";

function ShareButton() {
  // state variables
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // constant variables
  const eventUrl = window.location.href;
  const dropdownRef = useRef(null); // reference to dropdown menu used to check clicks outside open dropdown menu and close it

  // function to toggle dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // ureEffct to check for clicks outside the opened dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // copy link to keyboard
  function copyToClipboard() {
    // write the url to clipboard
    navigator.clipboard.writeText(eventUrl);

    // close the dropdown menu
    setIsOpen(false);

    //  open the link copied to clipboard dialog box
    setIsCopied(true);
    // close the link copied to clipboard dialog after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  }

  // share blog link to facebook
  function handleFacebookShare() {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      eventUrl
    )}`;
    window.open(facebookShareUrl, "_blank");
    // close the dropdown
    setIsOpen(false);
  }

  // share blog link to linkedin
  function handleLinkedinShare() {
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
    window.open(linkedInShareUrl, "_blank");
    // close the dropdown
    setIsOpen(false);
  }

  return (
    <div className="relative px-1" ref={dropdownRef}>
      {/* Share button */}
      <p
        className="ml-2 py-2 mb-1 h-full flex items-center rounded-[100px] hover:text-gray-400"
        onClick={toggleDropdown}
      >
        <IosShareIcon />
      </p>

      {/* dropdown menu */}
      {isOpen && (
          <motion.div
            className="absolute bg-white top-full right-0 w-[220px] bg-background p-4 flex flex-col shadow-2xl border-2 border-black cursor-pointer origin-top-right"
            initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
          >
            <div
              className="p-2 w-full rounded-lg hover:bg-gray-200"
              onClick={copyToClipboard}
            >
              <div>
                <LinkIcon /> Copy Link
              </div>
            </div>
            <div
              className="p-2 w-full rounded-lg hover:bg-gray-200"
              onClick={handleFacebookShare}
            >
              <div>
                <FacebookIcon /> Share on Facebook
              </div>
            </div>
            <div
              className="p-2 w-full rounded-lg hover:bg-gray-200"
              onClick={handleLinkedinShare}
            >
              <div>
                <LinkedInIcon /> Share on LinekdIn
              </div>
            </div>
          </motion.div>
      )}

      {/* Link copied confirmation */}
      {/* onnoder jonno bug bounty remember to add && !isOpen */}
      {isCopied && (
        <div className="fixed bottom-10 right-20 p-3 bg-green-500 text-white border-2 border-black z-50">
          <p>
            Link copied to clipboard <CheckCircleOutlineIcon className="mb-1" />
          </p>
        </div>
      )}
    </div>
  );
}

export default ShareButton;
