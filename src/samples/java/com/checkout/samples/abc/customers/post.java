package com.checkout.samples.abc.customers;// For more information please refer to https://github.com/checkout/checkout-sdk-java

import com.checkout.CheckoutApi;
import com.checkout.CheckoutSdk;
import com.checkout.Environment;
import com.checkout.common.IdResponse;
import com.checkout.common.Phone;
import com.checkout.customers.CustomerRequest;

import java.util.concurrent.ExecutionException;

public class post {

    public static void main(final String[] args) throws ExecutionException, InterruptedException {

        final CheckoutApi api = CheckoutSdk.defaultSdk()
                .staticKeys()
                .publicKey("public_key")
                .secretKey("secret_key")
                .environment(Environment.SANDBOX)
                .build();

        final CustomerRequest request = CustomerRequest.builder()
                .email("")
                .name("")
                .phone(Phone.builder().build())
                .build();

        final IdResponse response = api.customersClient().create(request).get();
    }

}
