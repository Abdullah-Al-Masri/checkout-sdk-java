package com.checkout.samples.abc.paymentsidvoids;// For more information please refer to https://github.com/checkout/checkout-sdk-java

import com.checkout.CheckoutApi;
import com.checkout.CheckoutSdk;
import com.checkout.Environment;
import com.checkout.payments.VoidRequest;
import com.checkout.payments.VoidResponse;

import java.util.concurrent.ExecutionException;

public class post {

    public static void main(final String[] args) throws ExecutionException, InterruptedException {

        final CheckoutApi api = CheckoutSdk.defaultSdk()
                .staticKeys()
                .publicKey("public_key")
                .secretKey("secret_key")
                .environment(Environment.SANDBOX)
                .build();

        final VoidRequest voidRequest = VoidRequest.builder()
                .reference("")
                .build();

        final VoidResponse response = api.paymentsClient().voidPayment("paymentId", voidRequest).get();

    }

}


