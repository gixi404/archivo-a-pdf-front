import { render } from "preact";
import { StrictMode } from "preact/compat";
import { Toaster } from "@pheralb/toast";
import App from "./app.jsx";
import {
  InfoIcon,
  CircleXIcon,
  CircleAlertIcon,
  CircleCheckIcon,
  LoaderIcon,
  XIcon,
} from "lucide-preact";
import "./index.css";

render(
  <StrictMode>
    <App />
    <Toaster
      position="top-right"
      theme="light"
      maxToasts={3}
      toastOptions={{
        headless: false,
        classNames: { actions: { closeBtn: "hidden" } },
        icons: {
          info: <InfoIcon className="dark:text-blue-500" />,
          error: <CircleXIcon className="text-red-500" />,
          warning: <CircleAlertIcon className="text-yellow-500" />,
          success: <CircleCheckIcon className="text-green-500" />,
          loading: <LoaderIcon className="animate-spin text-gray-500" />,
        },
      }}
    />
  </StrictMode>,
  document.getElementById("app")
);
