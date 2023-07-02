import clsx from "clsx";
import { MouseEventHandler, ReactElement, ReactNode } from "react";

type ButtonProps<T> = {
  children: ReactNode;
  onClick?: MouseEventHandler<T> | undefined;
  type?: "submit" | "reset" | "button" | undefined;
  icon?: ReactElement;
};

export type ButtonGroupProps = {
  buttons: ButtonProps<Element>[];
  themeType?: "";
};

export const ButtonGroup = ({ buttons, themeType }: ButtonGroupProps) => {
  return (
    <>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        {buttons.map((item, index) => {
          return (
            <button
              key={index}
              type={item.type}
              onClick={item.onClick}
              className={clsx(
                "inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 border-r",
                index === 0 && "rounded-l-lg border-l",
                index === buttons.length - 1 && "rounded-r-lg"
              )}
            >
              {item.icon}
              {item.children}
            </button>
          );
        })}
        {/* <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4 mr-2 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Profile
        </button> */}
      </div>
    </>
  );
};
