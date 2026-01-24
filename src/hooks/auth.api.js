import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import useApiMutation from "./Mutation/useApiMutation";
import { logout, setAuth } from "@/redux/slices/authSlice";

// login
export const useLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return useApiMutation({
    key: "login",
    method: "post",
    endpoint: "/login",
    onSuccess: (data, variables) => {
      const remember = variables?.remember || false;
      dispatch(
        setAuth({
          user: data?.data?.user,
          token: data?.data?.token?.original?.access_token,
          remember,
        }),
      );
      router.push("/");
    },
    onError: (error) => {
      if (error?.code === "ERR_NETWORK") {
        toast.error("Please check your network connection");
      } else {
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "Something went wrong!",
        );
      }
      console.error("Login error:", error);
    },
  });
};

// log out
export const useLogout = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return useApiMutation({
    key: "logout",
    endpoint: "/logout",
    isPrivate: true,
    onSuccess: () => {
      dispatch(logout());
      router.push("/auth/login");
      toast.success("Logged out successfully");
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

// register
export const useRegister = () => {
  const router = useRouter();
  return useApiMutation({
    key: "register",
    endpoint: "/user/register",
    onSuccess: (data, variable) => {
      router.push(`/auth/verify_email?email=${variable.email}`);
      toast.success(
        `Registration successful. Verify your account using OTP sent to your email ${data?.message?.otp}`,
      );
    },
    onError: (error) => {
      if (error?.code === "ERR_NETWORK") {
        toast.error("Please check your network connection");
      } else {
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "Something went wrong!",
        );
      }

      console.error("Login error:", error);
    },
  });
};

// email verify
export const useVerifyEmail = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return useApiMutation({
    key: "email_verify",
    endpoint: "/verify-otp-password",
    onSuccess: (data) => {
      dispatch(
        setAuth({
          user: data?.data?.user,
          token: data?.data?.token?.original?.access_token,
        }),
      );
      router.push("/");
      toast.success(`Email verified successfully`);
    },
    onError: (error) => {
      if (error?.code === "ERR_NETWORK") {
        toast.error("Please check your network connection");
      } else {
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "Something went wrong!",
        );
      }

      console.error("Verify error:", error);
    },
  });
};

// resend otp
export const useResendOtp = () => {
  return useApiMutation({
    key: "resend_otp",
    endpoint: "/resend-otp",
    onSuccess: (data) => {
      toast.success("Otp resend successfully");
    },
    onError: (error) => {
      if (error?.code === "ERR_NETWORK") {
        toast.error("Please check your network connection");
      } else {
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "Something went wrong!",
        );
      }

      console.error("Resend otp error:", error);
    },
  });
};
