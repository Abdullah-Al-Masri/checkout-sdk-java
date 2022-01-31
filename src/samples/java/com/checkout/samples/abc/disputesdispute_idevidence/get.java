package com.checkout.samples.abc.disputesdispute_idevidence;// For more information please refer to https://github.com/checkout/checkout-sdk-java

import com.checkout.CheckoutApi;
import com.checkout.CheckoutSdk;
import com.checkout.Environment;
import com.checkout.disputes.DisputeEvidenceResponse;
import com.checkout.disputes.DisputesQueryFilter;

import java.util.concurrent.ExecutionException;

public class get {

    public static void main(final String[] args) throws ExecutionException, InterruptedException {

        final CheckoutApi api = CheckoutSdk.defaultSdk()
                .staticKeys()
                .publicKey("public_key")
                .secretKey("secret_key")
                .environment(Environment.SANDBOX)
                .build();

        final DisputesQueryFilter query = DisputesQueryFilter
                .builder()
                .paymentId("")
                .limit(1)
                .build();

        final DisputeEvidenceResponse response = api.disputesClient().getEvidence("disputeId").get();

    }

}

