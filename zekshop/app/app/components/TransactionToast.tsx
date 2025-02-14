import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CheckCircle } from "lucide-react";

export const showTransactionSuccess = (transactionHash: string) => {
  toast.success(
    <div className="flex items-center gap-3">
      <CheckCircle className="text-pink-500 w-6 h-6" />
      <div>
        <p className="font-semibold">Transaction Successful!</p>
        <p className="text-gray-400 text-sm truncate max-w-[200px]">
          {transactionHash}
        </p>
      </div>
    </div>,
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    }
  );
};
