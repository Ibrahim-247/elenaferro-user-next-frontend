import { toast } from "sonner";
import useApiMutation from "./Mutation/useApiMutation";

export const useContactRequest = () => {
  return useApiMutation({
    key: "contact_request",
    endpoint: "/contact/request",
    isPrivate: true,
    onSuccess: () => {
      toast.success("Message sent successfully");
    },
    onError: (error) => {
      if (error?.code === "ERR_NETWORK") {
        toast.error("Please check your network connection");
      } else {
        toast.error(error?.response?.data?.message || "Something went wrong!");
      }
      console.error("Logout error:", error);
    },
  });
};
