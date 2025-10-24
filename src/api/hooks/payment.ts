import { useUserStore } from '@/store/useStore';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import {
  CheckoutPayload,
  CheckoutResponse,
  initiateCheckout,
} from '../payment';

export const useCheckout = (): UseMutationResult<
  CheckoutResponse,
  Error,
  CheckoutPayload,
  unknown
> => {
  const setUserProducts = useUserStore((state) => state.setUserProducts);

  return useMutation({
    mutationFn: (payload: CheckoutPayload) => initiateCheckout(payload),
    onSuccess: (data) => {
      setUserProducts(data.userProducts);
    },
  });
};
