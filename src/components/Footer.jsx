import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-neutral-content items-center p-4 fixed bottom-0">
      <aside className="grid-flow-col items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 
        1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 
        1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 
        0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 
        2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 
        2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 
        1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 
        2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 
        0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            />
          </svg>
        </a>

        <a
          href="https://github.com/Shivam2709"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 
        7.86 10.95.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 
        1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 
        3.37.96.1-.75.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.7 
        0-1.26.45-2.3 1.19-3.12-.12-.29-.52-1.47.11-3.06 
        0 0 .98-.31 3.2 1.19a11.14 11.14 0 0 1 5.83 0c2.22-1.5 
        3.2-1.19 3.2-1.19.63 1.59.24 2.77.12 3.06.74.82 
        1.19 1.86 1.19 3.12 0 4.43-2.71 5.41-5.29 5.7.41.35.77 
        1.04.77 2.1 0 1.52-.01 2.75-.01 3.13 0 .31.21.68.8.56A10.97 
        10.97 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/shivam-thakur2709/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path
              d="M19 0h-14c-2.76 0-5 2.24-5 
        5v14c0 2.76 2.24 5 5 5h14c2.76 
        0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
        19h-3v-10h3v10zm-1.5-11.27c-.97 
        0-1.75-.79-1.75-1.76s.78-1.76 
        1.75-1.76 1.75.79 1.75 1.76-.78 
        1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-3.36-4-3.1-4 
        0v5.6h-3v-10h3v1.39c1.4-2.58 7-2.77 
        7 2.47v6.14z"
            />
          </svg>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
