package com.checkout.samples.nas.sessionsid;// For more information please refer to https://github.com/checkout/checkout-sdk-java

import com.checkout.CheckoutApiException;
import com.checkout.CheckoutArgumentException;
import com.checkout.CheckoutAuthorizationException;
import com.checkout.CheckoutSdk;
import com.checkout.Environment;
import com.checkout.four.CheckoutApi;
import com.checkout.sessions.GetSessionResponse;

import java.util.Map;
import java.util.concurrent.ExecutionException;

public class get {

    public static void main(final String[] args) throws ExecutionException, InterruptedException {

        final CheckoutApi api = CheckoutSdk.fourSdk()
                .staticKeys()
                .publicKey("public_key")
                .secretKey("secret_key")
                .environment(Environment.SANDBOX)
                .build();

        try {

            final GetSessionResponse response = api.sessionsClient().getSessionDetails("sessionId").get();
        } catch (final CheckoutApiException e) {
            // API error
            final String requestId = e.getRequestId();
            final int statusCode = e.getHttpStatusCode();
            final Map<String, Object> errorDetails = e.getErrorDetails();
        } catch (final CheckoutArgumentException e) {
            // bad input
        } catch (final CheckoutAuthorizationException e) {
            // invalid authorization
        }

    }

}

