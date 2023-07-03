import clsx from "clsx";
import { ReactElement, ReactNode } from "react";

export type DrawerProps = {
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  title?: ReactNode;
  iconTitle?: ReactElement;
  className?: string;
};
export const Drawer = ({
  isOpen = true,
  onClose,
  children,
  title,
  iconTitle,
  className,
}: DrawerProps) => {
  return (
    <div className={className}>
      <div
        onClick={onClose}
        className={clsx(
          isOpen &&
            "fixed top-0 h-screen w-screen bg-[#00000063] dark:bg-[#0000008e] overflow-hidden"
        )}
      ></div>
      <div
        id="drawer-example"
        className={clsx(
          "fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform",
          isOpen
            ? "bg-white w-80 dark:bg-gray-800 transform-none"
            : "-translate-x-full bg-white w-80 dark:bg-gray-800"
        )}
        tabIndex={-1}
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          {iconTitle}
          {title}
        </h5>
        <button
          onClick={onClose}
          type="button"
          data-drawer-hide="drawer-example"
          aria-controls="drawer-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="mb-6 text-sm text-black dark:text-white">
          {children}
        </div>
      </div>
    </div>
  );
};
