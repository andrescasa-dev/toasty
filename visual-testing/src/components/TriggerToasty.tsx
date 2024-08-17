import { useContext } from "react";
import { ToastContext } from "./ToastProvider";

export default function TriggerToasty() {
  const context = useContext(ToastContext);
  if (!context)
    return <div>This component should be wrapper by ToastPrivder</div>;
  const { pushToast } = context;
  return (
    <button
      onClick={() => pushToast({ intent: "info", message: "hola mundo" })}
    >
      TriggerToasty
    </button>
  );
}
