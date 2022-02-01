

import com.checkout.CheckoutApi;
import com.checkout.CheckoutApiException;
import com.checkout.CheckoutArgumentException;
import com.checkout.CheckoutAuthorizationException;
import com.checkout.CheckoutSdk;
import com.checkout.Environment;
import com.checkout.payments.CaptureRequest;
import com.checkout.payments.CaptureResponse;

import java.util.HashMap;







        CheckoutApi api = CheckoutSdk.defaultSdk()
                .staticKeys()
                .publicKey("public_key")
                .secretKey("secret_key")
                .environment(Environment.SANDBOX) // or Environment.PRODUCTION
                .build();

        CaptureRequest captureRequest = CaptureRequest.builder()
                .reference("partial capture")
                .amount(10L)
                .metadata(new HashMap<>())
                .build();

        try {
            // or, capturePayment("payment_id") for a full capture
            CaptureResponse response = api.paymentsClient().capturePayment("payment_id", captureRequest).get();
        } catch (CheckoutApiException e) {
            // API error
            String requestId = e.getRequestId();
            int statusCode = e.getHttpStatusCode();
            Map<String, Object> errorDetails = e.getErrorDetails();
        } catch (CheckoutArgumentException e) {
            // Bad arguments
        } catch (CheckoutAuthorizationException e) {
            // Invalid authorization
        }

    }

}

