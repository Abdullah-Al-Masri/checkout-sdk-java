package com.checkout.samples.nas.riskassessmentspreauthentication;// For more information please refer to https://github.com/checkout/checkout-sdk-java

import com.checkout.CheckoutApiException;
import com.checkout.CheckoutArgumentException;
import com.checkout.CheckoutAuthorizationException;
import com.checkout.CheckoutSdk;
import com.checkout.Environment;
import com.checkout.common.Currency;
import com.checkout.common.CustomerRequest;
import com.checkout.four.CheckoutApi;
import com.checkout.risk.Device;
import com.checkout.risk.RiskPayment;
import com.checkout.risk.RiskShippingDetails;
import com.checkout.risk.preauthentication.PreAuthenticationAssessmentRequest;
import com.checkout.risk.preauthentication.PreAuthenticationAssessmentResponse;
import com.checkout.risk.source.CustomerSourcePrism;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;

public class post {

    public static void main(final String[] args) throws ExecutionException, InterruptedException {

        final CheckoutApi api = CheckoutSdk.fourSdk()
                .staticKeys()
                .publicKey("public_key")
                .secretKey("secret_key")
                .environment(Environment.SANDBOX)
                .build();

        try {
            final PreAuthenticationAssessmentRequest request = PreAuthenticationAssessmentRequest.builder()
                    .date(Instant.now())
                    .source(CustomerSourcePrism.builder().build())
                    .customer(new CustomerRequest())
                    .payment(RiskPayment.builder().build())
                    .shipping(RiskShippingDetails.builder().build())
                    .reference("")
                    .description("")
                    .amount(12L)
                    .currency(Currency.GBP)
                    .device(Device.builder().build())
                    .metadata(new HashMap<>())
                    .build();

            final PreAuthenticationAssessmentResponse response = api.riskClient().requestPreAuthenticationRiskScan(request).get();
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

