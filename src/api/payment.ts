import { paymentClient } from "./client";

export interface CheckoutPayload {
  items: Array<{
    productSlug: string;
  }>;
}

export interface CheckoutResponse {
  checkoutUrl: string;
  userProducts: Array<{
    productSlug: string;
    status: 'processing_payment' | 'unlocked' | 'locked';
  }>;
}

export const initiateCheckout = async (
  payload: CheckoutPayload
): Promise<CheckoutResponse> => {
  const response = await paymentClient<{ success: boolean; checkoutUrl: string; userProducts: Array<{ productSlug: string; status: string }> }>(
    '/checkout',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }
  );

  if (response.error) {
    console.error(`❌ [initiateCheckout] Error:`, response.error);
    throw new Error(response.error);
  }

  if (!response.data) {
    console.error('❌ [initiateCheckout] No data in response');
    throw new Error('No data in response');
  }

  if (response.data.success && response.data.checkoutUrl) {
    const userProducts = response.data.userProducts.map((up) => ({
      productSlug: up.productSlug,
      status: up.status as 'processing_payment' | 'unlocked' | 'locked',
    }));
    return {
      checkoutUrl: response.data.checkoutUrl,
      userProducts,
    };
  }

  console.error('❌ [initiateCheckout] Expected checkout URL but none found');
  throw new Error('Expected checkout URL but none found');
};